/* ------------------------------
 0. Table of Contents
 I. Create the Game Board
 II. Restart Level Button
 III. Sudoku Champion Alert
 IV. Level 1
 IV. a. Fill Level 1
 IV. b. Level 1 Solution Logic
 IV. c. Level 1 Errors Button
 IV. d. Level 1 Answers Button
 V. Level 2
 V. a. Fill Level 2
 V. b. Level 2 Solution Logic
 V. c. Level 2 Errors Button
 V. d. Level 2 Answers Button
 VI. Level 3
 VI. a. Fill Level 3
 VI. b. Level 3 Solution Logic
 VI. c. Level 3 Errors Button
 VI. d. Level 3 Answers Button
 VII. Level 4
 VII. a. Fill Level 4 (Incomplete)
 VII. b. Level 4 Solution Logic
 VII. c. Level 4 Errors Button
 VII. d. Level 4 Answers Button
 VIII. Level 5
 VIII. a. Fill Level 5 (Incomplete)
 VIII. b. Level 5 Solution Logic
 VIII. c. Level 5 Errors Button
 VIII. d. Level 5 Answers Button
 IX. Future Features
 IX. a. Give Me A Hint Buttons
 IX. b. Grid Buttons
 IX. c. Pencil Marking Options
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
 II. Restart Level Button
------------------------------*/

$('#levelRestart').on('click', function(){
  $('.puzzle-piece').val('');
});

/* ------------------------------
 III. Sudoku Champion Alert
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
 IV. Level 1
------------------------------*/
/* IV. a. Fill Level 1 */
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

/* IV. b. Level 1 Solution Logic */

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

/* IV. c. Level 1 Errors Button */

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

/* IV. d. Level 1 Answers Button */
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
});

/* ------------------------------
 V. Level 2
------------------------------*/
/* V. a. Fill Level 2 */
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

/* V. b. Level 2 Solution Logic */

  $('#progress').on('click', function(){
    let all_answers_correct = [];
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
        all_answers_correct.push(true);
      } else {
        all_answers_correct.push(false);
      }
    })

    function checkTrue(val) {
      return val === true;
    }

    if (all_answers_correct.every(checkTrue)){
       alert("Congratulations, you've beaten Level 2!!!")
      // Makes Level 2 button unclickable for future Sudoku Champion check
      var disabled = $('#levelButton2').attr("disabled", true);
      disabled;
      // Checks for the Sudoku Champion
      champion();
    } else {
      alert("Keep trying!");
    }
  });
/* V. c. Level 2 Errors Button */

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
/* V. d. Level 2 Answers Button */
//fills in all text input boxes with correct answers

  $('#answers').on('click', function(){
    let boxes = $('.square h2');
    let inputs = $('input.puzzle-piece');

    let only_inputs = boxes.map((i, val) => {
      let inputs_mutate = Array.from(answerArray2);

      inputs_mutate[i].id = i;
      if (inputs_mutate[i].display === false) {
        return inputs_mutate[i];
        inputs.val('inputs_mutate[i]');
      }
    });

      only_inputs.map((i, val) => {
        let int_id = parseInt(i);
        let answer = parseInt(answerArray2[val.id].answer);
        let user_answer = parseInt(inputs.eq(int_id).val());

        inputs.eq(i).val(only_inputs[i].answer);
      });
  });
});

/* ------------------------------
 VI. Level 3
------------------------------*/
/* VI. a. Fill Level 3 */
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
/* VI. b. Level 3 Solution Logic */
  $('#progress').on('click', function(){
    let all_answers_correct = [];
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
        all_answers_correct.push(true);
      } else {
        all_answers_correct.push(false);
      }
    })

    function checkTrue(val) {
      return val === true;
    }

    if (all_answers_correct.every(checkTrue)){
       alert("Congratulations, you've beaten Level 3!!!")
      // Makes Level 3 button unclickable for future Sudoku Champion check
      var disabled = $('#levelButton3').attr("disabled", true);
      disabled;
      // Checks for the Sudoku Champion
      champion();
    } else {
      alert("Keep trying!");
    }
  });
