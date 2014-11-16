/**
 * LandlordController
 *
 * @description :: Server-side logic for managing landlords
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  home: function(req, res) {
    var landlordId = req.session.user.landlord.id;

    Property.find({
      landlord: landlordId
    }).exec(function(err, properties) {
      return res.view('landlord/home', { properties: properties });
    });
  },

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
      if (err) return res.error('There was an error creating your account.');

      // User created, now create the landlord
      Landlord.create({
        user: user.id,
        firstName: req.body.firstname,
        lastName: req.body.lastname
      }).exec(function(err, landlord) {
        if (err) return res.error('There was an error creating your account.');

        User.update({ id: user.id }, { landlord: landlord.id }, function(err, user) {
          if (err) return res.error('There was an error creating your account.');

          req.flash('success', 'Account created!');

          return res.redirect('/');
        });

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
      if (err) return res.error('Problem finding specified landlord.');

      return res.view('landlord/show', { landlord: landlord });
    });
  }

};

