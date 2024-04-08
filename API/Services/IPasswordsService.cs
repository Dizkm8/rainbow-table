using API.Models;

namespace API.Services;

public interface IPasswordsService
{
    public Task<Password> FindOne(string hash);
}
