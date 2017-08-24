/* ------------------------------
 0. Table of Contents
 I. Create the Game Board
 II. Restart Level Button
 III. Sudoku Champion Alert
 IV. Level 1
 V. a. Fill Level 1
 V. b. Level 1 Solution Logic (Must Refactor)
 V. c. Level 1 Errors Button
 V. d. Level 1 Answers Button (Must Refactor)
 VI. Level 2
 VI. a. Fill Level 2
 VI. b. Level 2 Solution Logic (Must Refactor)
 VI. c. Level 2 Errors Button
 VI. d. Level 2 Answers Button (Must Refactor)
 VII. Level 3
 VII. a. Fill Level 3
 VII. b. Level 3 Solution Logic (Must Refactor)
 VII. c. Level 3 Errors Button
 VII. d. Level 3 Answers Button (Must Refactor)
 VIII. Level 4
 VIII. a. Fill Level 4 (Incomplete)
 VIII. b. Level 4 Solution Logic (Must Refactor)
 VIII. c. Level 4 Errors Button
 VIII. d. Level 4 Answers Button (Incomplete)
 IX. Level 5
 IX. a. Fill Level 5 (Incomplete)
 IX. b. Level 5 Solution Logic (Must Refactor)
 IX. c. Level 5 Errors Button
 IX. d. Level 5 Answers Button (Incomplete)
 X. Future Features
 X. a. Give Me A Hint Buttons
 X. b. Grid Buttons
 X. c. Pencil Marking Options
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
 III. Restart Level Button
------------------------------*/

$('#levelRestart').on('click', function(){
  $('.puzzle-piece').val('');
});

/* ------------------------------
 IV. Sudoku Champion Alert
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
 V. Level 1
------------------------------*/
/* V. a. Fill Level 1 */
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

/* V. b. Level 1 Solution Logic */

    $('#progress').on('click', function(){
      let all_answers_correct = [];
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
        //If ALL User Answers === Correct Answers, then Congratulations one time!
        if (user_answer === answer) {
          all_answers_correct.push(true);
        } else {
          all_answers_correct.push(false);
        }
      })

      function checkTrue(val) {
        return val === true;
      }

      if (all_answers_correct.every(checkTrue)){
         alert("Congratulations, you've beaten Level 1!!!")
        // Makes Level 1 button unclickable for future Sudoku Champion check
        var disabled = $('#levelButton1').attr("disabled", true);
        disabled;
        // Checks for the Sudoku Champion
        champion();
      } else {
        alert("Keep trying!");
      }

    });

  //   $('#progress').on('click', function(){
  //   let inputs = $("input");
  //   if (inputs.eq(0).val() == 8 &&
  //       inputs.eq(1).val() == 6 &&
  //       inputs.eq(2).val() == 5 &&
  //       inputs.eq(3).val() == 9 &&
  //       inputs.eq(4).val() == 9 &&
  //       inputs.eq(5).val() == 4 &&
  //       inputs.eq(6).val() == 2 &&
  //       inputs.eq(7).val() == 6 &&
  //       inputs.eq(8).val() == 1 &&
  //       inputs.eq(9).val() == 7 &&
  //       inputs.eq(10).val() == 9 &&
  //       inputs.eq(11).val() == 8 &&
  //       inputs.eq(12).val() == 8 &&
  //       inputs.eq(13).val() == 1 &&
  //       inputs.eq(14).val() == 4 &&
  //       inputs.eq(15).val() == 2 &&
  //       inputs.eq(16).val() == 1 &&
  //       inputs.eq(17).val() == 6 &&
  //       inputs.eq(18).val() == 3 &&
  //       inputs.eq(19).val() == 4 &&
  //       inputs.eq(20).val() == 7 &&
  //       inputs.eq(21).val() == 8 &&
  //       inputs.eq(22).val() == 2 &&
  //       inputs.eq(23).val() == 1 &&
  //       inputs.eq(24).val() == 9 &&
  //       inputs.eq(25).val() == 3 &&
  //       inputs.eq(26).val() == 5 &&
  //       inputs.eq(27).val() == 7 &&
  //       inputs.eq(28).val() == 7 &&
  //       inputs.eq(29).val() == 3 &&
  //       inputs.eq(30).val() == 1 &&
  //       inputs.eq(31).val() == 6 &&
  //       inputs.eq(32).val() == 4 &&
  //       inputs.eq(33).val() == 9 &&
  //       inputs.eq(34).val() == 7 &&
  //       inputs.eq(35).val() == 8
  //   ){
  //     alert("Congratulations, you've beaten Level 1!!!");
  //     // Makes Level 1 button unclickable for future Sudoku Champion check
  //     var disabled = $('#levelButton1').attr("disabled", true);
  //     disabled;
  //     // Checks for the Sudoku Champion
  //     champion();
  //   }
  //   else {
  //     alert("Keep trying!");
  //   }
  // });
