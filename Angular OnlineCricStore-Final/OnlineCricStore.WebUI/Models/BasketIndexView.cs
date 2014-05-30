using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CricStore.Domain.Entities;

namespace OnlineCricStore.WebUI.Models
{
    public class BasketIndexView
    {
        public Basket Basket { get; set; }
        public string ReturnUrl { get; set; }
        public decimal TotalPrice { get; set; }
    }
}