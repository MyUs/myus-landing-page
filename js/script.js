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


});
