console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
$(window).scroll(function(){
    $(".jumbotron > h1, .lead, .btn ").css("opacity", 1 - $(window).scrollTop() / 250);
  });