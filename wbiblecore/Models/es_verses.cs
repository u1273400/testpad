using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace wbible.Models
{
  public class bible_verses
  {
      public int chno { get; set; }
      public int vno { get; set; }
      public string bookcode { get; set; }
      public string book { get; set; }
      public string verse { get; set; }
      public string img1 { get; set; }
      public string img2 { get; set; }

      public override string ToString(){
          return verse;
      }
  }
}
