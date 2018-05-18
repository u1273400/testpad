using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace wbible.Models
{
  public class es_verse_img
  {
      public int sc { get; set; }
      public int ec { get; set; }
      public int ssv { get; set; }
      public int sev { get; set; }
      public int eev { get; set; }
      public string book { get; set; }
      public string img1 { get; set; }
      public string img2 { get; set; }

      public override string ToString(){
          return img1;
      }
  }
}
