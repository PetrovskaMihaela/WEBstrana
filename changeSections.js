var sectionIndex=1;
showSection(sectionIndex);



function currentSection(n) {
    showSection(sectionIndex = n);
}

function showSection(n) {
    var i;
    var sections = document.getElementsByClassName("mySections");
    //var dots = document.getElementsByClassName("dot");
    if (n > sections.length) {sectionIndex = 1}    
    if (n < 1) {sectionIndex = sections.length}
    for (i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";  
    }
    /*for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }*/
    sections[sectionIndex-1].style.display = "block";  
    //dots[slideIndex-1].className += " active";
  }
  window.addEventListener( "load", start, false );