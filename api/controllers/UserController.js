/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	create: function(req, res) {
    User.create({
      username: req.params.username,
      email: req.params.email,
      password: req.params.password,
      type: req.params.type
    }).exec(function(err, user) {
      if (err) {
        req.flash('err', err.message);
        return res.view('users/register');
      }

      req.flash('success', 'Account created!');
      return res.view('homepage');
    });
  }

};

