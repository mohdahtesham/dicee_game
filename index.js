// var randomNumber1  = Math.floor(Math.random() * 6) + 1;
// var ImageNumber = "images/dice" + randomNumber1 + ".png";
// document.querySelectorAll("img")[0].setAttribute("src",ImageNumber);

// var randomNumber2  = Math.floor(Math.random() * 6) + 1;
// var ImageNumber2 = "images/dice" + randomNumber2 + ".png";
// document.querySelectorAll("img")[1].setAttribute("src",ImageNumber2);
// var gocheck = document.getElementById("fname").value;
function finish() {
    var TotalA = ScoreA.reduce((a, b) => a + b, 0);
    var TotalB = ScoreB.reduce((a, b) => a + b, 0);
    if (TotalA > TotalB) {
        document.querySelector(".Winner").style.display = "block";
        document.querySelector(".Winner").innerHTML = "Player A Wins";
    } else if (TotalA < TotalB) {
        document.querySelector(".Winner").style.display = "block";
        document.querySelector(".Winner").innerHTML = "Player B Wins";
    } else {
        document.querySelector(".Winner").style.display = "block";
        document.querySelector(".Winner").innerHTML = "Its A Draw";

    }
}

function gofunc(){
    var gocheck = document.getElementById("fname").value;
    window.value = gocheck;

    if(gocheck.length == 0){
     alert("please enter name");
    }
    else{
        window.location.href = "dicee.html";

    }
}
var turn = "A";
var ScoreA = [];
var ScoreB = [];
function myfunc() {
  console.log(window.value);
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var check1 = randomNumber1;
    var ImageNumber = "images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", ImageNumber);
    document.querySelector("h2").innerHTML = "ROLL";

    if (turn == "A") {
        var Final = ScoreA.push(check1);
        var TotalA = ScoreA.reduce((a, b) => a + b, 0);
        document.querySelector(".First").innerHTML =  "Player A's Score :" + TotalA;

    }
    if (turn == "B") {
        var Final2 = ScoreB.push(check1);
        var TotalB = ScoreB.reduce((a, b) => a + b, 0);
        document.querySelector(".Second").innerHTML = "Player B's Score :" + TotalB;
    }
    if ((TotalA || TotalB) >= 20) {
        document.querySelector(".finish").style.display = "block";
    }
    if (turn == "A") {
        turn = "B";
        document.querySelector("p").innerHTML = "Player B's turn";
    } else {
        turn = "A";
        document.querySelector("p").innerHTML = "Player A's turn";

    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("finish");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

btn.onclick = function () {
    modal.style.display = "block";
    finish();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

