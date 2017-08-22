console.log("JS connected");

/* ------------------------------
 I. Create the Game Board
------------------------------*/

for (var i = 0; i < 81; i++){
  let square = $("<div class='square'></div>")
  square.append('<h6></h6>')
  $('.game-board').append(square)
}
// for (var i = 0; i < 9; i++){
//   $('.game-board').append("<div class='box'></div>")
// }

/* ------------------------------
 II. Fill Level 1
------------------------------*/

// var sudoku_data = [
//   [4,2,0,7,1,0,0,0,3],
//   [0,5,3,0,8,0,7,1,0],
//   [0,0,6,3,5,0,2,4,0],
//   [0,0,0,5,9,3,6,0,7],
//   [5,9,2,0,0,7,0,8,0],
//   [3,6,0,0,0,4,9,5,0],
//   [6,8,1,0,0,0,4,0,2],
//   [0,0,5,2,4,8,0,0,9],
//   [2,0,0,6,0,1,0,3,5]
// ];

$('.square h6').each(function(i, obj) {
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

/* ------------------------------
 III. Solve Level 1 Logic
------------------------------*/

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
  }
  else {
    alert("Keep trying!");
  }
});

/* ------------------------------
 . Fill Level 2
------------------------------*/
/* ------------------------------
 . Solve Level 2 Logic
------------------------------*/
/* ------------------------------
 . Fill Level 3
------------------------------*/
/* ------------------------------
 . Solve Level 3 Logic
------------------------------*/
/* ------------------------------
 . Fill Level 4
------------------------------*/
/* ------------------------------
 . Solve Level 4 Logic
------------------------------*/
/* ------------------------------
 . Fill Level 5
------------------------------*/
/* ------------------------------
 . Solve Level 5 Logic
------------------------------*/
