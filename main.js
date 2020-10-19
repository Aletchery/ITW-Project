/*funkcia ktora zatvori menu pri kliknuti na polozku*/ 
function burger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav responsive") {
     x.className = "topnav";
  }
}
/*funkcia na otvaranie a zatvaranie menu pomocou ikony*/
  function bastrigulimotikas() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
 