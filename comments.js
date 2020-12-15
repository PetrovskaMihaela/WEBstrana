
// OBID ZA KOMENTARI NA SEKOJA SLIKA

// reseno, raboti 

var titles = [[],[],[],[],[],[],[],[],[]];
var titleInputBoxes = document.getElementsByClassName("title");
var displayBoxes = document.getElementsByClassName("display");

function insert (number) {
   var i = number;
   titles[i-1].push(titleInputBoxes[i-1].value);
   clearAndShow(i-1);
}

function clearAndShow (number){
   var i = number;
   titleInputBoxes[i].value = "";
   displayBoxes[i].innerHTML = "";
   displayBoxes[i].innerHTML += " " + titles[i].join("<br/> ") + "<br/>";
   titles[i].value = "";
}

