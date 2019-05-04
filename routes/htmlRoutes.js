//var db = require("../models");

module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  app.get('/', (req, res) => {
    const obj = {
      loggedIn: true,
      isAdmin: true,
      user: { 
        id: 8,
        firstName: "Happy",
        lastName: "Gilmore",
        email: "email@email.com"
      },
      projects: [
        {
          projectId: 1,
          projectTitle: "Test project",
          projectOwner: { id: 3, name: "Bill" },
          projectDescription: "Here is a description of the project",
          projectDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
          projectComplete: false,
          projectTasks: [
            {
              taskId: 8,
              taskTitle: "The first task",
              taskDescription: "Here is a description of the task",
              taskStatus: "Not Started",
              taskDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
              taskComments: [
                {
                  commentId: 4,
                  commentDate: "2019-05...",
                  commentContent: "This is a great comment",
                  commentAuthor: { id: 9, firstName: "Adam", lastName: "Sandler"}
                }
              ]
            }
          ]
        }
      ],
    }
    res.render("index", obj);
  });

  app.get('/project/:id?', (req, res) => {
    
    res.render("project")
  })

  // app.get('/project/:id/task')

  app.get('/projects', (req, res) => {
    const obj = {
      loggedIn: true,
      isAdmin: true,
      user: { 
        id: 8,
        firstName: "Happy",
        lastName: "Gilmore",
        email: "email@email.com"
      },
      projects: [
        {
          projectId: 1,
          projectTitle: "Test project",
          projectOwner: { id: 3, name: "Bill" },
          projectDescription: "Here is a description of the project",
          projectDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
          projectComplete: false,
          projectTasks: [
            {
              taskId: 8,
              taskTitle: "The first task",
              taskDescription: "Here is a description of the task",
              taskStatus: "Not Started",
              taskDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
              taskComments: [
                {
                  commentId: 4,
                  commentDate: "2019-05...",
                  commentContent: "This is a great comment",
                  commentAuthor: { id: 9, firstName: "Adam", lastName: "Sandler"}
                }
              ]
            }
          ]
        }
      ],
    }
    res.render("projects", obj);
  })

  app.get('/tasks', (req, res) => {
    const obj = {
      loggedIn: true,
      isAdmin: true,
      user: { 
        id: 8,
        firstName: "Happy",
        lastName: "Gilmore",
        email: "email@email.com"
      },
      projects: [
        {
          projectId: 1,
          projectTitle: "Test project",
          projectOwner: { id: 3, name: "Bill" },
          projectDescription: "Here is a description of the project",
          projectDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
          projectComplete: false,
          projectTasks: [
            {
              taskId: 8,
              taskTitle: "The first task",
              taskDescription: "Here is a description of the task",
              taskStatus: "Not Started",
              taskDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
              taskComments: [
                {
                  commentId: 4,
                  commentDate: "2019-05...",
                  commentContent: "This is a great comment",
                  commentAuthor: { id: 9, firstName: "Adam", lastName: "Sandler"}
                }
              ]
            }
          ]
        }
      ],
    }
    res.render("tasks", obj);
  })

  app.get('/team', (req, res) => {
    const obj = {
      loggedIn: true,
      isAdmin: true,
      user: { 
        id: 8,
        firstName: "Happy",
        lastName: "Gilmore",
        email: "email@email.com"
      },
      members: [
        {
          userId: 1,
          firstName: 'Josh',
          lastName: 'Stevens',
          tasks: []
        }
      ]
    }
    res.render("team", obj);
  })





  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};
