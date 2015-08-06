/**
 * controllers/blog/index.js
 * Controller for blog pages
 */

(function(global) { 
  "usr strict";

  // -- dependency modules

  // -- define / local variables

  // -- settings
  exports.engine = 'ejs';
  exports.prefix = '/blog';

  exports.before = function(req, res, next) {
    next();
  };

  // -- actions
  exports.index = function(req, res, next) {
    res.render('index');
  };

})((this || 0).self || global);
