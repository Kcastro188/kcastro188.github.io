function answers()
{
    var score = 0;
    //question 1
    if(document.getElementById("red").checked == true)
    {
        score = score + 1;
        document.getElementById("q1").innerHTML = "corect";
    }
    else
    {
        document.getElementById("q1").innerHTML = "incorrect";
    }
    //question 2 
      if(document.getElementById("water").checked == true)
    {
        score = score + 1;
        document.getElementById("q2").innerHTML = "corect";
    }
    else
    {
        document.getElementById("q2").innerHTML = "incorrect";
    }
    
    if(document.getElementById("thisistheend").checked == true && document.getElementById("spiderman").checked == true)
    {
        score = score + 1;
        document.getElementById("q3").innerHTML = "corect";
    }
    else
    {
        document.getElementById("q3").innerHTML = "incorrect";
    }

    if(document.getElementById("song1").checked == true && document.getElementById("song2").checked == true && document.getElementById("song3").checked == true )
    {
        score = score + 1;
        document.getElementById("q4").innerHTML = "corect";
    }
    else
    {
        document.getElementById("q4").innerHTML = "incorrect";
    }    
    document.getElementById("final_score").innerHTML = "Total points: " + score;
}

