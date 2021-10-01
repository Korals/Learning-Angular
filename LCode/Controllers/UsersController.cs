using LCode.Data;
using LCode.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LCode.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly Context _context;

        public UsersController(Context context) => _context = context;

        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsersAsync() => await _context.Users.ToListAsync();

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUserByIdAsync(int id) => await _context.Users.FindAsync(id);
    }
}
