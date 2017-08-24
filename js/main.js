/* ------------------------------
 0. Table of Contents
 I. Create the Game Board
 II. Grid Buttons (Incomplete)
 III. Solution Arrays
 IV. Restart Level Button
 V. Hint Button (Legacy/Review)
 VI. Sudoku Champion Alert
 VII. Level 1
 VII. a. Fill Level 1
 VII. b. Level 1 Solution Logic
 VII. c. Level 1 Errors Button
 VII. d. Level 1 Hint Button (Incomplete)
 VII. e. Level 1 Answers Button
 VIII. Level 2
 VIII. a. Fill Level 2
 VIII. b. Level 2 Solution Logic
 VIII. c. Level 2 Errors Button
 VIII. d. Level 2 Hint Button (Incomplete)
 VIII. e. Level 2 Answers Button
 IX. Level 3
 IX. a. Fill Level 3
 IX. b. Level 3 Solution Logic
 IX. c. Level 3 Errors Button
 IX. d. Level 3 Hint Button (Incomplete)
 IX. e. Level 3 Answers Button
 X. Level 4
 X. a. Fill Level 4
 X. b. Level 4 Solution Logic
 X. c. Level 4 Errors Button
 X. d. Level 4 Hint Button (Incomplete)
 X. e. Level 4 Answers Button
 XI. Level 5
 XI. a. Fill Level 5
 XI. b. Level 5 Solution Logic
 XI. c. Level 5 Errors Button
 XI. d. Level 5 Hint Button (Incomplete)
 XI. e. Level 5 Answers Button
------------------------------*/

/* ------------------------------
 I. Create the Game Board
------------------------------*/

var createBoard = function (){
  $('.game-board').empty();
  $('#progress').off('click');
  $('#errors').off('click');
  $('#hint').off('click');
  $('#answers').off('click');
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
  let gridButton = $("<input type='button' value='' >")
  gridButton.attr('value', j)
  $('#gridButtonsBar').append(gridButton)
  gridButton.on('click', function(){
    alert("This button is still a work in progress. Try again some other time!");
  })
}

/* ------------------------------
 III. Solution Arrays
------------------------------*/
//let answerArray1 = [8, 6, 5, 9, 9, 4, 2, 6, 1, 7, 9, 8, 8, 1, 4, 2, 1, 6, 3, 4, 7, 8, 2, 1, 9, 3, 5, 7, 7, 3, 1, 6, 4, 9, 7, 8];
// let answerArray2 = [2, 1, 9, 6, 8, 3, 5, 1, 4, 4, 9, 1, 6, 5, 9, 7, 8, 5, 6, 2, 4, 9, 3, 5, 3, 6, 1, 7, 9, 4, 7, 6, 1, 9, 3, 1, 4, 7, 3, 9, 7, 2, 4];
// let answerArray3 = [8, 3, 6, 7, 1, 1, 9, 6, 2, 4, 7, 3, 4, 8, 6, 9, 4, 6, 8, 7, 2, 5, 2, 7, 5, 3, 4, 8, 5, 8, 1, 7, 4, 6, 7, 1, 9, 6, 4, 2, 6, 1, 8, 2, 3, 5, 8, 4, 5, 9, 1];
// let answerArray4 = [8, 6, 5, 9, 9, 4, 2, 6, 1, 7, 9, 8, 8, 1, 4, 2, 1, 6, 3, 4, 7, 8, 2, 1, 9, 3, 5, 7, 7, 3, 1, 6, 4, 9, 7, 8];
// let answerArray5 = [8, 6, 5, 9, 9, 4, 2, 6, 1, 7, 9, 8, 8, 1, 4, 2, 1, 6, 3, 4, 7, 8, 2, 1, 9, 3, 5, 7, 7, 3, 1, 6, 4, 9, 7, 8];


/* ------------------------------
 IV. Restart Level Button
------------------------------*/

