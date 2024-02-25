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
    document.getElementById("myImg").height = "330".width="300";
}

