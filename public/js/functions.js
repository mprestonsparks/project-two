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


$('.submitProject').on('click', function(e) {
  e.preventDefault();
  console.log('submit!')
})


$('.modalWindow').on('click', function(e) {
  e.stopPropagation();
})


