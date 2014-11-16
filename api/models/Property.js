/**
* Property.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    streetAddress: {
      type: 'string',
      required: true
    },
    city: {
      type: 'string',
      required: true
    },
    state: {
      type: 'string',
      required: true
    },
    zip: {
      type: 'string',
      required: true
    },
    sqFootage: {
      type: 'integer',
      required: true
    },
    price: {
      type: 'integer',
      required: true
    },
    deposit: {
      type: 'integer',
      required: true
    },
    pets: {
      type: 'boolean'
    },
    petDeposit: {
      type: 'integer'
    },
    parking: {
      type: 'string'
    },
    bedrooms: {
      type: 'integer',
      required: true
    },
    bathrooms: {
      type: 'integer',
      required: true
    },
    appliances: {
      type: 'text'
    },
    description: {
      type: 'text'
    },
    amenities: {
      type: 'text'
    },
    utilities: {
      type: 'text'
    },

    landlord: {
      model: 'landlord',
      required: true
    }
  }
};

