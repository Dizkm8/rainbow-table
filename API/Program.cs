using API.Data;
using API.Middleware;
using API.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var corsOrigins = "_corsOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: corsOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:5173");
        }
    );
});

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DataContext>(opt => opt.UseSqlite("Data Source=Data/PDB2.db"));

builder.Services.AddScoped<IPasswordsService, PasswordsService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(corsOrigins);

app.UseAuthorization();

app.UseMiddleware<NotFoundMiddleware>();

app.MapControllers();

app.Run();
