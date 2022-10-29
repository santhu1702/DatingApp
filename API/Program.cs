using API.Data;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>(opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));

//CorsMethod1
//builder.Services.AddCors(policy => policy.AddPolicy("corspolicy", build =>
//{
//    build.WithOrigins("http://localhost:4200");
//    build.AllowAnyMethod();
//    build.AllowAnyHeader();
//}));

//CorsMethod2

builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();

//CorsMethod1
//app.UseCors("corspolicy");

//CorsMethod2
app.UseCors(policyName => policyName.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200","https://localhost:4200"));
app.UseAuthorization();

app.MapControllers();

app.Run();
