const clickAreaDiv = document.getElementById("click-area-div");
const clickText = document.getElementById("click-text");

let stage = 1;

let canClick = false;

clickAreaDiv.addEventListener("click", function(){

    switch(stage){

        case 1:

            stage = 2;

            // Call function to set to stage 3 in random time

            break;

        case 2:



            break;

        case 3:



            break;

    }

});