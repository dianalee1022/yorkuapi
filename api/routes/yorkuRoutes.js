'use strict';
module.exports = function(app) {
    var scholarships = require('../controllers/yorkuController');

  // todoList Routes
  app.route('/scholarships')
    .get(scholarships.list_all_scholarships)
  app.route('/scholarships/undergrad')
    .get(scholarships.list_all_undergrad)
  /*app.route('/scholarships/:faculty.:field.:timing') // TODO: In the future
    .get(scholarships.list_undergrad)*/
  app.route('/scholarships/grad')
    .get(scholarships.list_all_grad)

};
