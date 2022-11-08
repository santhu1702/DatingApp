using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class UserController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UserController(IUserRepository userRepository , IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUser()
        {


            return Ok(await _userRepository.GetMembersAsync());
        }

        //[HttpGet("{Id}")]
        //[Authorize]
        //public async Task<ActionResult<MemberDto>> GetUser(int Id)
        //{
        //    return Ok(await _userRepository.GetUserByIdAsync(Id));
        //}

        [HttpGet("{username}")]
        [Authorize]
        public async Task<ActionResult<MemberDto>> GetUserByUserName(string username)
        {
           return await _userRepository.GetMemberAsync(username);
        }
    }
}