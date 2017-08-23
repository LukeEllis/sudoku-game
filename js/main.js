console.log("JS connected");
/* data-id: grabs data from specific id
*/

/* ------------------------------
 I. Create the Game Board
------------------------------*/
var createBoard = function (){
  $('.game-board').empty();
  for (var i = 0; i < 81; i++){
    let square = $("<div class='square'></div>")
    square.append('<h2></h2>')
    $('.game-board').append(square)
  }
}

/* ------------------------------
 II. Grid Buttons
------------------------------*/

for (var j=1; j < 10; j++){
  let gridButton = $("<input type='button' value=''>")
  gridButton.attr('value', j)
  $('#gridButtonsBar').append(gridButton)
  gridButton.on('click', function(){
    alert("This button is still a work in progress. Try again some other time!");
  })
}

/* ------------------------------
 III. Check For Errors Button
------------------------------*/

$('#errors').on('click', function(){
  alert("This button is still a work in progress. Try again some other time!");
});

/* ------------------------------
 IV. Restart Level Button
------------------------------*/

$('#levelRestart').on('click', function(){
  $('.puzzle-piece').val('');
});

/* ------------------------------
 V. Hint Button
------------------------------*/

$('#hint').on('click', function(){
  alert("This button is still a work in progress. Try again some other time!");
  // $('.puzzle-piece').on('focus', function(){
  //   $('.puzzle-piece:nth-child(1)').val('5')
  // });
});

/* ------------------------------
 VI. Level Buttons
------------------------------*/

// $('.levelButton').on('click', function(){
//   alert("This button is still a work in progress. Try again some other time!")
// });

// On click, level button clears the board and sets it to the appropriate level

// $('#levelButton1').on('click', function(){
//   $('.game-board').remove(square)
//   level1;
// });
//
// $('#levelButton2').on('click', function(){
//   $('.game-board').remove(square)
//   level2;
// });
//
// $('#levelButton3').on('click', function(){
//   $('.game-board').remove(square)
//   level3;
// });
//
// $('#levelButton4').on('click', function(){
//   $('.game-board').remove(square)
//   level4;
// });
//
// $('#levelButton5').on('click', function(){
//   $('.game-board').remove(square)
//   level5;
// });

/* ------------------------------
 VII. Sudoku Champion Alert
------------------------------*/
/* If all buttons are disabled, the player is crowned the Sudoku Champion */

// if ($('#levelButton1').attr("disabled", true) && $('#levelButton2').attr("disabled", true)
//     && $('#levelButton3').attr("disabled", true) && $('#levelButton4').attr("disabled", true)
//     && $('#levelButton5').attr("disabled", true)){
//       alert("Congratulations, you are officially the Sudoku Champion!!!")
// }

