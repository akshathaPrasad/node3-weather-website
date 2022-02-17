const request = require('postman-request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoiYWtzaGF0aGFwcmFzYWQiLCJhIjoiY2t5aXJwbGhhMWtxNDJ1cXBtM3QzMGdrdiJ9.dJwuZIjvLNSQcHOZALjNtw';
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback(`Unable to connect to location service!`);
        } else if (!body.features.length) {
            callback(`Unable to find location. Try another search.`);
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;