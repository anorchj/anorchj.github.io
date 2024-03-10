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

//Toggle between show and hide when menu is clicked for "Extra Curricular Activities"
function menuFunction() {
    document.getElementById("myDropdown").classList.toggle("show"); 
}

//Toggle between show and hide when menu is clicked for "Menu"
function menuFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show"); 
}

//mouseover and mouseout events
function mOver(some_tag) {
    some_tag.style.color= "Green"
}

function mOut(some_tag) {
    some_tag.style.color= "Red"
}