/* ------------------------------
 VIII. Level 1
------------------------------*/
/* VIII a. Fill Level 1 */
$('#levelButton1').on('click', function(){

  createBoard();
  var level1 = $('.square h2').each(function(i, obj) {
    if (i === 0){
      $(obj).text(4);
    }
    else if (i === 1){
      $(obj).text(2);
    }
    else if (i === 3){
      $(obj).text(7);
    }
    else if (i === 4){
      $(obj).text(1);
    }
    else if (i === 8){
      $(obj).text(3);
    }
    else if (i === 10){
      $(obj).text(5);
    }
    else if (i === 11){
      $(obj).text(3);
    }
    else if (i === 13){
      $(obj).text(8);
    }
    else if (i === 15){
      $(obj).text(7);
    }
    else if (i === 16){
      $(obj).text(1);
    }
    else if (i === 20){
      $(obj).text(6);
    }
    else if (i === 21){
      $(obj).text(3);
    }
    else if (i === 22){
      $(obj).text(5);
    }
    else if (i === 24){
      $(obj).text(2);
    }
    else if (i === 25){
      $(obj).text(4);
    }
    else if (i === 30){
      $(obj).text(5);
    }
    else if (i === 31){
      $(obj).text(9);
    }
    else if (i === 32){
      $(obj).text(3);
    }
    else if (i === 33){
      $(obj).text(6);
    }
    else if (i === 35){
      $(obj).text(7);
    }
    else if (i === 36){
      $(obj).text(5);
    }
    else if (i === 37){
      $(obj).text(9);
    }
    else if (i === 38){
      $(obj).text(2);
    }
    else if (i === 41){
      $(obj).text(7);
    }
    else if (i === 43){
      $(obj).text(8);
    }
    else if (i === 45){
      $(obj).text(3);
    }
    else if (i === 46){
      $(obj).text(6);
    }
    else if (i === 50){
      $(obj).text(4);
    }
    else if (i === 51){
      $(obj).text(9);
    }
    else if (i === 52){
      $(obj).text(5);
    }
    else if (i === 54){
      $(obj).text(6);
    }
    else if (i === 55){
      $(obj).text(8);
    }
    else if (i === 56){
      $(obj).text(1);
    }
    else if (i === 60){
      $(obj).text(4);
    }
    else if (i === 62){
      $(obj).text(2);
    }
    else if (i === 65){
      $(obj).text(5);
    }
    else if (i === 66){
      $(obj).text(2);
    }
    else if (i === 67){
      $(obj).text(4);
    }
    else if (i === 68){
      $(obj).text(8);
    }
    else if (i === 71){
      $(obj).text(9);
    }
    else if (i === 72){
      $(obj).text(2);
    }
    else if (i === 75){
      $(obj).text(6);
    }
    else if (i === 77){
      $(obj).text(1);
    }
    else if (i === 79){
      $(obj).text(3);
    }
    else if (i === 80){
      $(obj).text(5);
    }
    else{
      $(obj).append("<input class='puzzle-piece' type='text'>");
    }
  });
/* VIII b. Level 1 Solution Logic */
  $('#progress').on('click', function(){
    let inputs = $("input");
    let levelOneSolution = [
      8, 6, 5, 9,
      9, 4, 2, 6,
      1, 7, 9, 8,
      8, 1, 4, 2,
      1, 6, 3, 4,
      7, 8, 2, 1,
      9, 3, 5, 7,
      7, 3, 1, 6,
      4, 9, 7, 8,
    ];
    if (inputs.eq(0).val() == 8 &&
        inputs.eq(1).val() == 6 &&
        inputs.eq(2).val() == 5 &&
        inputs.eq(3).val() == 9 &&
        inputs.eq(4).val() == 9 &&
        inputs.eq(5).val() == 4 &&
        inputs.eq(6).val() == 2 &&
        inputs.eq(7).val() == 6 &&
        inputs.eq(8).val() == 1 &&
        inputs.eq(9).val() == 7 &&
        inputs.eq(10).val() == 9 &&
        inputs.eq(11).val() == 8 &&
        inputs.eq(12).val() == 8 &&
        inputs.eq(13).val() == 1 &&
        inputs.eq(14).val() == 4 &&
        inputs.eq(15).val() == 2 &&
        inputs.eq(16).val() == 1 &&
        inputs.eq(17).val() == 6 &&
        inputs.eq(18).val() == 3 &&
        inputs.eq(19).val() == 4 &&
        inputs.eq(20).val() == 7 &&
        inputs.eq(21).val() == 8 &&
        inputs.eq(22).val() == 2 &&
        inputs.eq(23).val() == 1 &&
        inputs.eq(24).val() == 9 &&
        inputs.eq(25).val() == 3 &&
        inputs.eq(26).val() == 5 &&
        inputs.eq(27).val() == 7 &&
        inputs.eq(28).val() == 7 &&
        inputs.eq(29).val() == 3 &&
        inputs.eq(30).val() == 1 &&
        inputs.eq(31).val() == 6 &&
        inputs.eq(32).val() == 4 &&
        inputs.eq(33).val() == 9 &&
        inputs.eq(34).val() == 7 &&
        inputs.eq(35).val() == 8
    ){
      alert("Congratulations, you've beaten Level 1!!!");
      // Makes Level 1 button unclickable for future Sudoku Champion check
      var disabled = $('#levelButton1').attr("disabled", true);
      disabled;
      // Clears Game Board
      // var hideLevel = $('.square h2').hide();
      // hideLevel;
    }
    else {
      alert("Keep trying!");
    }
  });
});

