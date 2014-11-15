/**
 * TenantController
 *
 * @description :: Server-side logic for managing tenants
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * Create new tenant record
   */
	create: function(req, res) {

    // First create the user record
    User.create({
      email: req.body.email,
      password: req.body.password,
      type: req.body.type
    }).exec(function(err, user) {
      if (err) {
        req.flash('error', 'There was an error creating your account.');
        // TODO: this will be tenant specific register
        return res.view('register');
      }

      // User created, now create the tenant
      Tenant.create({
        user: user.id,
        firstName: req.body.firstname,
        lastName: req.body.lastname
      }).exec(function(err, tenant) {
        if (err) {
          req.flash('error', 'There was an error creating your account.');
          // TODO: this will be tenant specific register
          return res.view('register');
        }

        // TODO: this should probably log them in and send to tenant homepage
        req.flash('success', 'Account created!');
        return res.view('home');
      });

    });
  }

};

