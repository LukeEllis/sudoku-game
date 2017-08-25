# Welcome to my Sudoku Game README!

GitHub Pages Link: https://lukeellis.github.io/sudoku-game/

## For tips to make your README more READable:
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images


## In order to make my Sudoku Game, I used the following technologies:

* Git/Github/Github Pages
* Javascript/JQuery
* HTML/CSS


## My overall process for making the game involved:

Analyzing my project and placing features into a Trello board in order
of importance. You can see my Trello board for inspiration on your own
projects at https://trello.com/b/qM5kU0nd/sudoku-game . After making my
Trello board and figuring out what features would be most important for
my game to work, I broke up my features into "sprints" (AGILE philosophy).
These sprints allowed me to continually push out basic functionalities,
then build more elegant solutions later once I knew my product worked.
As I moved through my sprints and Trello "to-dos", I carefully examined
any bugs or roadblocks and updated the board as necessary. For instance,
once I had basic functionality of the game board, I could then focus on
buttons to check the user inputs for errors. If a bug arose from adding
a button, I could add that to my Trello board and work through it on
my next sprint. Finally, after having total functionality complete, I
aimed to improve the UX (user experience) and css styling of my page
for the final touches.

Image resources: ![Wireframe Image](http://imgur.com/a/7Jrzy) ![Favicon Image](http://www.favicon.cc/?action=icon&file_id=13993)

## Potential Future Features:

1. A "Give Me A Hint" button that fills in the on-focus input box  of the user.
2. Several numbered Grid Buttons that show colors along the rows and columns
   of the number clicked. ie. Given I click the number 1, all number 1s on
   the board have a background color of red, and the rows and colums they
   are in have a background color of tomato. This allows users to more easily
   see where they should put the next number without outright giving them
   the answer.
3. The option to use Pencil Markings, which changes the font-size of the
   text in each input box so more numbers can be seen. This allows for
   users to mark in potential numbers for harder puzzles where advanced
   algorithms may be necessary.
4. When clicking the body of the viewport, close the modals instead of
   requiring users to click the X. This should be easy, but I struggled
   to get it to work.
###### *note* I have included these features and a bit of start code or pseudo code at the bottom my the main.js file.


## In my development of the Sudoku Game, I ran into several bugs:

* My first major bug had input boxes appending on top of one another
  each time a user clicked a level button. The solution to this was
  to turn off the click event on the level buttons when making the
  levels' game boards. This enclosed each click of the level button
  into a single "instance" so each input box was appended to a new
  board rather than appending to a previous board state.
* Another tricky problem I had to overcome came into view after I
  finished the major functionalities of my Sudoku Game. Originally,
  I had hard-coded the answers of each level into an array, and told
  the game to check each input based on that array. This worked
  alright, but constantly hand coding each solution checker took
  up too much time and precious space. To get past this, I attempted
  to modularize my code by putting my answer arrays into another
  javascript file. This time my answer arrays were ALL 81 indices
  while my user inputs were still always less than that. In order
  to get the correct information linked between my user inputs
  and answer array, I mapped the user's answers to the ids of the
  answer arrays. This ended up cleaning up nearly every function
  in my code!
* I'm still trying to figure out how to get my modal to close when
  a user clicks outside the modal.. I've tried onclick events
  targeting the window, body and main, but nothing has worked
  thus far.


## HOW TO PLAY THE GAME

Sudoku is an exciting puzzle game where you use logic and pattern recognition to find the solution!

Click a Level Button to begin a game. Level 1 has the easiest puzzle, while Level 5 has the hardest.

To find the solution, fill in the 9x9 grid so that each column, row, and each of the 3x3 sub-grids contain the digits from 1 to 9.

A few of the correct numbers have been placed into the box to get you started. Click the All Done! button when you think you have finished the puzzle.

Work through the puzzles from Level 1 up to Level 5 to beat the game and become the Sudoku Champion!



*I hope you've enjoyed playing around with my Sudoku Game! Please feel free to
contact me at my personal email with any questions or comments: lukeellisx@gmail.com*
