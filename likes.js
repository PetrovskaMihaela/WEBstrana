

var results = document.getElementsByClassName("result");
//var count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0, count7 = 0, count8 = 0, count9 = 0;

window.localStorage.setItem("l1", JSON.stringify(count1));
window.localStorage.setItem("l2", JSON.stringify(count2));
window.localStorage.setItem("l3", JSON.stringify(count3));
window.localStorage.setItem("l4", JSON.stringify(count4));
window.localStorage.setItem("l5", JSON.stringify(count5));
window.localStorage.setItem("l6", JSON.stringify(count6));
window.localStorage.setItem("l7", JSON.stringify(count7));
window.localStorage.setItem("l8", JSON.stringify(count8));
window.localStorage.setItem("l9", JSON.stringify(count9));


function clickCounter(num) {
    n = num-1;
    if (typeof(Storage) !== "undefined") {
      if (true) {
        newCount = Number( localStorage.getItem("l"+num)) +1;
        localStorage.setItem("l" + JSON.stringify(num) , JSON.stringify(newCount));
      } else {
        newCount = 1;
        localStorage.setItem("l"+num, JSON.stringify(newCount));
      } 
      results[n].innerHTML = "This photo has  "+ localStorage.getItem("l" + JSON.stringify(num))+"  likes!";
   } else {
      results[n].innerHTML = "Sorry, your browser does not support web storage...";
    }
  }



 