using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Text.Json;

namespace PharmaBox.WebApp.Pages
{
    public class IndexModel : PageModel
    {
        const string sessionKey = "User_";
        public DateTime creationDate;
        private JsonSerializerOptions cOptions = new JsonSerializerOptions(); // RSPSerializerOptions.Options;

        public void OnGet()
        {
            creationDate = DateTime.UtcNow;

            var value = HttpContext.Session.GetString(sessionKey);

            if (string.IsNullOrEmpty(value))
            {
                var serialisedCreationDate = JsonSerializer.Serialize<string>(creationDate.ToLongDateString(), cOptions);
                HttpContext.Session.SetString(sessionKey, serialisedCreationDate);

            }
            else
            {
                creationDate = JsonSerializer.Deserialize<DateTime>(value, cOptions);
            }
        }
    }
}