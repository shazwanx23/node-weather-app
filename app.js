// const yargs = require('yargs');

// const geocode = require('./geocode/geocode.js');
// const argv = yargs
// 	.options({
// 		a: {
// 			demand: true,
// 			alias: 'address',
// 			describe: 'Address to fetch weather for',
// 			string: true
// 		}
// 	})
// 	.help()
// 	.alias('help', 'h')
// 	.argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results)=> {
// 	if(errorMessage){
// 		console.log(errorMessage);
// 	} else {
// 		console.log(JSON.stringify(results, undefined, 2));
// 	}
// });

//ecf6ae32695a52d6e500a58bcad38382

const request = require('request');
request({
	url: 'https://api.darksky.net/forecast/ecf6ae32695a52d6e500a58bcad38382/3.021998,101.7055411',
	json: true
}, (error, response, body) => {
	if(!error && response.statusCode === 200){
		console.log(body.currently.temperature);		
	} else {
		console.log('unable to fetch weather.')
	}
});
