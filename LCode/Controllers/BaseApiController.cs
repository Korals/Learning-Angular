using LCode.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace LCode.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [ApiController]
    [Route("[controller]")]
    public class BaseApiController : ControllerBase
    {
    }
}
