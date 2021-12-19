<img width="1024" alt="Screen Shot 2021-12-17 at 9 51 26 PM" src="https://user-images.githubusercontent.com/44050949/146626628-4ce62feb-5872-48bf-ab0f-f0ddd5fb71d4.png">

## Project Description
This is a simple implementation of Connect 4. 

It is playable by 2 people and follows the objective / rules of the classic game, Connect 4.
To start I was going to do a Connect 4 remix, but then went with just a pure implementation of the original game.  Stay tuned for the
remix! Or fork it and remix it yourself! Enjoy :)


## Technologies Used

* React / CRA - v17.0.2
* TailwindCSS - v3.0.5
* webpack
* Node - v16.4.2
* npm - v8.1.2

## Features

* Users can take turns dropping pieces into any column that isn't full.
* A user can click any column to "drop" a piece into that column
* Once one of the users has connected 4 in a row (horizontally, vertically, diagonally) they win and their winning
connection will be highlighted in green
* When a winner is found the game will declare that winner with an alert, and then prevent further gameplay
* If there is a stalemate the game will declare that and both players will be considered losers
* A user can start a new game and play again, switching turns so the player that previously went second goes first
* Will warn a user when attempting to start a new game or refresh the page to prevent accidental loss of game state
* User's can use a custom name if they choose and can change their name at any point in the game.
* If a blank name is entered then the default "Player X" will be used instead
* Although not gorgeous, it can be played on mobile
* Clearly displays whose turn it is at the top of the board
* Dark mode so you can play before bed
* Keeps a short term list of previous winners for that session. Makes it easy to keep track of a best of X.
to reset the list simply to a full page refresh.

### To-do list:
* Add a "remix" mode
* Allow users to change their color
* make it more mobile friendly
* Add animation to make the pieces look like they are sliding down when dropped
* Create different themes
* Create a computer player
* possibly add an undo button if users find themselves making a large amount of accidental "drops"
* store state of the game so users could return to the game later
* create custom pop-ups to replace the alerts
* Add accessibility features and reduce motion options etc.

## Getting Started
>You will need to make sure you have node installed and the most recent version of npm 
1. `git clone https://github.com/corith/lapin4.git connect4`
2. `cd connect4`
3. `npm install`
4. `npm run start`

## Usage
> Fill in each players name and then click 'Start Game'. If you do not provide a name then Player1/2 will be used.  
> When it is your turn, denoted above the board, click anywhere in a column to drop your piece in that column.
> Once a player has connected 4 of their pieces in a row (horizontally, vertically, diagonally), they are declared the winner.  
> If you wish to play again, click "Clear Board" and click okay on the prompt. Then click "Start Game"!

<img width="1249" alt="MainPage" src="https://user-images.githubusercontent.com/44050949/146690538-c4ddafc5-f99c-4d9d-8e4c-51a1ba78b711.png">
<img width="1249" alt="GamePlay" src="https://user-images.githubusercontent.com/44050949/146690547-8b3f6b11-6c8a-49c3-95d8-51b0a4821f9a.png">
<img width="1249" alt="Winner" src="https://user-images.githubusercontent.com/44050949/146690549-949a4462-648f-4a35-bc24-b4e463741eb7.png">


## Contributors

Cory Sebastian


## License

This project is provided as open source via the [MIT License](LICENSE.md). Copyright (c) 2020 Cory Sebastian

