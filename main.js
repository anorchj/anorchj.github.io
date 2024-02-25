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

//When the user clicks on the button, toggle between hiding and showing the drop down content
function menuFunction() {
    document.getElementById("myDropdown").classList.toggle("show"); 
}
