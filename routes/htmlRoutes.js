var db = require("../models");


module.exports = function(app, passport) {

  // auth routes...
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup/fail'
  }))

  

  app.post('/signin', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signin'
  }))

  app.get('/', isLoggedIn, (req, res) => {
    res.render("index")
  })


  app.get('/signin/:fail?', (req, res) => {
    res.render('sign-in');
  })

  app.get('/signup/:fail?', (req, res) => {
    res.render('sign-up');
  })


  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
  }

  app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      res.redirect('/');
    })
  })




  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
 
  // app.get('/',
  //   passport.authenticate('local'),
  //   (req, res) => {


  //   const obj = {
  //     loggedIn: false,
  //     isAdmin: false
  //   }

  //   db.Project.findAll({
  //     where: {
        
  //     }
  //   }).then((result) => {
  //     console.log(result)
  //     res.render("index", obj);
  //   })



    
    // const obj = {
    //   loggedIn: true,
    //   isAdmin: true,
    //   user: { 
    //     id: 8,
    //     firstName: "Happy",
    //     lastName: "Gilmore",
    //     email: "email@email.com"
    //   },
    //   projects: [
    //     {
    //       projectId: 1,
    //       projectTitle: "Test project",
    //       projectOwner: { id: 3, name: "Bill" },
    //       projectDescription: "Here is a description of the project",
    //       projectDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
    //       projectComplete: false,
    //       projectTasks: [
    //         {
    //           taskId: 8,
    //           taskTitle: "The first task",
    //           taskDescription: "Here is a description of the task",
    //           taskStatus: "Not Started",
    //           taskDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
    //           taskComments: [
    //             {
    //               commentId: 4,
    //               commentDate: "2019-05...",
    //               commentContent: "This is a great comment",
    //               commentAuthor: { id: 9, firstName: "Adam", lastName: "Sandler"}
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ],
    // }
    //res.render("index", obj);
    //res.send('hey')
  // });

  // app.get('/signup', (req, res) => {
  
  //   res.render("sign-up");

  // })

  // app.get('/project/:id?', (req, res) => {
  //   const obj = {
  //     loggedIn: true,
  //     isAdmin: true,
  //     user: { 
  //       id: 8,
  //       firstName: "Happy",
  //       lastName: "Gilmore",
  //       email: "email@email.com"
  //     },
  //     projectId: 1,
  //     projectTitle: "Test project",
  //     projectOwner: { id: 3, name: "Bill" },
  //     projectDescription: "Here is a description of the project",
  //     projectDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
  //     projectComplete: false,
  //     projectTasks: [
  //       {
  //         taskId: 8,
  //         taskOrder: 1,
  //         taskTitle: "The first task",
  //         taskDescription: "Here is a description of the task",
  //         taskStatus: "Not Started",
  //         taskDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
  //         taskComments: [
  //           {
  //             commentId: 4,
  //             commentDate: "2019-05...",
  //             commentContent: "This is a great comment",
  //             commentAuthor: { id: 9, firstName: "Adam", lastName: "Sandler"}
  //           }
  //         ]
  //       },
  //       {
  //         taskId: 8,
  //         taskOrder: 2,
  //         taskTitle: "The second task task",
  //         taskDescription: "Here is a description of the task",
  //         taskStatus: "In Progress",
  //         taskDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
  //         taskComments: [
  //           {
  //             commentId: 4,
  //             commentDate: "2019-05...",
  //             commentContent: "This is a great comment",
  //             commentAuthor: { id: 9, firstName: "Adam", lastName: "Sandler"}
  //           }
  //         ]
  //       }
  //     ]
  //   }
  //   res.render("project", obj)
  // })

  

  // // app.get('/project/:id/task')

  // app.get('/projects', (req, res) => {
  //   const obj = {
  //     loggedIn: true,
  //     isAdmin: true,
  //     user: { 
  //       id: 8,
  //       firstName: "Happy",
  //       lastName: "Gilmore",
  //       email: "email@email.com"
  //     },
  //     projects: [
  //       {
  //         projectId: 1,
  //         projectTitle: "Test project",
  //         projectOwner: { id: 3, name: "Bill" },
  //         projectDescription: "Here is a description of the project",
  //         projectDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
  //         projectComplete: false,
  //         projectTasks: [
  //           {
  //             taskId: 8,
  //             taskTitle: "The first task",
  //             taskDescription: "Here is a description of the task",
  //             taskStatus: "Not Started",
  //             taskDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
  //             taskComments: [
  //               {
  //                 commentId: 4,
  //                 commentDate: "2019-05...",
  //                 commentContent: "This is a great comment",
  //                 commentAuthor: { id: 9, firstName: "Adam", lastName: "Sandler"}
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         projectId: 2,
  //         projectTitle: "Test project 2",
  //         projectOwner: { id: 3, name: "Bill" },
  //         projectDescription: "Here is a description of the project",
  //         projectDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
  //         projectComplete: false,
  //         projectTasks: [
  //           {
  //             taskId: 8,
  //             taskTitle: "The first task",
  //             taskDescription: "Here is a description of the task",
  //             taskStatus: "Not Started",
  //             taskDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
  //             taskComments: [
  //               {
  //                 commentId: 4,
  //                 commentDate: "2019-05...",
  //                 commentContent: "This is a great comment",
  //                 commentAuthor: { id: 9, firstName: "Adam", lastName: "Sandler"}
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         projectId: 3,
  //         projectTitle: "Test project 3",
  //         projectOwner: { id: 3, name: "Bill" },
  //         projectDescription: "Here is a description of the project",
  //         projectDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
  //         projectComplete: false,
  //         projectTasks: [
  //           {
  //             taskId: 8,
  //             taskTitle: "The first task",
  //             taskDescription: "Here is a description of the task",
  //             taskStatus: "Not Started",
  //             taskDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
  //             taskComments: [
  //               {
  //                 commentId: 4,
  //                 commentDate: "2019-05...",
  //                 commentContent: "This is a great comment",
  //                 commentAuthor: { id: 9, firstName: "Adam", lastName: "Sandler"}
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ],
  //   }
  //   res.render("projects", obj);
  // })

  // app.get('/tasks', (req, res) => {
  //   const obj = {
  //     loggedIn: true,
  //     isAdmin: true,
  //     user: { 
  //       id: 8,
  //       firstName: "Happy",
  //       lastName: "Gilmore",
  //       email: "email@email.com"
  //     },
  //     projects: [
  //       {
  //         projectId: 1,
  //         projectTitle: "Test project",
  //         projectOwner: { id: 3, name: "Bill" },
  //         projectDescription: "Here is a description of the project",
  //         projectDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
  //         projectComplete: false,
  //         projectTasks: [
  //           {
  //             taskId: 8,
  //             taskTitle: "The first task",
  //             taskDescription: "Here is a description of the task",
  //             taskStatus: "Not Started",
  //             taskDates: {start: "mm/dd/yyyy", finish: "mm/dd/yyyy"},
  //             taskComments: [
  //               {
  //                 commentId: 4,
  //                 commentDate: "2019-05...",
  //                 commentContent: "This is a great comment",
  //                 commentAuthor: { id: 9, firstName: "Adam", lastName: "Sandler"}
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ],
  //   }
  //   res.render("tasks", obj);
  // })

  // app.get('/team', (req, res) => {
  //   const obj = {
  //     loggedIn: true,
  //     isAdmin: true,
  //     user: { 
  //       id: 8,
  //       firstName: "Happy",
  //       lastName: "Gilmore",
  //       email: "email@email.com"
  //     },
  //     members: [
  //       {
  //         userId: 1,
  //         firstName: 'Josh',
  //         lastName: 'Stevens',
  //         tasks: []
  //       }
  //     ]
  //   }
  //   res.render("team", obj);
  // })




  // Render 404 page for any unmatched routes
  // app.get("*", (req, res) => {
  //   res.render("404");
  // });
};
