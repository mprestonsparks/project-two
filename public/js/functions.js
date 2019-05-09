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
    project_description: projectDescription
  };

  $.post("/api/project", newProj, function(res) {
    window.location = "/project/" + res.id;
  });
});

$(".modalWindow").on("click", function(e) {
  e.stopPropagation();
});
