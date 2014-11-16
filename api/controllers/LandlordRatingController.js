/**
 * LandlordRatingController
 *
 * @description :: Server-side logic for managing Landlordratings
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  create: function(req, res) {
    var landlordId = req.params.landlordId;

    LandlordRating.create({

      rating: parseInt(req.body.rating),
      communication: req.body.communication,
      maintenance: req.body.maintenance,
      timeliness: req.body.timeliness,
      value: req.body.value,
      landlord: landlordId,
      tenant: req.session.user.tenant.id

    }).exec(function(err, rating) {
      if (err) return res.error('There was a problem saving the rating.', 500);

      req.flash('success', 'Rating saved! Thanks for your input.');
      return res.redirect('/landlord/' + landlordId);
    });
  }
};

