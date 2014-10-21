$(function() {

  $("#sidenav").onePageNav();
  $(".video-container").fitVids();

  $("#menu-trigger").on("click", function(event) {
    event.preventDefault();
    $('#main-nav').toggleClass('open');
  });

  $("#sidenav-trigger").on("click", function(event) {
    event.preventDefault();
    $('#sidenav').toggleClass('open');
  });

  // if($('html').hasClass('no-touch')) {
  //   alert('YES');
  // }
  // else {
  //   alert('NO');
  // }

  // if($('html').hasClass('csstransforms')) {
  //   alert('transforms supported');
  // }
  // else {
  //   alert('transforms NOT supported');
  // }


  // alert($('html').attr('class'));


});
