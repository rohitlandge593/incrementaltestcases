using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnetapp.Models;
using Microsoft.AspNetCore.Mvc;

namespace dotnetapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlayerController : ControllerBase
    {
        ApplicationDbContext db;
        public PlayerController(ApplicationDbContext context)
        {
            this.db=context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var playerList = db.Players.ToList();
            return Ok(playerList);
        }
        [HttpPost]
        public IActionResult Post(Player player)
        {
            db.Players.Add(player);
            db.SaveChanges();
            return CreatedAtAction("Get",new {id=player.Id},player);
        } 
    }
}