/* V. c. Level 1 Errors Button */

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

/* V d. Level 1 Answers Button */
//fills in all text input boxes with correct answers
  $('#answers').on('click', function(){
    let boxes = $('.square h2');
    let inputs = $('input.puzzle-piece');

    let only_inputs = boxes.map((i, val) => {
      let inputs_mutate = Array.from(answerArray1);

      inputs_mutate[i].id = i;
      if (inputs_mutate[i].display === false) {
        return inputs_mutate[i];
        inputs.val('inputs_mutate[i]');
      }
    });

      only_inputs.map((i, val) => {
        let int_id = parseInt(i);
        let answer = parseInt(answerArray1[val.id].answer);
        let user_answer = parseInt(inputs.eq(int_id).val());

        inputs.eq(i).val(only_inputs[i].answer);
      });
  });

  // $('#answers').on('click', function(){
  //   let inputs = $("input");
  //   inputs.eq(0).val('8') &&
  //   inputs.eq(1).val('6') &&
  //   inputs.eq(2).val('5') &&
  //   inputs.eq(3).val('9') &&
  //   inputs.eq(4).val('9') &&
  //   inputs.eq(5).val('4') &&
  //   inputs.eq(6).val('2') &&
  //   inputs.eq(7).val('6') &&
  //   inputs.eq(8).val('1') &&
  //   inputs.eq(9).val('7') &&
  //   inputs.eq(10).val('9') &&
  //   inputs.eq(11).val('8') &&
  //   inputs.eq(12).val('8') &&
  //   inputs.eq(13).val('1') &&
  //   inputs.eq(14).val('4') &&
  //   inputs.eq(15).val('2') &&
  //   inputs.eq(16).val('1') &&
  //   inputs.eq(17).val('6') &&
  //   inputs.eq(18).val('3') &&
  //   inputs.eq(19).val('4') &&
  //   inputs.eq(20).val('7') &&
  //   inputs.eq(21).val('8') &&
  //   inputs.eq(22).val('2') &&
  //   inputs.eq(23).val('1') &&
  //   inputs.eq(24).val('9') &&
  //   inputs.eq(25).val('3') &&
  //   inputs.eq(26).val('5') &&
  //   inputs.eq(27).val('7') &&
  //   inputs.eq(28).val('7') &&
  //   inputs.eq(29).val('3') &&
  //   inputs.eq(30).val('1') &&
  //   inputs.eq(31).val('6') &&
  //   inputs.eq(32).val('4') &&
  //   inputs.eq(33).val('9') &&
  //   inputs.eq(34).val('7') &&
  //   inputs.eq(35).val('8')
  // });

});

/* ------------------------------
 VI. Level 2
------------------------------*/
/* VI. a. Fill Level 2 */
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

