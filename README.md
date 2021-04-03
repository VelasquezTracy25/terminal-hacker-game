# Terminal Hacker

Terminal Hacker is a Java-Spring Boot application that utilizes JavaScript to emulate the terminal hacking minigames from the popular game series, Fallout.

From the home page, a player is provided general rules and can pick their level of difficulty. Difficulties range from Novice (4-letter words) to Master (7-letter words).
![gif displaying home page](/src/main/resources/static/img/home.gif)

When a player chooses a word, they are given the likeness match between the word guessed and the correct word. They are also able to see if they have successfully hacked the terminal. 

If they guess the correct word before their 3 attempts are up, they are granted access.

![gif displaying a successful round of the game](/src/main/resources/static/img/novice.gif)

If a player uses all of their attempts before guessing the correct word, they are permanently locked out of the terminal anc have to try again.

![gif displaying losing the game](/src/main/resources/static/img/master.gif)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
