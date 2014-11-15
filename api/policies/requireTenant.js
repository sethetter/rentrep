/**
 * requireTenant
 *
 * @module      :: Policy
 * @description :: Check that logged in user is a tenant
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.authenticated || req.session.user.type === 'tenant') {
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You must be a tenant to perform this action.');
};