/* VI. b. Level 2 Solution Logic */

  $('#progress').on('click', function(){
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
        alert("Congratulations, you've beaten Level 2!!!");
        // Makes Level 2 button unclickable for future Sudoku Champion check
        var disabled = $('#levelButton2').attr("disabled", true);
        disabled;
        // Checks for the Sudoku Champion
        champion();
      } else {
        alert("Keep trying!");
      }
    })
  });
  // $('#progress').on('click', function(){
  //   let inputs = $("input");
  //   if (inputs.eq(0).val() == 2 &&
  //       inputs.eq(1).val() == 1 &&
  //       inputs.eq(2).val() == 9 &&
  //       inputs.eq(3).val() == 6 &&
  //       inputs.eq(4).val() == 8 &&
  //       inputs.eq(5).val() == 3 &&
  //       inputs.eq(6).val() == 5 &&
  //       inputs.eq(7).val() == 1 &&
  //       inputs.eq(8).val() == 4 &&
  //       inputs.eq(9).val() == 4 &&
  //       inputs.eq(10).val() == 9 &&
  //       inputs.eq(11).val() == 1 &&
  //       inputs.eq(12).val() == 6 &&
  //       inputs.eq(13).val() == 5 &&
  //       inputs.eq(14).val() == 9 &&
  //       inputs.eq(15).val() == 7 &&
  //       inputs.eq(16).val() == 8 &&
  //       inputs.eq(17).val() == 5 &&
  //       inputs.eq(18).val() == 6 &&
  //       inputs.eq(19).val() == 2 &&
  //       inputs.eq(20).val() == 4 &&
  //       inputs.eq(21).val() == 9 &&
  //       inputs.eq(22).val() == 3 &&
  //       inputs.eq(23).val() == 5 &&
  //       inputs.eq(24).val() == 3 &&
  //       inputs.eq(25).val() == 6 &&
  //       inputs.eq(26).val() == 1 &&
  //       inputs.eq(27).val() == 7 &&
  //       inputs.eq(28).val() == 9 &&
  //       inputs.eq(29).val() == 4 &&
  //       inputs.eq(30).val() == 7 &&
  //       inputs.eq(31).val() == 6 &&
  //       inputs.eq(32).val() == 1 &&
  //       inputs.eq(33).val() == 9 &&
  //       inputs.eq(34).val() == 3 &&
  //       inputs.eq(35).val() == 1 &&
  //       inputs.eq(36).val() == 4 &&
  //       inputs.eq(37).val() == 7 &&
  //       inputs.eq(38).val() == 3 &&
  //       inputs.eq(39).val() == 9 &&
  //       inputs.eq(40).val() == 7 &&
  //       inputs.eq(41).val() == 2 &&
  //       inputs.eq(42).val() == 4
  //   ){
  //     alert("Congratulations, you've beaten Level 2!!!");
  //     // Makes Level 2 button unclickable for future Sudoku Champion check
  //     var disabled = $('#levelButton2').attr("disabled", true);
  //     disabled;
  //     // Checks for the Sudoku Champion
  //     champion();
  //   }
  //   else {
  //     alert("Keep trying!");
  //   }
  // });
/* VI. c. Level 2 Errors Button */

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
/* VI. d. Level 2 Answers Button */
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
 VII. Level 3
------------------------------*/
/* VII. a. Fill Level 3 */
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
/* VII. b. Level 3 Solution Logic */
  $('#progress').on('click', function(){
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
        alert("Congratulations, you've beaten Level 3!!!");
        // Makes Level 3 button unclickable for future Sudoku Champion check
        var disabled = $('#levelButton3').attr("disabled", true);
        disabled;
        // Checks for the Sudoku Champion
        champion();
      } else {
        alert("Keep trying!");
      }
    })
  });
  // $('#progress').on('click', function(){
  //   let inputs = $("input");
  //   if (inputs.eq(0).val() == 8 &&
  //       inputs.eq(1).val() == 3 &&
  //       inputs.eq(2).val() == 6 &&
  //       inputs.eq(3).val() == 7 &&
  //       inputs.eq(4).val() == 1 &&
  //       inputs.eq(5).val() == 1 &&
  //       inputs.eq(6).val() == 9 &&
  //       inputs.eq(7).val() == 6 &&
  //       inputs.eq(8).val() == 2 &&
  //       inputs.eq(9).val() == 4 &&
  //       inputs.eq(10).val() == 7 &&
  //       inputs.eq(11).val() == 3 &&
  //       inputs.eq(12).val() == 4 &&
  //       inputs.eq(13).val() == 8 &&
  //       inputs.eq(14).val() == 6 &&
  //       inputs.eq(15).val() == 9 &&
  //       inputs.eq(16).val() == 4 &&
  //       inputs.eq(17).val() == 6 &&
  //       inputs.eq(18).val() == 8 &&
  //       inputs.eq(19).val() == 7 &&
  //       inputs.eq(20).val() == 2 &&
  //       inputs.eq(21).val() == 5 &&
  //       inputs.eq(22).val() == 2 &&
  //       inputs.eq(23).val() == 7 &&
  //       inputs.eq(24).val() == 5 &&
  //       inputs.eq(25).val() == 3 &&
  //       inputs.eq(26).val() == 4 &&
  //       inputs.eq(27).val() == 8 &&
  //       inputs.eq(28).val() == 5 &&
  //       inputs.eq(29).val() == 8 &&
  //       inputs.eq(30).val() == 1 &&
  //       inputs.eq(31).val() == 7 &&
  //       inputs.eq(32).val() == 4 &&
  //       inputs.eq(33).val() == 6 &&
  //       inputs.eq(34).val() == 7 &&
  //       inputs.eq(35).val() == 1 &&
  //       inputs.eq(36).val() == 9 &&
  //       inputs.eq(37).val() == 6 &&
  //       inputs.eq(38).val() == 4 &&
  //       inputs.eq(39).val() == 2 &&
  //       inputs.eq(40).val() == 6 &&
  //       inputs.eq(41).val() == 1 &&
  //       inputs.eq(42).val() == 8 &&
  //       inputs.eq(43).val() == 2 &&
  //       inputs.eq(44).val() == 3 &&
  //       inputs.eq(45).val() == 5 &&
  //       inputs.eq(46).val() == 8 &&
  //       inputs.eq(47).val() == 4 &&
  //       inputs.eq(48).val() == 5 &&
  //       inputs.eq(49).val() == 9 &&
  //       inputs.eq(50).val() == 1
  //   ){
  //     alert("Congratulations, you've beaten Level 3!!!");
  //     // Makes Level 3 button unclickable for future Sudoku Champion check
  //     var disabled = $('#levelButton3').attr("disabled", true);
  //     disabled;
  //     // Checks for the Sudoku Champion
  //     champion();
  //   }
  //   else {
  //     alert("Keep trying!");
  //   }
  // });
