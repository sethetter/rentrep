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
    var tenantId = req.session.user.tenant.id;

    Application.create({
      property: propertyId,
      tenant: tenantId,

      phone: req.body.phone,
      dob: req.body.dob,
      dlNumber: req.body.dlNumber,
      dlState: req.body.dlState,

      currentAddress: req.body.currentAddress,
      currentCity: req.body.currentCity,
      currentState: req.body.currentState,
      currentZip: req.body.currentZip,
      currentLandlordName: req.body.currentLandlordName,
      currentLandlordAddress: req.body.currentLandlordAddress,
      currentLandlordPhone: req.body.currentLandlordPhone,
      timeAtCurrentAddress: req.body.timeAtCurrentAddress,
      reasonForLeavingCurrent: req.body.reasonForLeavingCurrent,

      previousAddress: req.body.previousAddress,
      previousCity: req.body.previousCity,
      previousState: req.body.previousState,
      previousZip: req.body.previousZip,
      previousLandlordName: req.body.previousLandlordName,
      previousLandlordAddress: req.body.previousLandlordAddress,
      previousLandlordPhone: req.body.previousLandlordPhone,
      timeAtPreviousAddress: req.body.timeAtPreviousAddress,
      reasonForLeavingPrevious: req.body.reasonForLeavingPrevious,

      autoYear: req.body.autoYear,
      autoMake: req.body.autoMake,
      autoModel: req.body.autoModel,

      autoState: req.body.autoState,
      autoLicense: req.body.autoLicense,

      presentEmployer: req.body.presentEmployer,
      presentEmployerPosition: req.body.presentEmployerPosition,
      presentEmployerPhone: req.body.presentEmployerPhone,
      presentEmployerAddress: req.body.presentEmployerAddress,
      presentEmployerCity: req.body.presentEmployerCity,
      presentEmployerState: req.body.presentEmployerState,
      presentEmployerZip: req.body.presentEmployerZip,
      timeAtPresentEmployer: req.body.timeAtPresentEmployer,
      presentEmployerMonthlyIncome: req.body.presentEmployerMonthlyIncome,
      otherIncome: req.body.otherIncome

    }).exec(function(err, application) {
      console.log(err);
      if (err) return res.error('Problem creating the application');

      req.flash('success', 'Application submitted!');
      return res.redirect('/tenant/home');
    });
  },

  // TODO: approve, deny
  approve: function(req, res) {},
  deny: function(req, res) {}
};

