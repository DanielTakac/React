const clickAreaDiv = document.getElementById("click-area-div");
const clickHeader = document.getElementById("click-header");
const clickText = document.getElementById("click-text");

let stage = 1;

let startTime;
let endTime;

const blue = "rgb(10, 143, 219)";
const red = "rgb(197, 49, 35)";
const green = "rgb(22, 209, 78)";

clickAreaDiv.addEventListener("click", function(){

    console.log("Stage: " + stage)

    switch(stage){

        case 1:

            clickHeader.innerText = "Wait for green";
            clickText.innerText = "";
            clickAreaDiv.style.backgroundColor = red;

            let min = 3;
            let max = 7;

            let rand = Math.floor(Math.random() * (max - min) + min); // The maximum in exclusive and the minimum in inclusive

            setTimeout(function(){ CanClick(); }, rand * 1000);

            stage = 2;

            break;

        case 2:

            clickHeader.innerText = "Too soon!";
            clickText.innerText = "Click here to try again";
            clickAreaDiv.style.backgroundColor = blue;

            stage = 1;

            break;

        case 3:

            // End timer
            endTime = performance.now();

            let time = Math.floor(endTime - startTime);

            clickHeader.innerText = time + " ms";
            clickText.innerText = "Click here to keep going";
            clickAreaDiv.style.backgroundColor = blue;

            stage = 1;

            break;

    }

});

function CanClick(){

    clickHeader.innerText = "Click!";
    clickText.innerText = "";
    clickAreaDiv.style.backgroundColor = green;

    // Start timer
    startTime = performance.now();

    stage = 3;

}