using System.ComponentModel.DataAnnotations;

namespace api.Dtos
{
    public class CreateRoleDto
    {
        [Required(ErrorMessage ="Role Name is required.")]
             public string RoleName { get; set; } = null!;
    }
}