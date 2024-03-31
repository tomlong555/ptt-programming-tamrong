using Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public interface IFruitService
    {
        public Task<List<FruitModel>> GetFruits(string? name);
        public Task<bool> CreateFruit(FruitModel input);

    }
}
