module.exports = function errorHandler (message, status) {
  var req = this.req;
  var res = this.res;
  var backURL = req.header('Referer') || '/';

  // Set status code
  res.status(status || '404');

  // Set flash error message
  req.flash('error', message);

  res.redirect(backURL);
};