/* VI. c. Level 3 Errors Button */

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
/* VI. d. Level 3 Answers Button */
//fills in all text input boxes with correct answers

  $('#answers').on('click', function(){
    let boxes = $('.square h2');
    let inputs = $('input.puzzle-piece');

    let only_inputs = boxes.map((i, val) => {
      let inputs_mutate = Array.from(answerArray3);

      inputs_mutate[i].id = i;
      if (inputs_mutate[i].display === false) {
        return inputs_mutate[i];
        inputs.val('inputs_mutate[i]');
      }
    });

      only_inputs.map((i, val) => {
        let int_id = parseInt(i);
        let answer = parseInt(answerArray3[val.id].answer);
        let user_answer = parseInt(inputs.eq(int_id).val());

        inputs.eq(i).val(only_inputs[i].answer);
      });
  });
});

/* ------------------------------
 VII. Level 4
------------------------------*/
/* VII. a. Fill Level 4 */
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
/* VII. b. Level 4 Solution Logic */
  $('#progress').on('click', function(){
    let all_answers_correct = [];
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
        all_answers_correct.push(true);
      } else {
        all_answers_correct.push(false);
      }
    })

    function checkTrue(val) {
      return val === true;
    }

    if (all_answers_correct.every(checkTrue)){
       alert("Congratulations, you've beaten Level 4!!!")
      // Makes Level 4 button unclickable for future Sudoku Champion check
      var disabled = $('#levelButton4').attr("disabled", true);
      disabled;
      // Checks for the Sudoku Champion
      champion();
    } else {
      alert("Keep trying!");
    }
  });
/* VII. c. Level 4 Errors Button */

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
/* VII. d. Level 4 Answers Button */

  $('#answers').on('click', function(){
    let boxes = $('.square h2');
    let inputs = $('input.puzzle-piece');

    let only_inputs = boxes.map((i, val) => {
      let inputs_mutate = Array.from(answerArray4);

      inputs_mutate[i].id = i;
      if (inputs_mutate[i].display === false) {
        return inputs_mutate[i];
        inputs.val('inputs_mutate[i]');
      }
    });

      only_inputs.map((i, val) => {
        let int_id = parseInt(i);
        let answer = parseInt(answerArray4[val.id].answer);
        let user_answer = parseInt(inputs.eq(int_id).val());

        inputs.eq(i).val(only_inputs[i].answer);
      });
  });
});

/* ------------------------------
 VIII. Level 5
------------------------------*/
/* VIII. a. Fill Level 5 */
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
/* VIII. b. Level 5 Solution Logic */
  $('#progress').on('click', function(){
    let all_answers_correct = [];
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
        all_answers_correct.push(true);
      } else {
        all_answers_correct.push(false);
      }
    })

    function checkTrue(val) {
      return val === true;
    }

    if (all_answers_correct.every(checkTrue)){
       alert("Congratulations, you've beaten Level 5!!!")
      // Makes Level 5 button unclickable for future Sudoku Champion check
      var disabled = $('#levelButton5').attr("disabled", true);
      disabled;
      // Checks for the Sudoku Champion
      champion();
    } else {
      alert("Keep trying!");
    }
  });
/* VIII. c. Level 5 Errors Button */

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
/* VIII. d. Level 5 Answers Button */
  $('#answers').on('click', function(){
    let boxes = $('.square h2');
    let inputs = $('input.puzzle-piece');

    let only_inputs = boxes.map((i, val) => {
      let inputs_mutate = Array.from(answerArray5);

      inputs_mutate[i].id = i;
      if (inputs_mutate[i].display === false) {
        return inputs_mutate[i];
        inputs.val('inputs_mutate[i]');
      }
    });

      only_inputs.map((i, val) => {
        let int_id = parseInt(i);
        let answer = parseInt(answerArray5[val.id].answer);
        let user_answer = parseInt(inputs.eq(int_id).val());

        inputs.eq(i).val(only_inputs[i].answer);
      });
  });
});

/* ------------------------------
 IX. Future Features
------------------------------*/
/* IX a. Give Me A Hint Button */
/* This button fills in the on-focus input box  of the user */

/* IX b. Grid Buttons */
/* These buttons show colors along the rows and columns of the number clicked.
   ie. Given I click the number 1, all number 1s on the board have a background
   color of red, and the rows and colums they are in have a background color
   of tomato. */
/* for (var j=1; j < 10; j++){
    let gridButton = $("<input type='button' value='' >")
    gridButton.attr('value', j)
    $('#gridButtonsBar').append(gridButton)
    gridButton.on('click', function(){
      alert("This button is still a work in progress. Try again some other time!");
    })
  } */

/* IX c. Pencil Marking Options */
/* This option changes the font-size of the text in each input box so more
   numbers can be seen. This allows for users to mark in potential numbers
   for harder puzzles where advanced algorithms may be necessary */
