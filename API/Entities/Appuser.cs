﻿using API.Extentions;

namespace API.Entities
{
    public class Appuser
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string KnownAs { get; set; }

        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;

        public string Gender { get; set; }

        public string Introduction { get; set; }

        public string LookingFor { get; set; }

        public string Intrests { get; set; }

        public string city { get; set; }

        public string Country { get; set; }


        public ICollection<Photo> Photos { get; set; }

        //public int GetAge() => DateOfBirth.CalculateAge();
    }
}