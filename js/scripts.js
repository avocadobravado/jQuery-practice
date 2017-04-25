// Background color buttons

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});


// Pizza buttons

$(document).ready(function() {
  $(".button1").click(function() {
    $(".secret-text").slideToggle();
    });
  $(".button2").click(function() {
    $(".secret-text2").fadeToggle();
  });
  $(".button3").click(function() {
    $(".secret-text3").fadeIn();
    }).click(function() {
      $(".secret-text3").slideUp();
  });
  //$(".button3").click(function() {
    //$(".secret-text3").slideUp(stay);
  //});
});

//
$('.icMenu span.menu').each(function() {
     // do something
}).click(function() {
    // do something else
});
