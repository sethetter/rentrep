/**
* Application.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    // Associations
    property: {
      model: 'property',
      required: true
    },

    tenant: {
      model: 'tenant',
      required: true
    }
  }
};

