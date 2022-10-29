using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class UserController : Controller
    { 
        private readonly DataContext _context;

        public UserController( DataContext context)
        {
            _context = context;
        }

        [HttpGet]   
        public async Task<ActionResult<IEnumerable<Appuser>>> GetUser()
        {
            return await _context.Users.ToListAsync();
            
        } 
        
        [HttpGet("{Id}")]   
        public async Task<ActionResult<Appuser>> GetUser(int Id)
        {
            return await _context.Users.FindAsync(Id) ;
            
        }
    }
}
