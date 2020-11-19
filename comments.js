
// OBID ZA KOMENTARI NA SEKOJA SLIKA


/*var comments = document.getElementsByClassName("comment")
var titles = [[],[],[],[],[],[],[],[],[]];
var titleInput = document.getElementsByClassName("title");
var messageBox = document.getElementsByClassName("display");

function Allow(clickedId)
{ 
   var i;
   var titlespom=[];
   titlespom=titles[clickedId];
   for (i = 0; i < comments.length; i++) {
      if(clickedId == comments[i]){
         var _id=i;
         if (!getElementById("_id").value.match(/[a-zA-Z]$/) && getElementById("_id").value !="")
            {
               getElementById("_id").value="";
               alert("Please Enter only alphabets");
             }
   
   window.location.reload()
}}}


function insert (clickedId) {
   var i;
   var titlespom=[];
   titlespom = titles[clickedId-11];
   for (i = 0; i < comments.length; i++) {
      if(clickedId == comments[i]){
         var __id=i;
         titlespom.push(document.getElementById("_id").value);
         clearAndShow(__id);
      }
   }
}


function clearAndShow(n) {
   var i;
   var titlespom=[];
   titlespom=titles[clickedId-50];
   for (i = 0; i < comments.length; i++) {
      if(n == comments[i]){
         var _id=i;
         document.getElementById("_id").value="";
         document.getElementById("50 + _id").messageBox.innerHTML="";
         document.getElementById("50 + _id").messageBox.innerHTML += " " + titlespom.join("<br/> ") + "<br/>";
      }  
   }
}



