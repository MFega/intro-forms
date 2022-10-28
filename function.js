var text = document.getElementById("demo");
var text2 = document.getElementById("demo-2");
var text3 = document.getElementById("demo-3");
var text4 = document.getElementById("demo-4");
var in1 = document.getElementById("input-1")
var in2 = document.getElementById("input-2")
var in3 = document.getElementById("input-3")
var in4 = document.getElementById("input-4")

var myForm =document.forms.myForm
 

myForm.onsubmit = function validateForm(e){
   e.preventDefault()
    if(myForm.fname.value === ""){
         text.innerHTML = "First Name cannot be empty";
        
    }
     else if(myForm.lname.value === ""){
        text2.innerHTML = "Last Name cannot be empty";
    }
    else if(myForm.email.value === ""){
        text3.innerHTML = "Looks like this is not an email";
    }
    else if(myForm.password.value === ""){
        text4.innerHTML = "Password cannot be empty";

    }
    else{
        text.innerHTML = "";
        text2.innerHTML = "";
        text3.innerHTML = "";
        text4.innerHTML = "";
      
    }

}

 