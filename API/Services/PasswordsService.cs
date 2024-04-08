using API.Data;
using API.Exceptions;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Services;

public class PasswordsService(DataContext context) : IPasswordsService
{
    private readonly DataContext _context = context;

    public async Task<Password> FindOne(string hash)
    {
        var result =
            await _context.Passwords.FirstOrDefaultAsync(p =>
                p.md5 == hash || p.sha1 == hash || p.sha256 == hash || p.sha512 == hash
            ) ?? throw new NotFoundException("Password not found");

        return result;
    }
}
