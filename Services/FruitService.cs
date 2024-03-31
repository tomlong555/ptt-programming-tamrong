using Microsoft.Extensions.Caching.Memory;
using Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Services
{
    public class FruitService : IFruitService
    {
        private readonly IMemoryCache _memoryCache;

        public FruitService(
            IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        public async Task<bool> CreateFruit(FruitModel input)
        {
            if (string.IsNullOrWhiteSpace(input.FruitPhoto)
                || string.IsNullOrWhiteSpace(input.FruitName))
            {
                return false;
            }
            else
            {
                if (_memoryCache.TryGetValue("fruit", out List<FruitModel> data))
                {
                    var oldData = data.ToList();
                    _memoryCache.Remove("fruit");
                    oldData.Add(input);
                    _memoryCache.Set("fruit", oldData);
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public async Task<List<FruitModel>> GetFruits(string? name)
        {
            var reults = new List<FruitModel>();
            var data = _memoryCache.Get<List<FruitModel>>("fruit");
            if (data != null)
            {
                reults = data.Where(t => string.IsNullOrEmpty(name) || t.FruitName.Contains(name)).ToList();
            }
            else
            {
                var newFruit = new List<FruitModel>
                {
                    new FruitModel
                    {
                        FruitName = "Cherry",
                        FruitPhoto = $"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/330px-Cherry_season_%2848216568227%29.jpg",
                    },
                    new FruitModel
                    {
                        FruitName = "Pear",
                        FruitPhoto = $"https://static.libertyprim.com/files/familles/poire-large.jpg?1569271830",
                    },
                    new FruitModel
                    {
                        FruitName = "Orange",
                        FruitPhoto = $"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg?20141112073556",
                    },
                    new FruitModel
                    {
                        FruitName = "Corn",
                        FruitPhoto = $"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/VegCorn.jpg/330px-VegCorn.jpg",
                    },
                    new FruitModel
                    {
                        FruitName = "Green apple",
                        FruitPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/GreenApple.png/1200px-GreenApple.png",
                    },
                };
                _memoryCache.Set("fruit", newFruit);
                reults = newFruit;
            }
            return reults;
        }
    }
}
