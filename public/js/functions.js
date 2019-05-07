$('.createProject').on('click', function(e) {
  e.preventDefault();
  $('#projectModal').addClass('active');
} )


$('.createTask').on('click', function(e) {
  e.preventDefault();
  $('#taskModal').addClass('active');
})

$('.cancel, .modalContainer').on('click', function(e) {
  e.preventDefault();
  $('.modalContainer').removeClass('active');
})


$('.modalWindow').on('click', function(e) {
  e.stopPropagation();
})