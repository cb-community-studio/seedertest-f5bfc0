const users = require("./users/users.service.js");
const seeders = require("./seeders/seeders.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(seeders);
  // ~cb-add-configure-service-name~
};
