const request = require('request');

var getWeather = (lat, lng, callback) =>{	
	request({
		url: 'https://api.darksky.net/forecast/ecf6ae32695a52d6e500a58bcad38382/' + lat + ',' + lng,
		json: true
	}, (error, response, body) => {
		if(!error && response.statusCode === 200){
			callback(undefined, {
				temperature : body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		} else {
			callback('unable to fetch weather.');
		}
	});
};

module.exports.getWeather = getWeather;