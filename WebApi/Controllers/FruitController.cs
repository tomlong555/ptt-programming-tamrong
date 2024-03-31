using Microsoft.AspNetCore.Mvc;
using Services;
using Services.Models;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FruitController : ControllerBase
    {
        private readonly IFruitService _fruitService;
        public FruitController(
            IFruitService fruitService)
        {
            _fruitService = fruitService;
        }

        [HttpPost(Name = "CreateFruit")]
        public async Task<ActionResult<bool>> CreateFruit([FromBody] FruitModel input)
        {
            var result = await _fruitService.CreateFruit(input);
            return Ok(result);
        }

        [HttpGet(Name = "GetFruits/{name}")]
        public async  Task<ActionResult<List<FruitModel>>> GetFruits(string? name)
        {
            var result = await _fruitService.GetFruits(name);
            return Ok(result);
        }

    }
}
