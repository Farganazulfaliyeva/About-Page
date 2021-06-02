function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
 
  function mouseOver() {
    document.getElementById("child").style.display = "block";
  }
  
  function mouseOut() {
    document.getElementById("child").style.display = "none";
  }

