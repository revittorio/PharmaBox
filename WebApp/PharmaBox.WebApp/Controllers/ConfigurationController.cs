using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace PharmaBox.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConfigurationController : APIController
    {
        private static readonly NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();

        public ConfigurationController(IConfiguration configuration)
        {
        }

        [HttpGet("version")]
        //[ValidateAntiForgeryToken]
        public ActionResult<string> Version()
        {
            logger.Info("Verion 1.0");
            return "1.0";
        }
    }
}
