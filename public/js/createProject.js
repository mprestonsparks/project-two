
// // Get references to page elements
// var $createProjectBtn = $("#createProject");
// var $projectName = $("#projectName");
// var $projectOwner = $("#projectOwner");
// var $startDate = $("#startDate"); // Input field doesn't exist yet
// var $finishDate = $("#finish-Date"); // Input field doesn't exist yet
// var $projectDescription = $("#projectDescription");


// // The API object contains methods for each kind of request we'll make
// var API = {
//    saveProject: function (project) {
//        console.log('saveProject called');
//        return $.ajax({
//            headers: {
//                "Content-Type": "application/json"
//            },
//            type: "POST",
//            url: "/api/project",
//            data: JSON.stringify(project)
//        });
//    },

//     // ** USE THIS EXAMPLE TO GET USER'S TO POPULATE '#projectOwner' ??
//    //   getExamples: function() {
//    //     return $.ajax({
//    //       url: "api/projects",
//    //       type: "GET"
//    //     });
//    //   },

// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function (event) {
//    var project = {
//        project_name: $projectName.val().trim(),
//        project_lead: $projectOwner,
//        project_description: $projectDescription.val().trim()
//    };

//     // ** NEED TO BE ABLE TO SELECT PROJECT LEAD BEFORE REQUIRING FOR VALIDATION
//    // if (!(project.project_name && project.project_lead && project.project_description)) {
//    //     alert("You must enter a name, owner, and description for the project.");
//    //     return;
//    // }

//     API.saveProject(project).then(function () {
//        // refreshExamples();
//        console.log("test");
//    });

//     $projectName.val("");
//    $projectOwner.val("");
//    $projectDescription.val("");
// };

// // Add event listeners to the submit and delete buttons
// $($createProjectBtn).on("submit", function(event) {
//    event.preventDefault();
//    handleFormSubmit();
// });