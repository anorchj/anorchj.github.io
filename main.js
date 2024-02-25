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
//Close the drop down menu if the user clicks outside of it 
window.onclick=function(event) { 
    if (!event.target.matches('.dropbtn')) { 
        var dropdowns=document.getElementsByClassName("dropdown-content"); 
        for(var i=0; i<dropdowns.length; i++){ varopenDropdown=dropdowns[i]; 
            if (openDropdown.classList.contains('show')){ 
                openDropdown.classList.remove('show'); 
            } 
        } 
    } 
}