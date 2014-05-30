using System.Web;
using System.Web.Mvc;

namespace OnlineCricStore.WebUI
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            //filters.Add(new AuthorizeAttribute()); // For Admin authorization
        }
    }
}