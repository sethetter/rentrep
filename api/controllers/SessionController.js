/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var bcrypt = require('bcrypt');

module.exports = {

  login: function(req, res) {
    var backURL = req.header('Referer') || '/';

    User.findOne({
      email: req.body.email
    }).exec(function(err, user) {
      if (err) {
        req.flash('error', 'Unable to find user for that email address.');
        return res.redirect(backURL);
      }

      bcrypt.compare(req.body.password, user.password, function(err, res) {
        if (!res) {
          req.flash('error', 'Invalid password.');
          return res.redirect(backURL);
        }

        req.session.user = user.toJSON();
        req.session.authenticated = true;
        req.flash('success', 'Successfully logged in.');

        return res.redirect(backURL);
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

