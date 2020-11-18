
function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "This photo has " + localStorage.clickcount + " likes!";
   } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }



  var identifikacija;
  var likes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  function countLikes(clicked_id) {
      likes[clicked_id-1]++;
      identifikacija = "r"+clicked_id;
      document.getElementById(identifikacija).innerHTML = likes[clicked_id-1];
  }