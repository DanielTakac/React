const clickAreaDiv: any = document.getElementById("click-area-div");
const clickHeader: any = document.getElementById("click-header");

let stage = 1;

let startTime: number;
let endTime: number;

const blue = "rgb(48, 132, 212)";
const red = "rgb(208, 36, 52)";
const green = "rgb(80, 220, 108)";

clickAreaDiv.addEventListener("click", function(): void {

    console.log("Stage: " + stage)

    switch(stage){

        case 1:

            clickHeader.innerText = "Wait for green";
            clickAreaDiv.style.backgroundColor = red;

            let min = 3;
            let max = 6;

            let rand = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive

            setTimeout(function(){ CanClick(); }, rand * 1000);

            stage = 2;

            break;

        case 2:

            clickHeader.innerText = "Too soon!";
            clickAreaDiv.style.backgroundColor = blue;

            stage = 1;

            break;

        case 3:

            // End timer
            endTime = performance.now();

            let time = Math.floor(endTime - startTime);

            clickHeader.innerText = time + " ms";
            clickAreaDiv.style.backgroundColor = blue;

            stage = 1;

            break;

    }

});

function CanClick(){

    clickHeader.innerText = "Click!";
    clickAreaDiv.style.backgroundColor = green;

    // Start timer
    startTime = performance.now();

    stage = 3;

}
