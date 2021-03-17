// // let aText = ["WELCOME USER", " ", "Please log in", "", "Choose potential passwords by cycling through options with your keyboard.", "", "The number of letters that match (both number and position) will be displayed on screen.", " ", "Press enter to continue."];
// let iSpeed = 1; // time delay of print out
console.log("1");

//Enter to next page - might change
$(document).on('keypress', function (e) {
    if (e.which == 13) {
        window.location.href = "/next";
    }
});

let attempts = ["▮", "▮", "▮"];
let isLocked = false;
let symbols = ["$", "&", "+", ":", ";", "=", "\,", "\"", "?", "@", "#", "|", "'", "<", ">", ".", "^", "*", "(", ")", "%", "!", "-",];
let usedSymbols = [];
let codeArray = [];

function serveCode() {

    symbols = symbols.concat(newWordsList);

    for (let i = 0; i < (408 - (newWordsList[1].length * 12)); i++) {
        let random = Math.floor(Math.random() * symbols.length);
        if (usedSymbols.includes(symbols[random]) && newWordsList.includes(symbols[random])) {
            let smallRand = Math.floor(Math.random() * 8);
            codeArray[i] = symbols[smallRand];
        } else {
            codeArray[i] = symbols[random];
        }
        usedSymbols.push(symbols[random]);
    }

    //Randomize code array again
    codeArray = codeArray.sort(() => Math.random() - 0.5);
}

serveCode();

let i = 0;
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < codeArray.length) {
        if (newWordsList.includes(codeArray[i])) {
            document.getElementById("typed-text").innerHTML += "<a href='#' class='word-option'>" + codeArray[i] + "</a>";
        } else {
            document.getElementById("typed-text").innerHTML += "<a href='#'>" + codeArray[i] + "</a>";
        }
    }
    i++;
    setTimeout(typeWriter, speed);
}

typeWriter();


function hoverOver() {
    let blinkingCurs = "<span class='blinking'>▮</span>"

    $(document).on('mouseenter', '.word-option', function () {
        $("#hover-guess").prepend($(this).text());
    });

    $(document).on('mouseleave', '.word-option', function () {
        $("#hover-guess").empty();
        $("#hover-guess").prepend(blinkingCurs);
    });

}

hoverOver();

//Check for matches and remove word
function check() {
    let likeness = null;
    let correctLength = correctWord.length;


    let replacement = "";
    for (let i = 1; i <= correctLength; i++) {
        replacement += ".";
    }

    $(document).on('click', '.word-option', function () {
        let correctLength = correctWord.length;
        let wordChosen = $.trim($(this).text());

        // Runs no matter what
        let wordClickedCopy = "<p class='closer'>>" + wordChosen + "</p>";

        if (isLocked === false && wordChosen !== "") {
            //Runs if wordChosen matches correct word
            if (wordChosen === correctWord) {

                //Choose if keeping or deleting
                $("#entry-granted").html(">Entry granted.");
                console.log("entry granted")
                $("#likeness").html(">LIKENESS=" + correctLength);
                console.log("likeness")
                $(".attempts").html("Terminal access granted.");
                console.log(attempts)
                isLocked = true;
            } else { //Otherwise...
                //Check for likeness of words(location and match)
                likeness = 0;

                $(this).html(replacement);
                for (let i = 0; i < correctLength; i++) {
                    if (correctWord[i] === wordChosen[i]) {
                        likeness++;
                    }
                    $(this).html(replacement);
                }
                updateAttempts();

                let newLikeness = "<p class='closer'>>LIKENESS=" + likeness + "</p>";
                let entryCheck = "<p class='closer'>>Entry denied.</p>";
                $("#guess-details").append(wordClickedCopy, newLikeness, entryCheck);
            }

        }
    });
}

check();

function updateAttempts() {
    if (attempts.length > 1) {
        attempts.pop();
        $(".attempts").html("Attempts left: " + attempts.join(" "));
    } else {
        $(".attempts").html("Terminal permanently locked.");
        isLocked = true;
    }
}



