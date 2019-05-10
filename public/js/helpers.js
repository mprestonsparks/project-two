var register = function(Handlebars) {
  var helpers = {
    getFirstLetter: function(val) {
        if (val !== undefined) {
          return val.charAt(0);
        }
    },

    getStatusClass: function(val) {
      var v = val.toLowerCase();
      switch(v) {
        case 'not started':
          return 'notStarted';

        case 'in progress':
          return 'inProgress';

        case 'complete':
          return 'complete';

        default:
          return 'notStarted'
      }
    },

    isActive: function(val1, val2) {
      if (val1 !== undefined) {
        if (parseInt(val1) === parseInt(val2)) {
          return 'active'
        } else {
          return ''
        }
      } else {
        return ''
      }
    },

    progressBar: function(tasks) {
      var totalTasks = 0;
      var completedTasks = 0;
      for (let task of tasks) {
        totalTasks += 1;
        if (parseInt(task.dataValues.TaskStatusId) === 3) {
          completedTasks += 1;
        }
      }

      var perc = (completedTasks / totalTasks) * 100;
      perc = (perc > 0) ? perc : 5;
      return perc;

    },

    getStatusSelect: function(taskId, statusId) {
      console.log(taskId, statusId)
      if (parseInt(taskId) === parseInt(statusId)) {
        return 'selected';
      } else {
        return null;
      }
    }

  };

  if (Handlebars && typeof Handlebars.registerHelper === "function") {
    // register helpers
    for (var prop in helpers) {
        Handlebars.registerHelper(prop, helpers[prop]);
    }
  } else {
      // just return helpers object if we can't register helpers here
      return helpers;
  }

};

module.exports.register = register;
module.exports.helpers = register(null);   