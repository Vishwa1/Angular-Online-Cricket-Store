using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CricStore.Domain.Abstract;
using CricStore.Domain.Entities;
using OnlineCricStore.WebUI.Models;

namespace OnlineCricStore.WebUI.Controllers
{
    public class BasketController : Controller
    {
        // GET: /Basket/

        private IProductRepository repository;

        public BasketController(IProductRepository repo)
        {
            this.repository = repo;
        }

        public ActionResult AddToBasket()
        {
            
            return View("Index");
        }

        private Basket GetBasket()
        {
            Basket basket = (Basket)Session["Basket"];
            if (basket == null)
            {
                basket = new Basket();
                Session["Basket"] = basket;
            }
            return basket;
        }


        public ViewResult Index()
        {
            return View();

        }

        //Get Shopping Basket Summary 
        public PartialViewResult ShoppingSummary(Basket basket)
        { 
            return PartialView(basket);
        }


        public ActionResult Checkout()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public JsonResult Checkout(ShippingDetails model)
        {
            if (ModelState.IsValid)
            {
                // Attempt to register the user
                try
                {
                    
                    return Json(new { success = true });
                }
                catch (Exception e)
                {
                    ModelState.AddModelError("", (e.InnerException));
                }
            }
            return Json(new
            {
                success = false,
                errors = ModelState.Keys.SelectMany(k => ModelState[k].Errors)
                                .Select(m => m.ErrorMessage).ToArray()
            });
        }

        public ActionResult CompletedOrder()
        {
            return View();
        }


        [HttpGet]
        public JsonResult GetProductBasket(int id,string returnUrl)
        {
            Product product = repository.Products.FirstOrDefault(x => x.ProductId == id);
            if (product != null)
            {
                GetBasket().AddItem(product, 1);
            }
        BasketIndexView ProductBasket=   new BasketIndexView
            { 
                Basket = GetBasket(),
                ReturnUrl = returnUrl,
                TotalPrice = GetBasket().Lines.Sum(e => e.Product.price * e.Quantity)
            };
        return Json(ProductBasket, JsonRequestBehavior.AllowGet);
        }

       

        [HttpGet]
        public JsonResult RemoveProductBasket(int id, string returnUrl)
        {
            Product product = repository.Products.FirstOrDefault(x => x.ProductId == id);
            if (product != null)
            {
                GetBasket().RemoveLine(product);
            }
            BasketIndexView ProductBasket = new BasketIndexView
            {
                Basket = GetBasket(),
                ReturnUrl = returnUrl,
                TotalPrice = GetBasket().Lines.Sum(e => e.Product.price * e.Quantity)
            };
            return Json(ProductBasket, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult IndexProductBasket(string returnUrl)
        {
           
            BasketIndexView ProductBasket = new BasketIndexView
            {
                Basket = GetBasket(),
                ReturnUrl = returnUrl,
                TotalPrice = GetBasket().Lines.Sum(e => e.Product.price * e.Quantity)
            };
            return Json(ProductBasket, JsonRequestBehavior.AllowGet);
        }
    }
}
