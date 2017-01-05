using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ScheduleGraph.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ScheduleGraph.Controllers
{
    [Route("api/[controller]")]
    public class ScheduleController : Controller
    {
        [HttpGet, Route("/api/schedule")]
        public IEnumerable<IEnumerable<RunModel>> Get(DateTime startDate, DateTime endDate)
         {
            return new List<List<RunModel>>
            {
              new List<RunModel>{
                new RunModel{RunID = 11111, Status = "PDQCR", OrderNo=22222, PartNo="1110-FDC", Quantity=122, QuantityUom="PC", RunTime=4, StartDate=new DateTime(2016,1,1,1,12,00,DateTimeKind.Utc), PromiseDate= new DateTime(2016,1,6,1,12,00,DateTimeKind.Utc)},
                new RunModel{RunID = 11112, Status = "PDQCR", OrderNo=22222, PartNo="1110-FDB", Quantity=140, QuantityUom="FT", RunTime=5.6, StartDate=new DateTime(2016,1,1,7,00,00,DateTimeKind.Utc),PromiseDate= new DateTime(2016,1,6,1,12,00,DateTimeKind.Utc), Compounds = new string[]{"compound1", "compound2" } },
                new RunModel{RunID = 11115, Status = "PDQCR", OrderNo=22265, PartNo="1124-TRF", Quantity=130, QuantityUom="PC", RunTime=2, StartDate=new DateTime(2016,1,1,15,15,00,DateTimeKind.Utc),PromiseDate= new DateTime(2016,1,6,1,12,00,DateTimeKind.Utc), Tapes = new string[]{"tape1"} },
              },
              new List<RunModel>{
                new RunModel{RunID = 21111, Status = "PDQCR", OrderNo=22256, PartNo="1110-FDC", Quantity=100, QuantityUom="YD", RunTime=3.5, StartDate=new DateTime(2016,1,2,4,18,00,DateTimeKind.Utc),PromiseDate= new DateTime(2016,1,6,1,12,00,DateTimeKind.Utc)},
                new RunModel{RunID = 11451, Status = "KANBAN", OrderNo=9999, PartNo="2222-FGC", Quantity=400, QuantityUom="PC", RunTime=9.4, StartDate=new DateTime(2016,1,2,9,00,00,DateTimeKind.Utc), PromiseDate= new DateTime(2016,1,6,1,12,00,DateTimeKind.Utc), Compounds= new string[]{"compound4", "compound5" } },
              },
              new List<RunModel>{
                new RunModel{RunID = 12345, Status = "KANBAN", OrderNo=34566, PartNo="1234-FDC", Quantity=1445, QuantityUom="IN", RunTime=14, StartDate=new DateTime(2016,1,3,1,00,00,DateTimeKind.Utc), PromiseDate= new DateTime(2016,1,6,1,12,00,DateTimeKind.Utc)},
              },
              new List<RunModel>{
                new RunModel{RunID = 54321, Status = "PROD", OrderNo=55423, PartNo="23DX65", Quantity=28, QuantityUom="M", RunTime=10, StartDate=new DateTime(2016,1,5,1,00,00,DateTimeKind.Utc), PromiseDate= new DateTime(2016,1,6,1,12,00,DateTimeKind.Utc)}
              }
            };
        }
    }
}
