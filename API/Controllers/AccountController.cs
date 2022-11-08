using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly ITokenService _tokenServices;

        //private readonly IConfiguration _configuration;

        public AccountController(DataContext context, ITokenService tokenServices)
        {
            _context = context;
            _tokenServices = tokenServices;
        }

        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }

        [HttpPost("register")]
        public async Task<ActionResult<userdto>> Register(RegisterDTO registerDTO)
        {
            if (await UserExists(registerDTO.Username)) return BadRequest("Username is taken");

            using var hmac = new HMACSHA512();

            var user = new Appuser
            {
                UserName = registerDTO.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDTO.Password)),
                PasswordSalt = hmac.Key
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return new userdto
            {
                Username = user.UserName,
                Token = await _tokenServices.CreateToken(user)
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<userdto>> Login(LoginDto login)
        {
            var user = await _context.Users
                .SingleOrDefaultAsync(x => x.UserName == login.UserName);
            if (user == null) return Unauthorized("Invalid username");

            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computerhash = hmac.ComputeHash(Encoding.UTF8.GetBytes(login.Password));
            for (int i = 0; i < computerhash.Length; i++)
                if (computerhash[i] != user.PasswordHash[i]) return Unauthorized("Invalid Password");

            return new userdto
            {
                Username = user.UserName,
                Token = await _tokenServices.CreateToken(user)
            };
        }
    }
}