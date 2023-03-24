//MENU TOGGLING
function toggle(){
    let w = document.getElementById("show");
    let x = document.getElementById("first");
    let y = document.getElementById("second");
    let z = document.getElementById("third");

    x.classList.toggle("first");
    y.classList.toggle("second");
    z.classList.toggle("third");
    
    if (w.style.display === "block") {
        
        w.style.display = "none";

    } else {
        w.style.display = "block";
        w.style.transition = "0.9s";
        
    }

    // ------- OR use this method -----------
    // if(x.classList){
    //     x.classList.toggle("first");
    // }
}

// FORM VALIDATION
function validateForm() {
    var nameVal = document.forms["simpleForm"]["email"].value;

    if(nameVal == null || nameVal == "") {
        document.getElementsByClassName( "errorMessage" )[0].style.visibility = "visible";
        document.getElementsByClassName( "errorMessage" )[0].innerHTML = "Please Input Your E-mail   ";
        document.getElementsByClassName( "errorMessage" )[1].style.visibility = "visible";
        document.getElementsByClassName( "errorMessage" )[1].innerHTML = "Please Fill out this field";
        
        return false;

    } else {

        return true;
    }
}
        