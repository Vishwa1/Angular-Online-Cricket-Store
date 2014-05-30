using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Globalization;
using System.Web.Security;

namespace OnlineCricStore.WebUI.Models
{
    public class ContactModel
    {
        [Required(ErrorMessage = "Please Enter  Name")]
        [Display(Name = "Name")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Please Enter  Email")]
        [Display(Name = "Email")]
        public string Email { get; set; }

         [Required(ErrorMessage = "Please Enter  Message")]
        [Display(Name = "Message")]
        public string Message { get; set; }

         
    }
}
