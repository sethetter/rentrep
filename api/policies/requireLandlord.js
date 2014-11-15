/**
 * requireLandlord
 *
 * @module      :: Policy
 * @description :: Check that logged in user is a landlord
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.authenticated || (req.session.user && req.session.user.type === 'landlord')) {
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You must be a landlord to perform this action.');
};