$('#levelRestart').on('click', function(){
  $('.puzzle-piece').val('');
});

/* ------------------------------
 V. Hint Button
------------------------------*/

// $('#hint').on('click', function(){
//   alert("This button is still a work in progress. Try again some other time!");
//   // $('.puzzle-piece').on('focus', function(){
//   //   $('.puzzle-piece:nth-child(1)').val('5')
//   // });
// });

/* ------------------------------
 VII. Sudoku Champion Alert
------------------------------*/
/* If all buttons are disabled, the player is crowned the Sudoku Champion */

var champion = function(){
  if ($('#levelButton1').is(":disabled") && $('#levelButton2').is(":disabled")
      && $('#levelButton3').is(":disabled") && $('#levelButton4').is(":disabled")
      && $('#levelButton5').is(":disabled")){
        alert("Congratulations, you are officially the Sudoku Champion!!!")
    };
};

/* ------------------------------
 VIII. Level 1
------------------------------*/
/* VIII a. Fill Level 1 */
$('#levelButton1').on('click', function(){

  createBoard();
  var level1 = $('.square h2').each(function(i, obj) {
    if (answerArray1[i].display === true) {
      $(obj).text(answerArray1[i].answer);
      $(obj).attr('answer', answerArray1[i].answer);
    }else{
      $(obj).append("<input class='puzzle-piece' type='text'>");
    }
  });

/* VIII b. Level 1 Solution Logic */

    $('#progress').on('click', function(){
    let inputs = $("input");
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
      // Checks for the Sudoku Champion
      champion();
    }
    else {
      alert("Keep trying!");
    }
  });
/* VIII c. Level 1 Errors Button */

  $('#errors').on('click', function(){
    let boxes = $('.square h2');
    let inputs = $('input.puzzle-piece');

    let only_inputs = boxes.map((i, val) => {
      let inputs_mutate = Array.from(answerArray1);

      inputs_mutate[i].id = i;
      if (inputs_mutate[i].display === false) {
        return inputs_mutate[i];
      }
    });
    only_inputs.map((i, val) => {
      let int_id = parseInt(i);
      let answer = parseInt(answerArray1[val.id].answer);
      let user_answer = parseInt(inputs.eq(int_id).val());

      if (user_answer === answer) {
        inputs.eq(int_id).css('background-color', 'white');
      } else {
        inputs.eq(int_id).css('background-color', 'red');
      }
    })
  });

/* VIII d. Level 1 Hint Button */
//fills in current text input box with correct answer

  $('#hint').on('click', function(){
    let inputs = $("input");
    $('.puzzle-piece').on('focus', function(){
        //need to find current eq(number) to target the focus
        inputs.eq(0).val('5');
      });
  });

/* VIII e. Level 1 Answers Button */
//fills in all text input boxes with correct answers

  $('#answers').on('click', function(){
    let inputs = $("input");
    inputs.eq(0).val('8') &&
    inputs.eq(1).val('6') &&
    inputs.eq(2).val('5') &&
    inputs.eq(3).val('9') &&
    inputs.eq(4).val('9') &&
    inputs.eq(5).val('4') &&
    inputs.eq(6).val('2') &&
    inputs.eq(7).val('6') &&
    inputs.eq(8).val('1') &&
    inputs.eq(9).val('7') &&
    inputs.eq(10).val('9') &&
    inputs.eq(11).val('8') &&
    inputs.eq(12).val('8') &&
    inputs.eq(13).val('1') &&
    inputs.eq(14).val('4') &&
    inputs.eq(15).val('2') &&
    inputs.eq(16).val('1') &&
    inputs.eq(17).val('6') &&
    inputs.eq(18).val('3') &&
    inputs.eq(19).val('4') &&
    inputs.eq(20).val('7') &&
    inputs.eq(21).val('8') &&
    inputs.eq(22).val('2') &&
    inputs.eq(23).val('1') &&
    inputs.eq(24).val('9') &&
    inputs.eq(25).val('3') &&
    inputs.eq(26).val('5') &&
    inputs.eq(27).val('7') &&
    inputs.eq(28).val('7') &&
    inputs.eq(29).val('3') &&
    inputs.eq(30).val('1') &&
    inputs.eq(31).val('6') &&
    inputs.eq(32).val('4') &&
    inputs.eq(33).val('9') &&
    inputs.eq(34).val('7') &&
    inputs.eq(35).val('8')
  });

});