/* VII. c. Level 3 Errors Button */

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
/* VII. d. Level 3 Answers Button */
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
 VIII. Level 4
------------------------------*/
/* VIII. a. Fill Level 4 */
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
/* VIII. b. Level 4 Solution Logic */
  $('#progress').on('click', function(){
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
        alert("Congratulations, you've beaten Level 4!!!");
        // Makes Level 4 button unclickable for future Sudoku Champion check
        var disabled = $('#levelButton4').attr("disabled", true);
        disabled;
        // Checks for the Sudoku Champion
        champion();
      } else {
        alert("Keep trying!");
      }
    })
  });
  // $('#progress').on('click', function(){
  //   let inputs = $("input");
  //   if (inputs.eq(0).val() == 8 &&
  //       inputs.eq(1).val() == 6 &&
  //       inputs.eq(2).val() == 5 &&
  //       inputs.eq(3).val() == 9 &&
  //       inputs.eq(4).val() == 9 &&
  //       inputs.eq(5).val() == 4 &&
  //       inputs.eq(6).val() == 2 &&
  //       inputs.eq(7).val() == 6 &&
  //       inputs.eq(8).val() == 1 &&
  //       inputs.eq(9).val() == 7 &&
  //       inputs.eq(10).val() == 9 &&
  //       inputs.eq(11).val() == 8 &&
  //       inputs.eq(12).val() == 8 &&
  //       inputs.eq(13).val() == 1 &&
  //       inputs.eq(14).val() == 4 &&
  //       inputs.eq(15).val() == 2 &&
  //       inputs.eq(16).val() == 1 &&
  //       inputs.eq(17).val() == 6 &&
  //       inputs.eq(18).val() == 3 &&
  //       inputs.eq(19).val() == 4 &&
  //       inputs.eq(20).val() == 7 &&
  //       inputs.eq(21).val() == 8 &&
  //       inputs.eq(22).val() == 2 &&
  //       inputs.eq(23).val() == 1 &&
  //       inputs.eq(24).val() == 9 &&
  //       inputs.eq(25).val() == 3 &&
  //       inputs.eq(26).val() == 5 &&
  //       inputs.eq(27).val() == 7 &&
  //       inputs.eq(28).val() == 7 &&
  //       inputs.eq(29).val() == 3 &&
  //       inputs.eq(30).val() == 1 &&
  //       inputs.eq(31).val() == 6 &&
  //       inputs.eq(32).val() == 4 &&
  //       inputs.eq(33).val() == 9 &&
  //       inputs.eq(34).val() == 7 &&
  //       inputs.eq(35).val() == 8
  //   ){
  //     alert("Congratulations, you've beaten Level 4!!!");
  //     // Makes Level 4 button unclickable for future Sudoku Champion check
  //     var disabled = $('#levelButton4').attr("disabled", true);
  //     disabled;
  //     // Checks for the Sudoku Champion
  //     champion();
  //   }
  //   else {
  //     alert("Keep trying!");
  //   }
  // });
