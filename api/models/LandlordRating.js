/**
* LandlordRating.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    rating: {
      type: 'integer',
      required: true
    },

    communication: 'text',
    maintenance: 'text',
    timeliness: 'text',
    value: 'text',

    landlord: {
      model: 'landlord',
      required: true
    },

    tenant: {
      model: 'tenant',
      required: true
    }

    //property: {
    //  model: 'property',
    //  required: true
    //}

  }
};

