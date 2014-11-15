/**
 * 403 (Forbidden) Handler
 *
 * Usage:
 * return res.forbidden();
 * return res.forbidden(err);
 */

module.exports = function forbidden (message, options) {

  // Get access to `req`, `res`, & `sails`
  var req = this.req;
  var res = this.res;
  var backURL = req.header('referrer') || '/';

  // Set status code
  res.status(403);

  req.flash('error', message);
  res.redirect(backURL);
};

