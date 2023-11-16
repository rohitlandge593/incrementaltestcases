using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Controllers
{

    
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AdminController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetPlayer")]
        public IActionResult Get()
        {
            var playerList = _context.Players.ToList();
            return Ok(playerList);
        }
        [HttpPost]
        [Route("Post")]
        public IActionResult Post(Player player)
        {
            _context.Players.Add(player);
            _context.SaveChanges();
            return CreatedAtAction("Get",new {id=player.Id},player);
        } 
        [HttpGet]
        [Route("GetTeams")]
        public IActionResult GetTeams()
        {
            var teamList= _context.Teams.ToList();
            return Ok(teamList);
        }

        
    }
}