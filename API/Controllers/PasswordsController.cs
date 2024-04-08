using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class PasswordsController(IPasswordsService service) : AbstractController
{
    private readonly IPasswordsService _service = service;

    [HttpGet("{hash}")]
    public async Task<IActionResult> Get(string hash)
    {
        var password = await _service.FindOne(hash);

        return Ok(password);
    }
}
