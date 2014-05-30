using OnlineCricStore.WebUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OnlineCricStore.WebUI.Controllers
{
    public class HomeController : Controller
    {
       // [AllowAnonymous]
        public ActionResult Index()      
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";
            return View();
        }
        public ActionResult Main()
        {
            
            return View();
        }
        //[Authorize (Roles = "admin")]
        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        [HttpPost]
        [AllowAnonymous]
        public JsonResult Contact(ContactModel model)
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
                    ModelState.AddModelError("",e.InnerException);
                }
            }
            return Json(new
            {
                success = false,
                errors = ModelState.Keys.SelectMany(k => ModelState[k].Errors)
                                .Select(m => m.ErrorMessage).ToArray()
            });
        }
        public ActionResult Career()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

      }
}
