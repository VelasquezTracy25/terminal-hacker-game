// set up text to print, each item in array is new line
let aText = ["WELCOME USER", " ",
    "Please log in", "", "Choose potential passwords by cycling through options with your keyboard.", "", "The number of letters that match (both number and position) will be displayed on screen.", " ", "Continue? y/n"];
let iSpeed = 50; // time delay of print out
let iIndex = 0; // start printing array at this position
let iArrLength = aText[0].length; // the length of the text array
let iScrollAt = 20; // start scrolling up at this many lines

let iTextPos = 0; // initialise text position
let sContents = ''; // initialise contents
let iRow; // initialise current row

function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    let destination = document.getElementById("typed-text");

    while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';

    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "▮";
    if ( iTextPos++ === iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex !== aText.length ) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }

    document.addEventListener("keydown")
}


typewriter();