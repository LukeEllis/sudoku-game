console.log("JS connected");

/* ------------------------------
 I. Create the Game Board
------------------------------*/

for (var i = 0; i < 81; i++){
  $('.game-board').append("<div class='square'></div>")
}
for (var i = 0; i < 9; i++){
  $('.game-board').append("<div class='box'></div>")
}

/* ------------------------------
 II. Fill Level 1
------------------------------*/

$('.square').each(function(i, obj) {
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
      // $(obj).append("<form class='puzzle-piece'><input type='text' value=""></form>");
    }
});

/* ------------------------------
 III. Fill Level 2
------------------------------*/
/* ------------------------------
 IV. Fill Level 3
------------------------------*/
/* ------------------------------
 V. Fill Level 4
------------------------------*/
/* ------------------------------
 VI. Fill Level 5
------------------------------*/
