using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace CricStore.Domain.Entities
{
    public class Basket
    {
        private List<BasketLine> lineCollection = new List<BasketLine>();

        public void AddItem(Product product, int quantity)
        {
            BasketLine line = lineCollection.Where(p => p.Product.ProductId == product.ProductId).FirstOrDefault();

            if (line == null)
            {
                lineCollection.Add(new BasketLine { Product = product, Quantity = quantity });
            }
            else
            {
                line.Quantity += quantity;
            }
        }

        public void RemoveLine(Product product)
        {
            lineCollection.RemoveAll(l => l.Product.ProductId == product.ProductId);
        }

        public decimal ComputeTotalValue()
        {
            return lineCollection.Sum(e => e.Product.price * e.Quantity);
        }

        public void Clear()
        {
            lineCollection.Clear();
        }

        public IEnumerable<BasketLine> Lines
        {
            get { return lineCollection; }
        }
    }

    public class BasketLine
    {
        public Product Product { get; set; }
        public int Quantity { get; set; }
    }
}
