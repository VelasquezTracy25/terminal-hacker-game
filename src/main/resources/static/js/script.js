//
// let aText = ["WELCOME USER", " ", "Please log in", "", "Choose potential passwords by cycling through options with your keyboard.", "", "The number of letters that match (both number and position) will be displayed on screen.", " ", "Press enter to continue."];
// let iSpeed = 50; // time delay of print out
// let iIndex = 0; // start printing array at this position
// let iArrLength = aText[0].length; // the length of the text array
// let iScrollAt = 20; // start scrolling up at this many lines
//
// let iTextPos = 0; // initialize text position
// let sContents = ''; // initialize contents
// let iRow; // initialise current row
//
// function typewriter() {
//     sContents = ' ';
//     iRow = Math.max(0, iIndex - iScrollAt);
//     let destination = document.getElementById("typed-text");
//
//     while (iRow < iIndex) {
//         sContents += aText[iRow++] + '<br />';
//
//     }
//     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "▮";
//     if (iTextPos++ === iArrLength) {
//         iTextPos = 0;
//         iIndex++;
//         if (iIndex !== aText.length) {
//             iArrLength = aText[iIndex].length;
//             setTimeout("typewriter()", 500);
//         }
//     } else {
//         setTimeout("typewriter()", iSpeed);
//     }
// }
//
// typewriter();

//Enter to next page - might change
$(document).on('keypress', function (e) {
    if (e.which == 13) {
        window.location.href = "/next";
    }
});


//Check for matches and remove word
function check() {
    let attempts = 3;
    let granted = false;
    let likeness = null;

    $(".word-option").click(function () {
        let correct = $.trim($("#true").text());
        let correctLength = $.trim(correct).length;
        let wordChosen = $.trim($(this).text());

        //Runs no matter what
        $("#word-clicked-copy").html(wordChosen);

        //Runs if wordChosen matches correct word
        if (wordChosen === correct) {
            $("#entry-granted").html("entry granted");
            $("#likeness").html("LIKENESS=" + correctLength);
            //"You won" message
        } else { //Otherwise...
            //Check for likeness of words(location and match)
            likeness = 0;
            console.log("idk")
            for (let i = 0; i < correctLength; i++) {
                if (correct[i] === wordChosen[i]) {
                    console.log(correct[i] + " " + wordChosen[i])
                    likeness++;
                }
                $("#likeness").html("LIKENESS=" + likeness);
                $(this).html("&nbsp;");
                console.log("wow")
                attempts--;
                console.log("Attempt #" + attempts)
            }
        }
    });
}

check();