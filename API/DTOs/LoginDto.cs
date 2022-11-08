using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class LoginDto
    {
        [Required(AllowEmptyStrings = false, ErrorMessage = "nospaces allowd")]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }
    }
}