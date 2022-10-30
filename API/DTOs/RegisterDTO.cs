using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDTO
    {
        [Required(AllowEmptyStrings =false,ErrorMessage ="nospaces allowd")]

        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
