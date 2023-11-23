using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        
        public DbSet<Player> Players{get;set;}
        public DbSet<Team> Teams{get;set;}
        public DbSet<User> Users{get;set;}
        public DbSet<Register> Registers{get;set;}
        public DbSet<Login> Logins{get;set;}

        // Add DbSet properties for other entities as needed
    }
}
