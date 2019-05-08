var register = function(Handlebars) {
  var helpers = {
    getFirstLetter: function(val) {
        return val.charAt(0);
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
        if (val1 === val2) {
          console.log(val1, val2)
          return 'active'
        } else {
          return ''
        }
      } else {
        return ''
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