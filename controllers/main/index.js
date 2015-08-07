/**
 * controllers/main/index.js
 * Controller for Index pages
 */

(function(global) { 
  "usr strict";

  // -- dependency modules

  // -- define / local variables

  // -- settings
  exports.engine = 'ejs';

  // -- actions
  exports.index = function(req, res, next) {
    res.render('index');
  };

})((this || 0).self || global);
