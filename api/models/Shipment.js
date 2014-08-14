/**
* Shipment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      defaultsTo: null
    },
    destination_address: {
      type: 'string',
      defaultsTo: null
    },
    destination_latitude: {
      type: 'float',
      defaultsTo: null
    },
    destination_longitude: {
      type: 'float',
      defaultsTo: null
    },
    origin_address: {
      type: 'string',
      defaultsTo: null
    },
    origin_latitude: {
      type: 'float',
      defaultsTo: null
    },
    origin_longitude: {
      type: 'float',
      defaultsTo: null
    },
    package_height: {
      type: 'float',
      defaultsTo: null
    },
    package_width: {
      type: 'float',
      defaultsTo: null
    },
    package_depth: {
      type: 'float',
      defaultsTo: null
    },
    package_weight: {
      type: 'float',
      defaultsTo: null
    },
    cost: {
      type: 'float',
      defaultsTo: null
    }
  }
};

