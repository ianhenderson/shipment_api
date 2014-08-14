/**
* Shipment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var request = require('request');
var googlemapsAPIKey = sails.config.googlemapsAPIKey;

module.exports = {

  attributes: {
    name: {
      type: 'string',
      defaultsTo: null
    },
    destination_address: {
      type: 'string',
      defaultsTo: null,
      required: true
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
  },

  // Google Maps API call for geocoding of address
  beforeCreate: function(values, cb){

    var baseURI = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    var key = '&key=' + googlemapsAPIKey;

    var re = new RegExp(' ', 'g');
    var address = values.destination_address.replace(re, '+');
    var url = baseURI + address + key;

    request(url, function(err, res, body){

      if (err) {
        console.log(err);
      }

      var response = JSON.parse(body);

      if (response.status === 'OK') {

        var geometry = response.results[0].geometry;

        if (geometry && geometry.location_type !== 'APPROXIMATE') {

          values.destination_latitude = geometry.location.lat;
          values.destination_longitude = geometry.location.lng;
        }
      }

      cb();

    });
  }
};

