// // let aText = ["WELCOME USER", " ", "Please log in", "", "Choose potential passwords by cycling through options with your keyboard.", "", "The number of letters that match (both number and position) will be displayed on screen.", " ", "Press enter to continue."];
// let iSpeed = 1; // time delay of print out
console.log("200");

//Enter to next page - might change
$(document).on('keypress', function (e) {
    if (e.which == 13) {
        window.location.href = "/next";
    }
});

let attempts = ["▮", "▮", "▮"];
let isLocked = false;
let correct = $.trim($("#true").text());
let symbols = ["$", "&", "+", ":", ";", "=", ",", "\"", "?", "@", "#", "|", "'", "<", ">", ".", "^", "*", "(", ")", "%", "!", "-",];
let usedSymbols = [] ;
let codeArray = [];

function serveCode() {

    symbols = symbols.concat(newWordsList);

    for (let i = 0; i < (408 - (newWordsList[1].length * 12)); i++) {
        let random = Math.floor(Math.random() * symbols.length);
            if (usedSymbols.includes(symbols[random]) && newWordsList.includes(symbols[random])) {
                console.log("found dupe");
            } else {
                codeArray[i] = symbols[random];
            }
        usedSymbols.push(symbols[random]);
    }
}

serveCode();

let start = 0;
let codeString = codeArray.join(''); /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (start < codeString.length) {
        document.getElementById("typed-text").innerHTML += codeString.charAt(start);
        start++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();


function hoverOver() {
    let blinkingCurs = "<span class='blinking'>▮</span>"

    $(".word-option").hover(
        function () {
            $("#hover-guess").prepend($(this).text());
        }, function () {
            $("#hover-guess").empty();
            $("#hover-guess").prepend(blinkingCurs);
        }
    );
}

hoverOver();


//Check for matches and remove word
function check() {
    let likeness = null;

    $(".word-option").click(function () {
        let correctLength = $.trim(correct).length;
        let wordChosen = $.trim($(this).text());

        // Runs no matter what
        let wordClickedCopy = "<p class='closer'>>" + wordChosen + "</p>";

        if (isLocked === false && wordChosen !== "") {
            //Runs if wordChosen matches correct word
            if (wordChosen === correct) {
                $("#entry-granted").html(">Entry granted.");
                $("#likeness").html(">LIKENESS=" + correctLength);
                $(".attempts").html("Terminal access granted.");
            } else { //Otherwise...
                //Check for likeness of words(location and match)
                likeness = 0;
                for (let i = 0; i < correctLength; i++) {
                    if (correct[i] === wordChosen[i]) {
                        likeness++;
                    }
                    $(this).html("&nbsp;");
                }
                updateAttempts();
            }
            let newLikeness = "<p class='closer'>>LIKENESS=" + likeness + "</p>";
            let entryCheck = "<p class='closer'>>Entry denied.</p>";
            $("#guess-details").append(wordClickedCopy, newLikeness, entryCheck);
        }
    });
}

check();

function updateAttempts() {
    console.log("tree")
    if (attempts.length > 1) {
        attempts.pop();
        $(".attempts").html("Attempts left: " + attempts.join(" "));
    } else {
        $(".attempts").html("Terminal permanently locked.");
        isLocked = true;
    }
}



