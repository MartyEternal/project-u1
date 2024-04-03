UNIT 1 Project - SEI
Planning & Presentation Requirements
Planning - Due: 25/03/2024
You will share:
- [x] Your choice of game.
- [x] A wireframe of your "main" game screen.
- [ ] Pseudocode for the overall game play.
- [x] User story

Necessary Deliverables
- [x] Your game's Title: Description of the game. Background info of the game.
- [ ] Screenshots of the actual game.
- [ ] Technologies Used: List of technologies, JS, HTML, CSS
- [ ] Getting Started: Include link to your deployed game and instructions deemed important.
- [ ] Next Steps: Planned future enhancements (icebox items)

My Choice of Game:
I will be implementing my own spin on the classic game: Simon. 

Description of the Game:
This game is a memory game that tests the player's ability to remember sequences of colours or audio queues. The game consists of four coloured buttons, where each button will make a unique tone/sound when pressed. The game produces a random sequence of the colours and matching sounds, which the player will then "play back" to the game by pressing the buttons in the correct order.

Game Rules:
The player has to memorize the sequence of randomly generated colours by the Simon game, and reproduce it in the right order. The aim is to reproduce the longest series of colours/sounds using your memory and attention. In each round, another colour is generated and added to the sequence. The difficulty increases as the game progresses, as the player's memory is increasingly challenged.
1. At the start of the game, Simon will generate a random colour sequence.
2. It's then the player's turn to press the same colour buttons.
3. If the player has pressed the same sequence of colours, the same sequence will play again but adds one more colour to the sequence randomly.
4. The player then has to reproduce the colour sequence using their memory.
5. This keeps going, with each round getting progressively more difficult.
6. The game is over as soon as the player makes a mistake in remembering the colour sequence and presses the wrong button.



My Wireframe Excalidraw:
Excalidraw Link:
https://excalidraw.com/#json=BCK_yUeNFbDbkx5QU7_Tw,BGld4XX7d3Zvds-mTbvo9w

Local Files:
1. [Initial State: Initial game screen as you open the page](\\wsl.localhost\Ubuntu\home\marty\code\project-u1-personal\Wireframe\SIMON01INIT)

2. [Play State: After clicking the Play button](\\wsl.localhost\Ubuntu\home\marty\code\project-u1-personal\Wireframe\SIMON02PLAY)

3. [Game State: Game is running in full, colours are being sequenced and pushed to an array for player to try match in yet another array](\\wsl.localhost\Ubuntu\home\marty\code\project-u1-personal\Wireframe\SIMON03GAME)

4. [Win State: Player wins the game by matching all the colours/tones](\\wsl.localhost\Ubuntu\home\marty\code\project-u1-personal\Wireframe\SIMON04WIN)

5. [Lose State: Player loses the game at any point in the game](\\wsl.localhost\Ubuntu\home\marty\code\project-u1-personal\Wireframe\SIMON05LOSE)



User Story:

As a player, I want to be presented a memory game that makes use of bright colours and sounds so that I can have fun and exercise my ability to memorize sequences/patterns. 
End user goal: Have a functional game that allows me to keep testing my ability to memorize. 
End business goal: Creation of memory game with multiple levels of scaling difficulty, bringing satisfaction in every win and to make the player strive to better their ability to memorize should they lose. 
Acceptance criteria: Colour 'board' will project a sequence of colours and play corresponding tones/sounds without overlapping or crashing/getting stuck. The Play button will start the game state, beginning the memory game. The 'Next Level' button will start another round of the game but with higher difficulty. The UI will load properly regardless of what state the game is in.
Measurement of success: 

1. As a player, I want the page load to the initial game screen that has a preview of the colour 'board' with all colours lit up and the play button is visible and can be clicked/interacted with.

2. As a player, I want the colour 'board' expand/enlarge when the play button has been clicked/interacted with. Then to have the play button disappear. Then to have the colour 'board' darken/grey out.

3. As a player, I want the colour 'board' sections light up their colour in a random sequence.

4. As a player, I want the player be able to click on the colour 'board' sections to answer the memory puzzle.

5. As a player, I want the Win/Lose screen show depending on the result of the player's input. After the round ends, revert the size of the colour 'board' to what it was in the initial game screen. Then to have the Win screen show the 'Next Level' button in place of the play button. Then to have the Lose screen show the play button again.

