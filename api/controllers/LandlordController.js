/**
 * LandlordController
 *
 * @description :: Server-side logic for managing landlords
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * Create new landlord record
   */
	create: function(req, res) {

    // First create the user record
    User.create({
      email: req.body.email,
      password: req.body.password,
      type: req.body.type
    }).exec(function(err, user) {
      if (err) {
        console.log(err);
        req.flash('error', 'There was an error creating your account.');
        // TODO: this will be landlord specific register
        return res.view('register');
      }

      // User created, now create the landlord
      Landlord.create({
        user: user.id,
        firstName: req.body.firstname,
        lastName: req.body.lastname
      }).exec(function(err, landlord) {
        if (err) {
          console.log(err);
          req.flash('error', 'There was an error creating your account.');
          // TODO: this will be landlord specific register
          return res.view('register');
        }

        // TODO: this should probably log them in and send to landlord homepage
        req.flash('success', 'Account created!');
        return res.view('home');
      });

    });
  },

  /**
   * View a single landlord
   */
  view: function(req, res) {

    Landlord.findOne({
      id: req.params.landlordId
    }).exec(function(err, landlord) {
      if (err) {
        var backURL = req.header('Referer') || '/';
        req.flash('error', 'There was a problem finding specified landlord');
        req.redirect(backURL);
      }
    });
  },

  /**
   * Landlord homepage
   */
  home: function(req, res) {
    if (!req.user) {
      return
    }
  }
};

