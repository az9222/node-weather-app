const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/baed18024d2b2e50c06a1610300a35f8/${lat},${lng}`,
        json: true
    },
    (error, response, body)=>{
        if (error) {
           callback('Unable to connect to Forecast.io server')
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if (!error && response.statusCode == 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    })
}

module.exports.getWeather = getWeather;

// https://api.darksky.net/forecast/baed18024d2b2e50c06a1610300a35f8/37.2864678,-122.024631

