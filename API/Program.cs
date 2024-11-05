using API.Extensions;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddApplicationServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

using var scope = app.Services.CreateScope();
var service = scope.ServiceProvider;

app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

try
{
    var context = service.GetRequiredService<DataContext>();
    await context.Database.MigrateAsync();
    await Seed.SeedData(context);
}
catch (Exception Ex)
{
    var logger = service.GetRequiredService<ILogger<Program>>();
    logger.LogError(Ex, "An error occured during migration");
}

app.Run();
