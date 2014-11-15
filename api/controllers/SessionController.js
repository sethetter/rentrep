/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var bcrypt = require('bcrypt');

module.exports = {

  login: function(req, res) {
    User.findOne({
      email: req.body.email
    }).exec(function(err, user) {
      if (err || !user) return res.error('Unable to find user for that email address.');

      bcrypt.compare(req.body.password, user.password, function(err, result) {
        if (!result) return res.error('Invalid password.');

        req.session.user = user.toJSON();
        req.session.authenticated = true;
        req.flash('success', 'Successfully logged in.');

        return res.redirect(user.type === 'landlord' ? '/landlord/home' : '/tenant/home');
      });


    });
  },

  logout: function(req, res) {
    req.session.user = null;
    req.session.authenticated = false;

    req.flash('success', 'Logged out!');
    return res.redirect('/');
  }
};