/* ------------------------------
 IX. Level 2
------------------------------*/
/* IX a. Fill Level 2 */
$('#levelButton2').on('click', function(){

  createBoard();
  var level2 = $('.square h2').each(function(i, obj) {
    if (answerArray2[i].display === true) {
      $(obj).text(answerArray2[i].answer);
      $(obj).attr('answer', answerArray2[i].answer);
    }else{
      $(obj).append("<input class='puzzle-piece' type='text'>");
    }
  });

/* IX b. Level 2 Solution Logic */
  $('#progress').on('click', function(){
    let inputs = $("input");
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
      // Checks for the Sudoku Champion
      champion();
    }
    else {
      alert("Keep trying!");
    }
  });
/* IX c. Level 2 Errors Button */

  $('#errors').on('click', function(){
    let boxes = $('.square h2');
    let inputs = $('input.puzzle-piece');

    let only_inputs = boxes.map((i, val) => {
      let inputs_mutate = Array.from(answerArray2);

      inputs_mutate[i].id = i;
      if (inputs_mutate[i].display === false) {
        return inputs_mutate[i];
      }
    });
    only_inputs.map((i, val) => {
      let int_id = parseInt(i);
      let answer = parseInt(answerArray2[val.id].answer);
      let user_answer = parseInt(inputs.eq(int_id).val());

      if (user_answer === answer) {
        inputs.eq(int_id).css('background-color', 'white');
      } else {
        inputs.eq(int_id).css('background-color', 'red');
      }
    })
  });
/* IX d. Level 2 Hint Button */

  // $('#hint').on('click', function(){
  //   //fill current text input box with answer
  // });
/* IX e. Level 2 Answers Button */
//fills in all text input boxes with correct answers

  $('#answers').on('click', function(){
    let inputs = $("input");
    inputs.eq(0).val('2') &&
    inputs.eq(1).val('1') &&
    inputs.eq(2).val('9') &&
    inputs.eq(3).val('6') &&
    inputs.eq(4).val('8') &&
    inputs.eq(5).val('3') &&
    inputs.eq(6).val('5') &&
    inputs.eq(7).val('1') &&
    inputs.eq(8).val('4') &&
    inputs.eq(9).val('4') &&
    inputs.eq(10).val('9') &&
    inputs.eq(11).val('1') &&
    inputs.eq(12).val('6') &&
    inputs.eq(13).val('5') &&
    inputs.eq(14).val('9') &&
    inputs.eq(15).val('7') &&
    inputs.eq(16).val('8') &&
    inputs.eq(17).val('5') &&
    inputs.eq(18).val('6') &&
    inputs.eq(19).val('2') &&
    inputs.eq(20).val('4') &&
    inputs.eq(21).val('9') &&
    inputs.eq(22).val('3') &&
    inputs.eq(23).val('5') &&
    inputs.eq(24).val('3') &&
    inputs.eq(25).val('6') &&
    inputs.eq(26).val('1') &&
    inputs.eq(27).val('7') &&
    inputs.eq(28).val('9') &&
    inputs.eq(29).val('4') &&
    inputs.eq(30).val('7') &&
    inputs.eq(31).val('6') &&
    inputs.eq(32).val('1') &&
    inputs.eq(33).val('9') &&
    inputs.eq(34).val('3') &&
    inputs.eq(35).val('1') &&
    inputs.eq(36).val('4') &&
    inputs.eq(37).val('7') &&
    inputs.eq(38).val('3') &&
    inputs.eq(39).val('9') &&
    inputs.eq(40).val('7') &&
    inputs.eq(41).val('2') &&
    inputs.eq(42).val('4')
  });
});

