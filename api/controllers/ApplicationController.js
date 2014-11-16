/**
 * ApplicationController
 *
 * @description :: Server-side logic for managing applications
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  new: function(req, res) {
    var propertyId = req.params.propertyId;

    Property.findOne({ id: propertyId }).exec(function(err, property) {
      if (err) return res.error('Property not found');

      return res.view('property/application/new', { property: property });
    });

  },

  create: function(req, res) {
    var propertyId = req.params.propertyId;

    Application.create({
      property: propertyId

      // TODO: properties?!
    }).exec(function(err, application) {
      if (err) return res.error('Problem creating the application');

      return res.redirect('/tenant/home');
    });
  },

  // TODO: approve, deny
  approve: function(req, res) {},
  deny: functio(req, res) {}
};

