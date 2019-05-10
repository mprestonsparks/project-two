$(".createProject").on("click", function(e) {
  e.preventDefault();
  $("#projectModal").addClass("active");
});

$(".createTask").on("click", function(e) {
  e.preventDefault();
  $("#taskModal").addClass("active");
});

$(".cancel, .modalContainer").on("click", function(e) {
  e.preventDefault();
  $(".modalContainer").removeClass("active");
});

$(".submitProject").on("click", function(e) {
  e.preventDefault();
  var projectName = $("#projectName")
    .val()
    .trim();
  var projectOwner = $("#projectOwner")
    .find(":selected")
    .attr("value");
  var projectStartDate = $("#projectStartDate").val();
  var projectFinishDate = $("#projectFinishDate").val();
  var projectDescription = $("#projectDescription")
    .val()
    .trim();

  var newProj = {
    project_name: projectName,
    UserId: projectOwner,
    project_description: projectDescription,
    goal_start: projectStartDate,
    goal_end: projectFinishDate,
  };

  $.post("/api/project", newProj, function(res) {
    window.location = "/project/" + res.id;
  });
});


$(".submitTask").on("click", function(e) {
  e.preventDefault();
  var projectId = $('.createProjectContainer').data('project-id');
  var taskName = $("#taskName")
    .val()
    .trim();
  var taskOwner = $("#taskAssignee")
    .find(":selected")
    .attr("value");
  var taskStartDate = $("#taskStartDate").val();
  var taskFinishDate = $("#taskFinishDate").val();
  var taskDescription = $("#taskDescription")
    .val()
    .trim();

  var newTask = {
    task_name: taskName,
    UserId: taskOwner,
    goal_start: taskStartDate,
    goal_end: taskFinishDate,
    task_description: taskDescription,
    ProjectId: projectId
  };

  //need to create task assignment

  $.post("/api/task", newTask, function(res) {
    window.location = "/project/" + projectId + "/" + res.id;
  });
});


$(".modalWindow").on("click", function(e) {
  e.stopPropagation();
});


$('.projectStatusSelect').change(function() {
  var status = $('.projectStatusSelect').find(':selected').attr('value');
  if (parseInt(status) === 1 ) {
    $('.projectStatusSelect')
      .removeClass('complete')
      .removeClass('inProgress')
      .addClass('notStarted')
  }
  if (parseInt(status) === 2 ) {
    $('.projectStatusSelect')
      .removeClass('notStarted')
      .removeClass('complete')
      .addClass('inProgress')
  }
  if (parseInt(status) === 3 ) {
    $('.projectStatusSelect')
      .removeClass('notStarted')
      .removeClass('inProgress')
      .addClass('complete')
  }

  var taskId = $(this).data('taskid');
  // send off ajax post here...
  var status = { TaskStatusId: parseInt(status) } 

  $.ajax({
    url: '/api/task/update/' + taskId,
    type: 'PUT',
    data: status
  }).then(function() {
    console.log('updated')
  })
})
