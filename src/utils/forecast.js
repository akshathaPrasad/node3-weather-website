const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?query=' + latitude + ',' + longitude + '&access_key=213b5b19ab2e894273ba421ca2bb62b4';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback(`Unable to connect to weather service!`);
        } else if (body.error) {
            callback(`Unable to find location.`);
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}%. The wind speed is ${body.current.wind_speed}km/h and the precipitation level is ${body.current.precip}mm.`);
        }
    });
};

module.exports = forecast;