/* VIII. c. Level 4 Errors Button */

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
/* VIII. d. Level 4 Answers Button */

  // $('#answers').on('click', function(){
  //   //fill in all text input boxes with correct answers
  // });
});
/* ------------------------------
 IX. Level 5
------------------------------*/
/* IX. a. Fill Level 5 */
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
/* IX. b. Level 5 Solution Logic */
  $('#progress').on('click', function(){
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
        alert("Congratulations, you've beaten Level 5!!!");
        // Makes Level 5 button unclickable for future Sudoku Champion check
        var disabled = $('#levelButton5').attr("disabled", true);
        disabled;
        // Checks for the Sudoku Champion
        champion();
      } else {
        alert("Keep trying!");
      }
    })
  });
  // $('#progress').on('click', function(){
  //   let inputs = $("input");
  //   if (inputs.eq(0).val() == 8 &&
  //       inputs.eq(1).val() == 6 &&
  //       inputs.eq(2).val() == 5 &&
  //       inputs.eq(3).val() == 9 &&
  //       inputs.eq(4).val() == 9 &&
  //       inputs.eq(5).val() == 4 &&
  //       inputs.eq(6).val() == 2 &&
  //       inputs.eq(7).val() == 6 &&
  //       inputs.eq(8).val() == 1 &&
  //       inputs.eq(9).val() == 7 &&
  //       inputs.eq(10).val() == 9 &&
  //       inputs.eq(11).val() == 8 &&
  //       inputs.eq(12).val() == 8 &&
  //       inputs.eq(13).val() == 1 &&
  //       inputs.eq(14).val() == 4 &&
  //       inputs.eq(15).val() == 2 &&
  //       inputs.eq(16).val() == 1 &&
  //       inputs.eq(17).val() == 6 &&
  //       inputs.eq(18).val() == 3 &&
  //       inputs.eq(19).val() == 4 &&
  //       inputs.eq(20).val() == 7 &&
  //       inputs.eq(21).val() == 8 &&
  //       inputs.eq(22).val() == 2 &&
  //       inputs.eq(23).val() == 1 &&
  //       inputs.eq(24).val() == 9 &&
  //       inputs.eq(25).val() == 3 &&
  //       inputs.eq(26).val() == 5 &&
  //       inputs.eq(27).val() == 7 &&
  //       inputs.eq(28).val() == 7 &&
  //       inputs.eq(29).val() == 3 &&
  //       inputs.eq(30).val() == 1 &&
  //       inputs.eq(31).val() == 6 &&
  //       inputs.eq(32).val() == 4 &&
  //       inputs.eq(33).val() == 9 &&
  //       inputs.eq(34).val() == 7 &&
  //       inputs.eq(35).val() == 8
  //   ){
  //     alert("Congratulations, you've beaten Level 5!!!");
  //     // Makes Level 5 button unclickable for future Sudoku Champion check
  //     var disabled = $('#levelButton5').attr("disabled", true);
  //     disabled;
  //     // Checks for the Sudoku Champion
  //     champion();
  //   }
  //   else {
  //     alert("Keep trying!");
  //   }
  // });
/* IX. c. Level 5 Errors Button */

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
/* IX. d. Level 5 Answers Button */

  // $('#answers').on('click', function(){
  //   //fill in all text input boxes with correct answers
  // });
});

/* ------------------------------
 X. Future Features
------------------------------*/
/* X a. Give Me A Hint Button */
/* This button fills in the on-focus input box  of the user */

/* X b. Grid Buttons */
/* These buttons show colors along the rows and columns of the number clicked.
   ie. Given I click the number 1, all number 1s on the board have a background
   color of red, and the rows and colums they are in have a background color
   of tomato. */

/* X c. Pencil Marking Options */
/* This option changes the font-size of the text in each input box so more
   numbers can be seen. This allows for users to mark in potential numbers
   for harder puzzles where advanced algorithms may be necessary */
