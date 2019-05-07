$('.createProject').on('click', function(e) {
  e.preventDefault();
  $('.modalContainer').addClass('active');
} )

$('.cancel').on('click', function(e) {
  e.preventDefault();
  $('.modalContainer').removeClass('active');
})