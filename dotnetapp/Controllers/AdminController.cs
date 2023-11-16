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
        public IActionResult GetPlayers()
        {
            var playerList = _context.Players.ToList();
            return Ok(playerList);
        }
        [HttpPost]
        [Route("Post")]
        public IActionResult PostPlayers(Player player)
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
        [HttpPost]
        [Route("PostTeams")]
        public IActionResult PostTeams(Team team)
        {
            _context.Teams.Add(team);
            _context.SaveChanges();
            return Ok();
        }
        
        [Route("PutTeam")]
        [HttpPut]            
        public IActionResult PutTeam(int id,Team team)
        {
            var teamList=_context.Teams.Find(id);
            if(teamList!=null)
            {
                teamList.Name=team.Name;
                _context.Update(teamList);
                _context.SaveChanges();
                return Ok();
            }
            else  
                return NotFound();  

            // db.Update(teamList         // db.SaveChanges();            

         }

        
    }
}