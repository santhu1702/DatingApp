using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class UserController : BaseApiController
    { 
        private readonly DataContext _context;

        public UserController( DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Appuser>>> GetUser()
        {
            return await _context.Users.ToListAsync();
            
        } 
        
        [HttpGet("{Id}")]
        [Authorize]

        public async Task<ActionResult<Appuser>> GetUser(int Id)
        {
            return Ok(await _context.Users.FindAsync(Id)) ;
            
        }
    }
}
