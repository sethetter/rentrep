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