6. As a player, I want the sounds implemented into the game for higher player engagement.

7. As a player, I want the game be portable to mobile devices or thinner screen sizes.



Pseudocode
1. Start game
2. Define buttons array with colours: ["red", "yellow", "blue", "green"]
3. Define colorSequence array to store sequence of colours randomly generated by the game
4. Define playerSequence array to store the sequence of colours clicked by the player
5. Define level/difficulty variable to keep track of the current level/difficulty
6. Define playing/startGame variable to check the state of the game (started/ended/etc)
7. Define a function: function 



My Thoughts as I go
28/03/2024:
I'm starting this a litte late, but I'll type out what I can remember.
The first day we started this project, we were asked to share with the class what game we chose to create. There was no mention of grading being higher or lower based on the difficulty of the coding of the game that we end up choosing (or how many games we choose to make in these next two weeks), so I went with a game from the list that I thought would be most fun to code for: Simon.
My memory of the "Simon" game is that the coloured buttons flash, then the player has to press the coloured buttons in the same order/sequence that they flashed in. It's a fun little memory game that flashes bright colours - what isn't there to like?!
Drawing up the wireframe was a great way to plan out what I wanted to do with my version of the Simon game. I drew up five different states of the game: 
1. The Initial state, where the game is opened up on a browser.
This state shows the title, a smaller main circle/buttons/board, the start button and instructions on how to play the game.
2. The Start state, where the game is started and now ready to begin from Level 1.
This state shows the title, the main circle has enlarged to fit more of the space, buttons have greyed out to have the buttons ready to "light up", the start button has disappeared, the instructions are still showing.
3. The Game state, where the game is running in full.
This state is exactly the same as the Start state. Difference is just showing what the circle would look like when the game is fully running - the button and border "lights up".
4. The Win state, where the game has been won.
This state shows the title, the smaller circle and start button returns. The start button's text changes to "Next Level" and text saying "You Win" fills the space inside of the circle.
5. The Lose state, where the game has been lost.
This state is similar to the Win state, however the start button comes back as "Play Again", the text inside of the circle says "You Lose".
After drawing up the wireframe, we were asked to write up a user story for the game. The list of games given to us were all nice and simple; games that nearly everyone had exposure to as children and are easy enough to understand and play. This made it easier to write a user story for, as I already have experience playing the game, and understood what I wanted from mine.
Unfortunately, I didn't fully understand what a user story was, so I searched for examples on Google to find that it's a paragraph that - according to the examples shown - had to be structured a certain way. I copy/pasted the format and filled in where I needed to.
Then comes the show-and-tell and my understanding of a user story is challenged. Everyone else seems to have listed off what they are expecting step-by-step as their game progresses, but mine was a paragraph. Rather than just changing mine, I went and did another user story in the same way everyone else was doing it, just to have both types. Aren't I easily swayed?
The last part of the first day of our Unit 1 project had us doing the first bits of coding.
I remember that I spent that time writing the HTML file and the beginnings of my CSS. The HTML part was nice and easy as all I needed to do was type up tags, some text and create the buttons. CSS was a little tricky because we haven't been taught how to create shapes using CSS yet. I knew I needed to have four different elements for the circle, but I didn't know how to make these elements into the shape that I wanted them to be: quarter circles.
I had to look up a video of how to do this. Fortunately, it only took one Google search to find it. Maybe it's because of my time as a streamer, but why do all these tutorial videos have to be 'funny'? A few minutes of the video was all I needed, but it's always good to skim through the rest of the video just in case there is valuable information in there. Nothing this time. ¯\_(ツ)_/¯

The second session on Monday saw a bigger focus on coding the JS. It was finally time to make the game work ... or not. Running on my intuition and the code that I've learned so far, I started defining variables that I know would be essential: the coloured buttons, the start button, the title, the instructions. All of these things are going to be changing in style and their properties will be adjusting a lot.
Of the things I did know I wanted to do, I didn't know just how many functions I was going to be writing up. Something that Corey mentioned on Wednesday was that I had written my code in a way that changes the variables one-by-one, have code referencing tags and properties instead of having it all written in JS. 