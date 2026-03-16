function checkEmail()
{
    //check textboxes to make sure they are not empty
    //check to see if the text in both boxes match

    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;

    if(email == "")//conditional expression, when true code in the block will be executed
    {
        document.getElementById("email-error").innerHTML = "Please fill in this field";
    }
    else
    {
         document.getElementById("email-error").innerHTML = "";
    }

    //check to see if textbox is empty
    if(confirm == "")//conditional expression, when true code in the block will be executed
    {
        document.getElementById("confirm-error").innerHTML = "Please fill in this field";
    }
    else
    {
         document.getElementById("confirm-error").innerHTML = "";
    }

    //check if both textboxes have the same value
    if(email != confirm)//if the two strings are not the same
    {
        //print error
        document.getElementById("email-error").innerHTML = "Both emails must be the same";
        document.getElementById("confirm-error").innerHTML = "Both emails must be the same";

    }
}

function pizzaOrder()
{
    var output = "<h3>Pizza Order: ";
    //radio buttons 
    if(document.getElementById("small").checked == true)
    {
        output += " Small ";
    }
    else if(document.getElementById("medium").checked == true)
    {
        output += " Medium ";
    }
    else
    {
        output += " Large ";
    }
 
        //checkboxes
    if(document.getElementById("pepperoni").checked == true)
    {
        output += " Pepperoni ";
    }

    if(document.getElementById("sausage").checked == true)
    {
        output += " Sausage ";
    }

       if(document.getElementById("mushrooms").checked == true)
    {
        output += " Mushrooms ";
    }
    //output
    document.getElementById("output").innerHTML = output + "</h3";
}
