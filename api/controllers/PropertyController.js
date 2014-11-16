/**
 * PropertyController
 *
 * @description :: Server-side logic for managing properties
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * View route, for new property
   */
  new: function(req, res) {
    return res.view('property/new');
  },

  create: function(req, res) {
    Property.create({
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      zip: parseInt(req.body.zip),
      sqFootage: parseInt(req.body.sqFootage),
      price: parseInt(req.body.price),
      deposit: parseInt(req.body.deposit),
      pets: req.body.pets,
      petDeposit: parseInt(req.body.petDeposit),
      parking: req.body.parking,
      bedrooms: parseInt(req.body.bedrooms),
      bathrooms: parseInt(req.body.bathrooms),
      appliances: req.body.appliances,
      description: req.body.description,
      amenities: req.body.amenities,
      utilities: req.body.utilities,
      landlord: req.session.user.landlord.id
    }).exec(function(err, property) {
      if (err) return res.error('There was a problem creating your property.');

      req.flash('success', 'Property created!');
      res.redirect('/property/' + property.id);
    });
  },

  /**
   * View a single property
   */
  show: function(req, res) {

    Property.findOne({
      id: req.params.propertyId
    }).exec(function(err, property) {
      if (err) return res.error('There was a problem finding specificed property.');

      return res.view('property/show', { property: property });
    });
  },

  /**
   * List all properties
   */
  index: function(req, res) {
    Property.find().exec(function(err, properties) {
      if (err) return res.error('There was a problem.', '500');

      return res.view('property/index', { properties: properties });
    });
  }
};

