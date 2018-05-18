
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace wbible.Models
{    public class  User
    {
        public int id{get; set; }
        public string userid {get; set;}
        public string email {get;set;}
        public string hash {get; set;}
        public bool active {get; set;}
        public int role {get; set;}
    }
}