/* ------------------------------
 X. Level 3
------------------------------*/
/* X a. Fill Level 3 */
$('#levelButton3').on('click', function(){

  createBoard();
  var level3 = $('.square h2').each(function(i, obj) {
    if (answerArray3[i].display === true) {
      $(obj).text(answerArray3[i].answer);
      $(obj).attr('answer', answerArray3[i].answer);
    }else{
      $(obj).append("<input class='puzzle-piece' type='text'>");
    }
  });
/* X b. Level 3 Solution Logic */
  $('#progress').on('click', function(){
    let inputs = $("input");
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
      // Checks for the Sudoku Champion
      champion();
    }
    else {
      alert("Keep trying!");
    }
  });
/* X c. Level 3 Errors Button */

  $('#errors').on('click', function(){
    let boxes = $('.square h2');
    let inputs = $('input.puzzle-piece');

    let only_inputs = boxes.map((i, val) => {
      let inputs_mutate = Array.from(answerArray3);

      inputs_mutate[i].id = i;
      if (inputs_mutate[i].display === false) {
        return inputs_mutate[i];
      }
    });
    only_inputs.map((i, val) => {
      let int_id = parseInt(i);
      let answer = parseInt(answerArray3[val.id].answer);
      let user_answer = parseInt(inputs.eq(int_id).val());

      if (user_answer === answer) {
        inputs.eq(int_id).css('background-color', 'white');
      } else {
        inputs.eq(int_id).css('background-color', 'red');
      }
    })
  });
/* X d. Level 3 Hint Button */

  // $('#hint').on('click', function(){
  //   //fill current text input box with answer
  // });
/* X e. Level 3 Answers Button */
//fills in all text input boxes with correct answers

  $('#answers').on('click', function(){
    let inputs = $("input");
    inputs.eq(0).val('8') &&
    inputs.eq(1).val('3') &&
    inputs.eq(2).val('6') &&
    inputs.eq(3).val('7') &&
    inputs.eq(4).val('1') &&
    inputs.eq(5).val('1') &&
    inputs.eq(6).val('9') &&
    inputs.eq(7).val('6') &&
    inputs.eq(8).val('2') &&
    inputs.eq(9).val('4') &&
    inputs.eq(10).val('7') &&
    inputs.eq(11).val('3') &&
    inputs.eq(12).val('4') &&
    inputs.eq(13).val('8') &&
    inputs.eq(14).val('6') &&
    inputs.eq(15).val('9') &&
    inputs.eq(16).val('4') &&
    inputs.eq(17).val('6') &&
    inputs.eq(18).val('8') &&
    inputs.eq(19).val('7') &&
    inputs.eq(20).val('2') &&
    inputs.eq(21).val('5') &&
    inputs.eq(22).val('2') &&
    inputs.eq(23).val('7') &&
    inputs.eq(24).val('5') &&
    inputs.eq(25).val('3') &&
    inputs.eq(26).val('4') &&
    inputs.eq(27).val('8') &&
    inputs.eq(28).val('5') &&
    inputs.eq(29).val('8') &&
    inputs.eq(30).val('1') &&
    inputs.eq(31).val('7') &&
    inputs.eq(32).val('4') &&
    inputs.eq(33).val('6') &&
    inputs.eq(34).val('7') &&
    inputs.eq(35).val('1') &&
    inputs.eq(36).val('9') &&
    inputs.eq(37).val('6') &&
    inputs.eq(38).val('4') &&
    inputs.eq(39).val('2') &&
    inputs.eq(40).val('6') &&
    inputs.eq(41).val('1') &&
    inputs.eq(42).val('8') &&
    inputs.eq(43).val('2') &&
    inputs.eq(44).val('3') &&
    inputs.eq(45).val('5') &&
    inputs.eq(46).val('8') &&
    inputs.eq(47).val('4') &&
    inputs.eq(48).val('5') &&
    inputs.eq(49).val('9') &&
    inputs.eq(50).val('1')
  });
});

