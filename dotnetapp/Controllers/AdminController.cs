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
        [Route("PostPlayers")]
        public IActionResult PostPlayers(Player player)
        {
            _context.Players.Add(player);
            _context.SaveChanges();
            return Ok();
        }

        [Route("PutPlayer")]
        [HttpPut]            
        public IActionResult PutPlayer(int id,Player player)
        {
            var playerList=_context.Players.Find(id);
            if(playerList!=null)
            {
                playerList.Age=player.Age;
                playerList.Name=player.Name;
                playerList.TeamId=player.TeamId;
                playerList.Category=player.Category;
                playerList.BiddingPrice=player.BiddingPrice;
                _context.Update(playerList);
                _context.SaveChanges();
                return Ok();
            }
            else  
                return NotFound();            

         } 

        [HttpDelete]
        [Route("DeletePlayer")]
        public IActionResult DeletePlayer(int id)
        {
            var playerList=_context.Players.Find(id);
            if(playerList!=null)
            {
                _context.Players.Remove(playerList);
                _context.SaveChanges();
                return Ok();
            }
            else
                return NotFound();
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

        [HttpDelete]
        [Route("DeleteTeam")]
        public IActionResult DeleteTeam(int id)
        {
            var teamList=_context.Teams.Find(id);
            if(teamList!=null)
            {
                _context.Teams.Remove(teamList);
                _context.SaveChanges();
                return Ok();
            }
            else
                return NotFound();
        }

        
    }
}