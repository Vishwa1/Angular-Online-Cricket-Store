using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CricStore.Domain.Abstract;
using CricStore.Domain.Entities;

namespace OnlineCricStore.WebUI.Controllers
{
    public class ProductController : Controller
    {
        // GET: /Products/

        private IProductRepository objContext;
        
        public ProductController(IProductRepository productRepository)
        {
            this.objContext = productRepository;
        }

        //Displays List of products
        public ViewResult List()
        {
            return View(objContext.Products);
        }

        public ActionResult BrandList(int BrandId)
        {
            
            return View();
        }

        
        public ActionResult Details()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetProduct(int BrandId)
        {
            IQueryable<Product> products = objContext.BrandList(BrandId);

            
            return Json(products, JsonRequestBehavior.AllowGet); 
        }

        [HttpGet]
        public JsonResult GetDetails(int id)
        {
            Product product = objContext.Details(id);
            return Json(product, JsonRequestBehavior.AllowGet);
        }

    }
}
