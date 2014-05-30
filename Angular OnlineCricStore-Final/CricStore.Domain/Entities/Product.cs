using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CricStore.Domain.Entities
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public decimal price { get; set; }

      
        public string ThumbnailPath { get; set; }
        public string ImagePath { get; set; }
                
        //Foreign Key Setup
        public int BrandId { get; set; }

        public  string BrandName { get; set; }
        //public virtual Brand Brand { get; set; }
        public int CategoryId { get; set; }
        //public virtual Category Category { get; set; }
        public  string CategoryName { get; set; }
        
    }
    
}
