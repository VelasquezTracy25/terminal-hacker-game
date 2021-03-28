let attempts = ["▮", "▮", "▮"];
let isLocked = false;
let symbols = ["$", "&", "+", ":", ";", "=", "\,", "\"", "?", "@", "#", "|", "'", "<", ">", ".", "^", "*", "(", ")", "%", "!", "-",];
let codeArray = [];
let usedSymbols = [];

//Randomly generates 428 chars + words list and serves code on front end
function serveCode() {
    //Pulls wordlist from MySQL and adds to symbols array
    symbols = symbols.concat(newWordsList);

    for (let i = 0; i < (428 - (newWordsList[1].length * 12)); i++) {
        let random = Math.floor(Math.random() * symbols.length);
        let smallRand = Math.floor(Math.random() * 20);
        //Checks for index of 0's value, the randomized symbol is a word and the last index of code array is also a word
        if (codeArray[i] !== undefined && symbols[random].length > 1 && codeArray[i - 1].length > 1) {
            //Add a random character
            codeArray[i] = symbols[smallRand];
        } else {
            //If the word has already been used
            if (usedSymbols.includes(symbols[random])) {
                //Add a random character
                codeArray[i] = symbols[smallRand];
            } else {
                //Add the picked character or word
                codeArray[i] = symbols[random];
            }
            usedSymbols.push(symbols[random]);
        }
    }
    //Randomize code array again - so all words arent lumped at the beginning
    codeArray = codeArray.sort(() => Math.random() - 0.5);
}

serveCode();

let i = 0;
let speed = 10;

//Code for typing effect on randomly generated characters
function terminalTyper() {
    if (i < codeArray.length) {
        if (newWordsList.includes(codeArray[i])) {
            document.getElementById("typed-text").innerHTML += "<a href='#' class='word-option char'>" + codeArray[i] + "</a>";
        } else {
            document.getElementById("typed-text").innerHTML += "<a href='#' class='char'>" + codeArray[i] + "</a>";
        }
    }
    i++;
    setTimeout(terminalTyper, speed);
}

terminalTyper();

//Adds character/word hovered over to side panel and adds typing sounds while hovering
function hoverOver() {
    let blinkingCurs = "<span class='blinking'>▮</span>"

    $(document).on('mouseenter', '.char', function () {
        $("#hover-guess").html(($(this).text()));
        // let num = Math.floor(Math.random() * 7);
        // let audio = new Audio('../sounds/button-press-' + num + '.mp3');
        // audio.play();
    });

    $(document).on('mouseleave', '.char', function () {
        $("#hover-guess").empty();
        $("#hover-guess").html((blinkingCurs));
        // audio.pause();
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
                $(".attempts").html("<span class='blinking'>Password match. Terminal access granted.</span>");
                isLocked = true;
            } else {
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

//When attempt is made, reduce attempts by one, after three attempts lock terminal/game
function updateAttempts() {
    if (attempts.length > 1) {
        attempts.pop();
        $(".attempts").html("Attempts left: " + attempts.join(" "));
    } else {
        $(".attempts").html("<span class='blinking'>Terminal permanently locked.</span>");
        isLocked = true;
    }
}