/* ------------------------------
 IX. Level 2
------------------------------*/
/* IX a. Fill Level 2 */
$('#levelButton2').on('click', function(){

  createBoard();
  var level2 = $('.square h2').each(function(i, obj) {
    if (i === 1){
      $(obj).text(5);
    }
    else if (i === 2){
      $(obj).text(3);
    }
    else if (i === 3){
      $(obj).text(7);
    }
    else if (i === 5){
      $(obj).text(4);
    }
    else if (i === 7){
      $(obj).text(8);
    }
    else if (i === 9){
      $(obj).text(7);
    }
    else if (i === 11){
      $(obj).text(6);
    }
    else if (i === 12){
      $(obj).text(9);
    }
    else if (i === 13){
      $(obj).text(2);
    }
    else if (i === 22){
      $(obj).text(8);
    }
    else if (i === 24){
      $(obj).text(3);
    }
    else if (i === 25){
      $(obj).text(7);
    }
    else if (i === 26){
      $(obj).text(2);
    }
    else if (i === 24){
      $(obj).text(2);
    }
    else if (i === 25){
      $(obj).text(4);
    }
    else if (i === 31){
      $(obj).text(3);
    }
    else if (i === 32){
      $(obj).text(2);
    }
    else if (i === 33){
      $(obj).text(4);
    }
    else if (i === 35){
      $(obj).text(1);
    }
    else if (i === 36){
      $(obj).text(6);
    }
    else if (i === 37){
      $(obj).text(1);
    }
    else if (i === 40){
      $(obj).text(7);
    }
    else if (i === 42){
      $(obj).text(8);
    }
    else if (i === 45){
      $(obj).text(5);
    }
    else if (i === 47){
      $(obj).text(4);
    }
    else if (i === 48){
      $(obj).text(8);
    }
    else if (i === 52){
      $(obj).text(2);
    }
    else if (i === 54){
      $(obj).text(8);
    }
    else if (i === 57){
      $(obj).text(2);
    }
    else if (i === 58){
      $(obj).text(5);
    }
    else if (i === 62){
      $(obj).text(3);
    }
    else if (i === 64){
      $(obj).text(2);
    }
    else if (i === 65){
      $(obj).text(9);
    }
    else if (i === 68){
      $(obj).text(8);
    }
    else if (i === 69){
      $(obj).text(6);
    }
    else if (i === 70){
      $(obj).text(5);
    }
    else if (i === 72){
      $(obj).text(1);
    }
    else if (i === 73){
      $(obj).text(6);
    }
    else if (i === 74){
      $(obj).text(5);
    }
    else if (i === 80){
      $(obj).text(8);
    }
    else{
      $(obj).append("<input class='puzzle-piece' type='text'>");
    }
  });
/* IX b. Level 2 Solution Logic */
  $('#progress').on('click', function(){
    let inputs = $("input");
    let levelTwoSolution = [
      2, 1, 9, 6,
      8, 3, 5, 1, 4,
      4, 9, 1, 6, 5,
      9, 7, 8, 5, 6,
      2, 4, 9, 3, 5,
      3, 6, 1, 7, 9,
      4, 7, 6, 1, 9,
      3, 1, 4, 7,
      3, 9, 7, 2, 4
    ];
    if (inputs.eq(0).val() == 2 &&
        inputs.eq(1).val() == 1 &&
        inputs.eq(2).val() == 9 &&
        inputs.eq(3).val() == 6 &&
        inputs.eq(4).val() == 8 &&
        inputs.eq(5).val() == 3 &&
        inputs.eq(6).val() == 5 &&
        inputs.eq(7).val() == 1 &&
        inputs.eq(8).val() == 4 &&
        inputs.eq(9).val() == 4 &&
        inputs.eq(10).val() == 9 &&
        inputs.eq(11).val() == 1 &&
        inputs.eq(12).val() == 6 &&
        inputs.eq(13).val() == 5 &&
        inputs.eq(14).val() == 9 &&
        inputs.eq(15).val() == 7 &&
        inputs.eq(16).val() == 8 &&
        inputs.eq(17).val() == 5 &&
        inputs.eq(18).val() == 6 &&
        inputs.eq(19).val() == 2 &&
        inputs.eq(20).val() == 4 &&
        inputs.eq(21).val() == 9 &&
        inputs.eq(22).val() == 3 &&
        inputs.eq(23).val() == 5 &&
        inputs.eq(24).val() == 3 &&
        inputs.eq(25).val() == 6 &&
        inputs.eq(26).val() == 1 &&
        inputs.eq(27).val() == 7 &&
        inputs.eq(28).val() == 9 &&
        inputs.eq(29).val() == 4 &&
        inputs.eq(30).val() == 7 &&
        inputs.eq(31).val() == 6 &&
        inputs.eq(32).val() == 1 &&
        inputs.eq(33).val() == 9 &&
        inputs.eq(34).val() == 3 &&
        inputs.eq(35).val() == 1 &&
        inputs.eq(36).val() == 4 &&
        inputs.eq(37).val() == 7 &&
        inputs.eq(38).val() == 3 &&
        inputs.eq(39).val() == 9 &&
        inputs.eq(40).val() == 7 &&
        inputs.eq(41).val() == 2 &&
        inputs.eq(42).val() == 4
    ){
      alert("Congratulations, you've beaten Level 2!!!");
      // Makes Level 2 button unclickable for future Sudoku Champion check
      var disabled = $('#levelButton2').attr("disabled", true);
      disabled;
      // Clears Game Board
      // var hideLevel = $('.square h2').hide();
      // hideLevel;
    }
    else {
      alert("Keep trying!");
    }
  });
});

