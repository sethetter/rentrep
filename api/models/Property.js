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
      type: 'number',
      required: true
    },
    price: {
      type: 'number',
      required: true
    },
    deposit: {
      type: 'number',
      required: true
    },
    pets: {
      type: 'boolean',
      required: true
    },
    petDeposit: {
      type: 'number'
    },
    parking: {
      type: 'string'
    },
    bedrooms: {
      type: 'number',
      required: true
    },
    bathrooms: {
      type: 'number',
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
    }
  }
};

