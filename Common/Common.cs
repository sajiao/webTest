using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Common
{
    public static class Utility
    {

        public static int GetWorkDay(DateTime dtStart, DateTime dtEnd)
        {
            TimeSpan ts = dtEnd.AddDays(1).Subtract(dtStart);
            int countday = ts.Days;
            int workday = 0;

            for (int i = 0; i < countday; i++)
            {
                DateTime tempdt = dtStart.Date.AddDays(i);
                if (tempdt.DayOfWeek != System.DayOfWeek.Saturday && tempdt.DayOfWeek != System.DayOfWeek.Sunday)
                {
                    workday++;
                }
            }
            return workday;
        }

    }
}
