using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleGraph.Models
{
    public class RunModel
    {
        public int RunID { get; set; }
        public string Status { get; set; }
        public int OrderNo { get; set; }
        public string PartNo { get; set; }
        public int Quantity { get; set; }
        public string QuantityUom { get; set; }
        public double RunTime { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime PromiseDate { get; set; }
        public string[] Compounds { get; set; }
        public string[] Tapes { get; set; }
    }
}
