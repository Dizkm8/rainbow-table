using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Password
    {
        [Key]
        public string original { get; set; } = string.Empty;

        public string md5 { get; set; } = string.Empty;

        public string sha1 { get; set; } = string.Empty;

        public string sha256 { get; set; } = string.Empty;

        public string sha512 { get; set; } = string.Empty;
    }
}
