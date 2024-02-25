//Function for name prompt and display of output as html element
function myFunction() {
    var person = prompt("Please enter your name");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      person;
    }
}

//Image resizing on click function
function imgFunction() {
    document.getElementById("myImg").height = "330";
    document.getElementById("myImg").width = "300";
}

//When the user clicks on the button, toggle between hiding and showing the drop down content for "Extra Curricular Activities" Menu
function menuFunction() {
    document.getElementById("myDropdown").classList.toggle("show"); 
}

//When the user clicks on the button, toggle between hiding and showing the drop down content for "Menu" Menu
function menuFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show"); 
}

//mouseover and mouseout events
function mOver(some_tag) {
    some_tag.innerHTML= "Will Direct to External Link"
}

function mOut(element) {
    some_tag.innerHTML= "These Are External Links"
}