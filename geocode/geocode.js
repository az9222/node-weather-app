const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

//request takes two args. the first one is an options obj where we can configure info. The second is a callback func that gets called when the data comes back from the http endpoint.
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true 
    }, 
    (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback("Unable to find address");
        } else if (body.status === "OK") {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude:  body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;

//baed18024d2b2e50c06a1610300a35f8
