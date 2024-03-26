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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form data
    var formData = {
        'birthdate': document.getElementById('birthdate').value,
        'name': document.getElementById('name').value,
        'email': document.getElementById('email').value,
        'phone': document.getElementById('phone').value,
        'message': document.getElementById('message').value,
        'contact_method': document.querySelector('input[name="contact_method"]:checked').value,
        'recruitment_period': document.getElementById('recruitment_period').value,
        'key_qualifications': getCheckedCheckboxes()
    };

    // Store form data in local storage
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    
});

// Function to get checked checkboxes
function getCheckedCheckboxes() {
    var checkboxes = document.querySelectorAll('input[name="key_qualifications"]:checked');
    var values = [];
    checkboxes.forEach(function(checkbox) {
        values.push(checkbox.value);
    });
    return values;
}

<a href="javascript:void(0);" onclick="document.body.style.fontSize='.5em';"><span style="font-size: xx-small;">Small</span></a>
