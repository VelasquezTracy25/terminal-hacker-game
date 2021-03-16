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
    let likeness = 0;

    $(".word-option").click(function () {
        let correct = $("#true").text();
        let correctLength = $.trim(correct).length;
        let wordChosen = $(this).text();
        console.log(correct);
        console.log(wordChosen);
        $("#word-clicked-copy").html(wordChosen);
        if (wordChosen === correct) {
            console.log("true");
            $("#entry-granted").html("entry granted");
            $("#likeness").html("LIKENESS=" + correctLength);
            //"You won message"
        }
    });
}

check();