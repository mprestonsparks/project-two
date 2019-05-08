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


// $('#createUser').on('click', function(e) {
//   e.preventDefault();

//   var formVals = {
//     user_first_name: $('#firstName').val().trim(),
//     user_last_name: $('#lastName').val().trim(),
//     user_email: $('#email').val().trim(),
//     user_password: $('#password').val().trim()
//   }

//   $.post('/api/user', formVals, function(data) {
//     sessionStorage.setItem("userId", data.id);
//     sessionStorage.setItem("firstName", data.user_first_name);
//     sessionStorage.setItem("lastName", data.user_last_name);
//     sessionStorage.setItem('admin', 'true');

//     // go to the home page
//     window.location = window.location.origin;

//   })


// })

$('.modalWindow').on('click', function(e) {
  e.stopPropagation();
})

