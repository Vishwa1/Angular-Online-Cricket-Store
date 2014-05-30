using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CricStore.Domain.Abstract;
using CricStore.Domain.Entities;
using System.Data.Entity;

namespace CricStore.Domain.Concrete
{
    public class EFProductRepository : IProductRepository
    {
        private CricDbContext context = new CricDbContext();

        public IQueryable<Product> Products
        {
            get { return context.Products; }
        }

        public IQueryable<Product> BrandList(int brandId)
        {
            IQueryable<Product> p = context.Products.Where(x => x.BrandId == null || x.BrandId == brandId);
           
            return p;
        }
        public Product Details(int productId)
        {
            Product p = context.Products.Find(productId);

            return p;
        }

        //public IQueryable<Product> SearchProducts(int BrandId, string searchString)
        //{ 

        //}

    }
}
