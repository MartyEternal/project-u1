UNIT 1 Project - SEI
Planning & Presentation Requirements
Planning - Due: 06/04/2024
You will share:
- [] Your choice of game.
- [] A wireframe of your "main" game screen.
- [] Pseudocode for the overall game play.
- [] User story

Necessary Deliverables
- [] Your game's Title: Description of the game. Background info of the game.
- [] Screenshots of the actual game.
- [] Technologies Used: List of technologies, JS, HTML, CSS
- [] Getting Started: Include link to your deployed game and instructions deemed important.
- [] Next Steps: Planned future enhancements (icebox items)

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