/* ------------------------------
 XI. Level 4
------------------------------*/
/* XI a. Fill Level 4 */
$('#levelButton4').on('click', function(){

  createBoard();
  var level4 = $('.square h2').each(function(i, obj) {
    if (answerArray4[i].display === true) {
      $(obj).text(answerArray4[i].answer);
      $(obj).attr('answer', answerArray4[i].answer);
    }else{
      $(obj).append("<input class='puzzle-piece' type='text'>");
    }
  });
/* XI b. Level 4 Solution Logic */
  $('#progress').on('click', function(){
    let inputs = $("input");
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
      // Checks for the Sudoku Champion
      champion();
    }
    else {
      alert("Keep trying!");
    }
  });
/* XI c. Level 4 Errors Button */

  $('#errors').on('click', function(){
    let boxes = $('.square h2');
    let inputs = $('input.puzzle-piece');

    let only_inputs = boxes.map((i, val) => {
      let inputs_mutate = Array.from(answerArray4);

      inputs_mutate[i].id = i;
      if (inputs_mutate[i].display === false) {
        return inputs_mutate[i];
      }
    });
    only_inputs.map((i, val) => {
      let int_id = parseInt(i);
      let answer = parseInt(answerArray4[val.id].answer);
      let user_answer = parseInt(inputs.eq(int_id).val());

      if (user_answer === answer) {
        inputs.eq(int_id).css('background-color', 'white');
      } else {
        inputs.eq(int_id).css('background-color', 'red');
      }
    })
  });
/* XI d. Level 4 Hint Button */

  // $('#hint').on('click', function(){
  //   //fill current text input box with answer
  // });
/* XI e. Level 4 Answers Button */

  // $('#answers').on('click', function(){
  //   //fill in all text input boxes with correct answers
  // });
});
/* ------------------------------
 XII. Level 5
------------------------------*/
/* XII a. Fill Level 5 */
$('#levelButton5').on('click', function(){

  createBoard();
  var level5 = $('.square h2').each(function(i, obj) {
    if (answerArray5[i].display === true) {
      $(obj).text(answerArray5[i].answer);
      $(obj).attr('answer', answerArray5[i].answer);
    }else{
      $(obj).append("<input class='puzzle-piece' type='text'>");
    }
  });
/* XII b. Level 5 Solution Logic */
  $('#progress').on('click', function(){
    let inputs = $("input");
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
      // Checks for the Sudoku Champion
      champion();
    }
    else {
      alert("Keep trying!");
    }
  });
/* XII c. Level 5 Errors Button */

  $('#errors').on('click', function(){
    let boxes = $('.square h2');
    let inputs = $('input.puzzle-piece');

    let only_inputs = boxes.map((i, val) => {
      let inputs_mutate = Array.from(answerArray5);

      inputs_mutate[i].id = i;
      if (inputs_mutate[i].display === false) {
        return inputs_mutate[i];
      }
    });
    only_inputs.map((i, val) => {
      let int_id = parseInt(i);
      let answer = parseInt(answerArray5[val.id].answer);
      let user_answer = parseInt(inputs.eq(int_id).val());

      if (user_answer === answer) {
        inputs.eq(int_id).css('background-color', 'white');
      } else {
        inputs.eq(int_id).css('background-color', 'red');
      }
    })
  });
/* XII d. Level 5 Hint Button */

  // $('#hint').on('click', function(){
  //   //fill current text input box with answer
  // });
/* XII e. Level 5 Answers Button */

  // $('#answers').on('click', function(){
  //   //fill in all text input boxes with correct answers
  // });
});
