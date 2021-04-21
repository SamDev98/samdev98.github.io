$('.navbar-collapse a').click(function() {
  $(".navbar-collapse").collapse('hide');
});

$('#mainNav a').click(function(e) {
  $('#mainNav a').removeClass('active');
  $(this).addClass('active');
});
