$('#progress').on('click', function(){
  let inputs = $("input");
  let levelTwoSolution = [
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
    alert("Congratulations, you've beaten Level 2!!!");
    // Makes Level 1 button unclickable for future Sudoku Champion check
    var disabled = $('#levelButton2').attr("disabled", true);
    disabled;
    // Clears Game Board
    // var hideLevel = $('.square h2').hide();
    // hideLevel;
    createBoard();
  }
  else {
    alert("Keep trying!");
  }
});
});
