UNIT 1 Project - SEI
Planning & Presentation Requirements
Planning - Due: 06/04/2024
You will share:
[x] Your choice of game.
[x] A wireframe of your "main" game screen.
[ ] Pseudocode for the overall game play.
[x] User story

Necessary Deliverables
[ ] Your game's Title: Description of the game. Background info of the game.
[ ] Screenshots of the actual game.
[ ] Technologies Used: List of technologies, JS, HTML, CSS
[ ] Getting Started: Include link to your deployed game and instructions deemed important.
[ ] Next Steps: Planned future enhancements (icebox items)

My Choice of Game:
I will be implementing my own spin on the classic game: Simon. This game is a memory game that tests the player's ability to remember sequences of colours or audio queues. The game consists of four coloured buttons, where each button will make a unique tone/sound when pressed. The game produces a random sequence of the colours and matching sounds, which the player will then "play back" to the game by pressing the buttons in the correct order.



My Wireframe Excalidraw:
Excalidraw Link:
https://excalidraw.com/#json=BCK_yUeNFbDbkx5QU7_Tw,BGld4XX7d3Zvds-mTbvo9w

Local Files:
1. Initial State: Initial game screen as you open the page
\home\marty\code\project-u1-personal\Wireframe\SIMON01INIT

2. Play State: After clicking the Play button
\home\marty\code\project-u1-personal\Wireframe\SIMON02PLAY

3. Game State: Game is running in full, colours are being sequenced and pushed to an array for player to try match in yet another array
\home\marty\code\project-u1-personal\Wireframe\SIMON03GAME

4. Win State: Player wins the game by matching all the colours/tones
\home\marty\code\project-u1-personal\Wireframe\SIMON04WIN

5. Lose State: Player loses the game at any point in the game
\home\marty\code\project-u1-personal\Wireframe\SIMON05LOSE



User Story:
As a player, I want to be presented a memory game that makes use of bright colours and sounds so that I can have fun and exercise my ability to memorize sequences/patterns. 
End user goal: Have a functional game that allows me to keep testing my ability to memorize. 
End business goal: Creation of memory game with multiple levels of scaling difficulty, bringing satisfaction in every win and to make the player strive to better their ability to memorize should they lose. 
Acceptance criteria: Colour 'board' will project a sequence of colours and play corresponding tones/sounds without overlapping or crashing/getting stuck. The Play button will start the game state, beginning the memory game. The 'Next Level' button will start another round of the game but with higher difficulty. The UI will load properly regardless of what state the game is in.
Measurement of success: 

1. Have the page load to the initial game screen that has a preview of the colour 'board' with all colours lit up and the play button is visible and can be clicked/interacted with.

2. 