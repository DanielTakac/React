var clickAreaDiv = document.getElementById("click-area-div");
var clickHeader = document.getElementById("click-header");
var stage = 1;
var startTime;
var endTime;
var blue = "rgb(48, 132, 212)";
var red = "rgb(208, 36, 52)";
var green = "rgb(80, 220, 108)";
clickAreaDiv.addEventListener("click", function () {
    console.log("Stage: " + stage);
    switch (stage) {
        case 1:
            clickHeader.innerText = "Wait for green";
            clickAreaDiv.style.backgroundColor = red;
            var min = 3;
            var max = 6;
            var rand = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
            setTimeout(function () { CanClick(); }, rand * 1000);
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
            var time = Math.floor(endTime - startTime);
            clickHeader.innerText = time + " ms";
            clickAreaDiv.style.backgroundColor = blue;
            stage = 1;
            break;
    }
});
function CanClick() {
    clickHeader.innerText = "Click!";
    clickAreaDiv.style.backgroundColor = green;
    // Start timer
    startTime = performance.now();
    stage = 3;
}
