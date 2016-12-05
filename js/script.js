$(document).ready(function(){

  $(".logo").hide();

  var show_logo = function(){
    $(".logo").css("display","block");
  };
  setTimeout(show_logo, 3200)

  var thunder = function(){
      $(".tuono").trigger("play");
  };
  setTimeout(thunder,3000)

  var strong_thunder = function(){
      $(".strong_tunder").trigger("play");
  };
  setTimeout(strong_thunder,7200)

  $(".blood").hide();

  var show_blood = function(){
    $(".blood").css("display","block");
  };
  setTimeout(show_blood, 7400)

  var show_button = function(){
    $(".btn_Start").css("opacity","1");
  };
  setTimeout(show_button, 50000)

  $('.change_vol').click(function() {
  var playing = false;

        $(this).toggleClass("down");

        if (playing == false) {
            document.getElementById('player').play();
            playing = true;

        } else {
            document.getElementById('player').pause();
            playing = false;

        };

    });


});
