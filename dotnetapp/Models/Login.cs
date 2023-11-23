using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class Login
    {
        [Key]
        public int UserId{get;set;}
        public string UserName{get;set;}
        public string Password{get;set;}
    }
}