/* ------------------------------
 X. Level 3
------------------------------*/
/* X a. Fill Level 3 */
$('#levelButton3').on('click', function(){

  createBoard();
  var level3 = $('.square h2').each(function(i, obj) {
    if (i === 0){
      $(obj).text(4);
    }
    else if (i === 1){
      $(obj).text(2);
    }
    else if (i === 5){
      $(obj).text(9);
    }
    else if (i === 6){
      $(obj).text(5);
    }
    else if (i === 12){
      $(obj).text(7);
    }
    else if (i === 14){
      $(obj).text(5);
    }
    else if (i === 15){
      $(obj).text(8);
    }
    else if (i === 16){
      $(obj).text(3);
    }
    else if (i === 19){
      $(obj).text(5);
    }
    else if (i === 16){
      $(obj).text(1);
    }
    else if (i === 23){
      $(obj).text(1);
    }
    else if (i === 24){
      $(obj).text(2);
    }
    else if (i === 27){
      $(obj).text(9);
    }
    else if (i === 28){
      $(obj).text(3);
    }
    else if (i === 31){
      $(obj).text(1);
    }
    else if (i === 37){
      $(obj).text(6);
    }
    else if (i === 39){
      $(obj).text(9);
    }
    else if (i === 42){
      $(obj).text(1);
    }
    else if (i === 48){
      $(obj).text(2);
    }
    else if (i === 52){
      $(obj).text(9);
    }
    else if (i === 53){
      $(obj).text(3);
    }
    else if (i === 54){
      $(obj).text(3);
    }
    else if (i === 56){
      $(obj).text(5);
    }
    else if (i === 61){
      $(obj).text(8);
    }
    else if (i === 65){
      $(obj).text(9);
    }
    else if (i === 67){
      $(obj).text(4);
    }
    else if (i === 71){
      $(obj).text(7);
    }
    else if (i === 74){
      $(obj).text(2);
    }
    else if (i === 76){
      $(obj).text(3);
    }
    else if (i === 77){
      $(obj).text(7);
    }
    else if (i === 80){
      $(obj).text(6);
    }
    else{
      $(obj).append("<input class='puzzle-piece' type='text'>");
    }
  });
/* X b. Level 3 Solution Logic */
  $('#progress').on('click', function(){
    let inputs = $("input");
    let levelThreeSolution = [
      8, 3, 6, 7, 1,
      1, 9, 6, 2, 4,
      7, 3, 4, 8, 6, 9,
      4, 6, 8, 7, 2, 5,
      2, 7, 5, 3, 4, 8,
      5, 8, 1, 7, 4, 6,
      7, 1, 9, 6, 4, 2,
      6, 1, 8, 2, 3, 5,
      8, 4, 5, 9, 1
    ];
    if (inputs.eq(0).val() == 8 &&
        inputs.eq(1).val() == 3 &&
        inputs.eq(2).val() == 6 &&
        inputs.eq(3).val() == 7 &&
        inputs.eq(4).val() == 1 &&
        inputs.eq(5).val() == 1 &&
        inputs.eq(6).val() == 9 &&
        inputs.eq(7).val() == 6 &&
        inputs.eq(8).val() == 2 &&
        inputs.eq(9).val() == 4 &&
        inputs.eq(10).val() == 7 &&
        inputs.eq(11).val() == 3 &&
        inputs.eq(12).val() == 4 &&
        inputs.eq(13).val() == 8 &&
        inputs.eq(14).val() == 6 &&
        inputs.eq(15).val() == 9 &&
        inputs.eq(16).val() == 4 &&
        inputs.eq(17).val() == 6 &&
        inputs.eq(18).val() == 8 &&
        inputs.eq(19).val() == 7 &&
        inputs.eq(20).val() == 2 &&
        inputs.eq(21).val() == 5 &&
        inputs.eq(22).val() == 2 &&
        inputs.eq(23).val() == 7 &&
        inputs.eq(24).val() == 5 &&
        inputs.eq(25).val() == 3 &&
        inputs.eq(26).val() == 4 &&
        inputs.eq(27).val() == 8 &&
        inputs.eq(28).val() == 5 &&
        inputs.eq(29).val() == 8 &&
        inputs.eq(30).val() == 1 &&
        inputs.eq(31).val() == 7 &&
        inputs.eq(32).val() == 4 &&
        inputs.eq(33).val() == 6 &&
        inputs.eq(34).val() == 7 &&
        inputs.eq(35).val() == 1 &&
        inputs.eq(36).val() == 9 &&
        inputs.eq(37).val() == 6 &&
        inputs.eq(38).val() == 4 &&
        inputs.eq(39).val() == 2 &&
        inputs.eq(40).val() == 6 &&
        inputs.eq(41).val() == 1 &&
        inputs.eq(42).val() == 8 &&
        inputs.eq(43).val() == 2 &&
        inputs.eq(44).val() == 3 &&
        inputs.eq(45).val() == 5 &&
        inputs.eq(46).val() == 8 &&
        inputs.eq(47).val() == 4 &&
        inputs.eq(48).val() == 5 &&
        inputs.eq(49).val() == 9 &&
        inputs.eq(50).val() == 1
    ){
      alert("Congratulations, you've beaten Level 3!!!");
      // Makes Level 3 button unclickable for future Sudoku Champion check
      var disabled = $('#levelButton3').attr("disabled", true);
      disabled;
      // Clears Game Board
      // var hidelevel = $('.square h2').hide();
      // hidelevel;
      createBoard();
    }
    else {
      alert("Keep trying!");
    }
  });
});

