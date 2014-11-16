/**
* Application.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    // Primary Attributes
    phone: { type: 'integer', required: true },
    dob: { type: 'date', required: true },
    dlNumber: { type: 'string', required: true },
    dlState: { type: 'string', required: true },

    currentAddress: { type: 'string', required: true },
    currentCity: { type: 'string', required: true },
    currentState: { type: 'string', required: true },
    currentZip: { type: 'integer', required: true },
    currentLandlordName: { type: 'string', required: true },
    currentLandlordAddress: { type: 'string', required: true },
    currentLandlordPhone: { type: 'string', required: true },
    timeAtCurrentAddress: { type: 'string', required: true },
    reasonForLeavingCurrent: { type: 'text', required: true },

    previousAddress: { type: 'string', required: true },
    previousCity: { type: 'string', required: true },
    previousState: { type: 'string', required: true },
    previousZip: { type: 'integer', required: true },
    previousLandlordName: { type: 'string', required: true },
    previousLandlordAddress: { type: 'string', required: true },
    previousLandlordPhone: { type: 'string', required: true },
    timeAtPreviousAddress: { type: 'string', required: true },
    reasonForLeavingPrevious: { type: 'text', required: true },

    autoYear: { type: 'integer', required: true },
    autoMake: { type: 'string', required: true },
    autoModel: { type: 'string', required: true },

    autoState: { type: 'string', required: true },
    autoLicense: { type: 'string', required: true },

    presentEmployer: { type: 'string', required: true },
    presentEmployerPosition: { type: 'string', required: true },
    presentEmployerPhone: { type: 'string', required: true },
    presentEmployerAddress: { type: 'string', required: true },
    presentEmployerCity: { type: 'string', required: true },
    presentEmployerState: { type: 'string', required: true },
    presentEmployerZip: { type: 'integer', required: true },
    timeAtPresentEmployer: { type: 'string', required: true },
    presentEmployerMonthlyIncome: { type: 'integer', required: true },
    otherIncome: { type: 'text' },

    state: {
      type: 'string',
      required: true,
      defaultsTo: 'submitted'
    },

    // Associations
    property: {
      model: 'property',
      required: true
    },

    tenant: {
      model: 'tenant',
      required: true
    },

    landlord: {
      model: 'landlord',
      required: true
    },

    coApplications: {
      collection: 'coApplication',
      via: 'application'
    }
  }
};

