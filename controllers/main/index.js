/**
 * controllers/main/index.js
 * Controller for Index pages
 */

(function(global) { 
  "usr strict";

  // -- dependency modules

  // -- define / local variables

  // -- settings

  // -- actions
  exports.index = function(req, res, next) {
    res.send('/');
  };

})((this || 0).self || global);
