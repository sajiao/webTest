using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Common;
namespace UnitTest
{
    [TestClass]
    public class CommonTest
    {
        [TestMethod]
        public void Test_GetWorkDay()
        {
            int days = Utility.GetWorkDay(DateTime.Now.AddDays(-17), DateTime.Now);
            Assert.IsTrue(days == 12);
        }
    }
}