/* ------------------------------
 XI. Level 4
------------------------------*/
/* XI a. Fill Level 4 */
$('#levelButton4').on('click', function(){

  createBoard();
  var level4 = $('.square h2').each(function(i, obj) {
    if (i === 0){
      $(obj).text(4);
    }
    else if (i === 1){
      $(obj).text(2);
    }
    else if (i === 3){
      $(obj).text(7);
    }
    else if (i === 4){
      $(obj).text(1);
    }
    else if (i === 8){
      $(obj).text(3);
    }
    else if (i === 10){
      $(obj).text(5);
    }
    else if (i === 11){
      $(obj).text(3);
    }
    else if (i === 13){
      $(obj).text(8);
    }
    else if (i === 15){
      $(obj).text(7);
    }
    else if (i === 16){
      $(obj).text(1);
    }
    else if (i === 20){
      $(obj).text(6);
    }
    else if (i === 21){
      $(obj).text(3);
    }
    else if (i === 22){
      $(obj).text(5);
    }
    else if (i === 24){
      $(obj).text(2);
    }
    else if (i === 25){
      $(obj).text(4);
    }
    else if (i === 30){
      $(obj).text(5);
    }
    else if (i === 31){
      $(obj).text(9);
    }
    else if (i === 32){
      $(obj).text(3);
    }
    else if (i === 33){
      $(obj).text(6);
    }
    else if (i === 35){
      $(obj).text(7);
    }
    else if (i === 36){
      $(obj).text(5);
    }
    else if (i === 37){
      $(obj).text(9);
    }
    else if (i === 38){
      $(obj).text(2);
    }
    else if (i === 41){
      $(obj).text(7);
    }
    else if (i === 43){
      $(obj).text(8);
    }
    else if (i === 45){
      $(obj).text(3);
    }
    else if (i === 46){
      $(obj).text(6);
    }
    else if (i === 50){
      $(obj).text(4);
    }
    else if (i === 51){
      $(obj).text(9);
    }
    else if (i === 52){
      $(obj).text(5);
    }
    else if (i === 54){
      $(obj).text(6);
    }
    else if (i === 55){
      $(obj).text(8);
    }
    else if (i === 56){
      $(obj).text(1);
    }
    else if (i === 60){
      $(obj).text(4);
    }
    else if (i === 62){
      $(obj).text(2);
    }
    else if (i === 65){
      $(obj).text(5);
    }
    else if (i === 66){
      $(obj).text(2);
    }
    else if (i === 67){
      $(obj).text(4);
    }
    else if (i === 68){
      $(obj).text(8);
    }
    else if (i === 71){
      $(obj).text(9);
    }
    else if (i === 72){
      $(obj).text(2);
    }
    else if (i === 75){
      $(obj).text(6);
    }
    else if (i === 77){
      $(obj).text(1);
    }
    else if (i === 79){
      $(obj).text(3);
    }
    else if (i === 80){
      $(obj).text(8);
    }
    else{
      $(obj).append("<input class='puzzle-piece' type='text'>");
    }
  });
/* XI b. Level 4 Solution Logic */
  $('#progress').on('click', function(){
    let inputs = $("input");
    let levelFourSolution = [
      8, 6, 5, 9,
      9, 4, 2, 6,
      1, 7, 9, 8,
      8, 1, 4, 2,
      1, 6, 3, 4,
      7, 8, 2, 1,
      9, 3, 5, 7,
      7, 3, 1, 6,
      4, 9, 7, 8,
    ];
    if (inputs.eq(0).val() == 8 &&
        inputs.eq(1).val() == 6 &&
        inputs.eq(2).val() == 5 &&
        inputs.eq(3).val() == 9 &&
        inputs.eq(4).val() == 9 &&
        inputs.eq(5).val() == 4 &&
        inputs.eq(6).val() == 2 &&
        inputs.eq(7).val() == 6 &&
        inputs.eq(8).val() == 1 &&
        inputs.eq(9).val() == 7 &&
        inputs.eq(10).val() == 9 &&
        inputs.eq(11).val() == 8 &&
        inputs.eq(12).val() == 8 &&
        inputs.eq(13).val() == 1 &&
        inputs.eq(14).val() == 4 &&
        inputs.eq(15).val() == 2 &&
        inputs.eq(16).val() == 1 &&
        inputs.eq(17).val() == 6 &&
        inputs.eq(18).val() == 3 &&
        inputs.eq(19).val() == 4 &&
        inputs.eq(20).val() == 7 &&
        inputs.eq(21).val() == 8 &&
        inputs.eq(22).val() == 2 &&
        inputs.eq(23).val() == 1 &&
        inputs.eq(24).val() == 9 &&
        inputs.eq(25).val() == 3 &&
        inputs.eq(26).val() == 5 &&
        inputs.eq(27).val() == 7 &&
        inputs.eq(28).val() == 7 &&
        inputs.eq(29).val() == 3 &&
        inputs.eq(30).val() == 1 &&
        inputs.eq(31).val() == 6 &&
        inputs.eq(32).val() == 4 &&
        inputs.eq(33).val() == 9 &&
        inputs.eq(34).val() == 7 &&
        inputs.eq(35).val() == 8
    ){
      alert("Congratulations, you've beaten Level 4!!!");
      // Makes Level 4 button unclickable for future Sudoku Champion check
      var disabled = $('#levelButton4').attr("disabled", true);
      disabled;
      // Clears Game Board
      var hidelevel = $('.square h2').hide();
      hidelevel;
    }
    else {
      alert("Keep trying!");
    }
  });
});
/* ------------------------------
 XII. Level 5
------------------------------*/
/* XII a. Fill Level 5 */
$('#levelButton5').on('click', function(){

  createBoard();
  var level5 = $('.square h2').each(function(i, obj) {
    if (i === 0){
      $(obj).text(4);
    }
    else if (i === 1){
      $(obj).text(2);
    }
    else if (i === 3){
      $(obj).text(7);
    }
    else if (i === 4){
      $(obj).text(1);
    }
    else if (i === 8){
      $(obj).text(3);
    }
    else if (i === 10){
      $(obj).text(5);
    }
    else if (i === 11){
      $(obj).text(3);
    }
    else if (i === 13){
      $(obj).text(8);
    }
    else if (i === 15){
      $(obj).text(7);
    }
    else if (i === 16){
      $(obj).text(1);
    }
    else if (i === 20){
      $(obj).text(6);
    }
    else if (i === 21){
      $(obj).text(3);
    }
    else if (i === 22){
      $(obj).text(5);
    }
    else if (i === 24){
      $(obj).text(2);
    }
    else if (i === 25){
      $(obj).text(4);
    }
    else if (i === 30){
      $(obj).text(5);
    }
    else if (i === 31){
      $(obj).text(9);
    }
    else if (i === 32){
      $(obj).text(3);
    }
    else if (i === 33){
      $(obj).text(6);
    }
    else if (i === 35){
      $(obj).text(7);
    }
    else if (i === 36){
      $(obj).text(5);
    }
    else if (i === 37){
      $(obj).text(9);
    }
    else if (i === 38){
      $(obj).text(2);
    }
    else if (i === 41){
      $(obj).text(7);
    }
    else if (i === 43){
      $(obj).text(8);
    }
    else if (i === 45){
      $(obj).text(3);
    }
    else if (i === 46){
      $(obj).text(6);
    }
    else if (i === 50){
      $(obj).text(4);
    }
    else if (i === 51){
      $(obj).text(9);
    }
    else if (i === 52){
      $(obj).text(5);
    }
    else if (i === 54){
      $(obj).text(6);
    }
    else if (i === 55){
      $(obj).text(8);
    }
    else if (i === 56){
      $(obj).text(1);
    }
    else if (i === 60){
      $(obj).text(4);
    }
    else if (i === 62){
      $(obj).text(2);
    }
    else if (i === 65){
      $(obj).text(5);
    }
    else if (i === 66){
      $(obj).text(2);
    }
    else if (i === 67){
      $(obj).text(4);
    }
    else if (i === 68){
      $(obj).text(8);
    }
    else if (i === 71){
      $(obj).text(9);
    }
    else if (i === 72){
      $(obj).text(2);
    }
    else if (i === 75){
      $(obj).text(6);
    }
    else if (i === 77){
      $(obj).text(1);
    }
    else if (i === 79){
      $(obj).text(3);
    }
    else if (i === 80){
      $(obj).text(9);
    }
    else{
      $(obj).append("<input class='puzzle-piece' type='text'>");
    }
  });
/* XII b. Level 5 Solution Logic */
  $('#progress').on('click', function(){
    let inputs = $("input");
    let levelFiveSolution = [
      8, 6, 5, 9,
      9, 4, 2, 6,
      1, 7, 9, 8,
      8, 1, 4, 2,
      1, 6, 3, 4,
      7, 8, 2, 1,
      9, 3, 5, 7,
      7, 3, 1, 6,
      4, 9, 7, 8,
    ];
    if (inputs.eq(0).val() == 8 &&
        inputs.eq(1).val() == 6 &&
        inputs.eq(2).val() == 5 &&
        inputs.eq(3).val() == 9 &&
        inputs.eq(4).val() == 9 &&
        inputs.eq(5).val() == 4 &&
        inputs.eq(6).val() == 2 &&
        inputs.eq(7).val() == 6 &&
        inputs.eq(8).val() == 1 &&
        inputs.eq(9).val() == 7 &&
        inputs.eq(10).val() == 9 &&
        inputs.eq(11).val() == 8 &&
        inputs.eq(12).val() == 8 &&
        inputs.eq(13).val() == 1 &&
        inputs.eq(14).val() == 4 &&
        inputs.eq(15).val() == 2 &&
        inputs.eq(16).val() == 1 &&
        inputs.eq(17).val() == 6 &&
        inputs.eq(18).val() == 3 &&
        inputs.eq(19).val() == 4 &&
        inputs.eq(20).val() == 7 &&
        inputs.eq(21).val() == 8 &&
        inputs.eq(22).val() == 2 &&
        inputs.eq(23).val() == 1 &&
        inputs.eq(24).val() == 9 &&
        inputs.eq(25).val() == 3 &&
        inputs.eq(26).val() == 5 &&
        inputs.eq(27).val() == 7 &&
        inputs.eq(28).val() == 7 &&
        inputs.eq(29).val() == 3 &&
        inputs.eq(30).val() == 1 &&
        inputs.eq(31).val() == 6 &&
        inputs.eq(32).val() == 4 &&
        inputs.eq(33).val() == 9 &&
        inputs.eq(34).val() == 7 &&
        inputs.eq(35).val() == 8
    ){
      alert("Congratulations, you've beaten Level 5!!!");
      // Makes Level 5 button unclickable for future Sudoku Champion check
      var disabled = $('#levelButton5').attr("disabled", true);
      disabled;
      // Clears Game Board
      var hidelevel = $('.square h2').hide();
      hidelevel;
    }
    else {
      alert("Keep trying!");
    }
  });
});

/* ------------------------------
 . Things to add
------------------------------*/
/* ----------------------------------------------------------------------
 1) Prevent non-numeric inputs
---------------------------------------------------------------------*/
