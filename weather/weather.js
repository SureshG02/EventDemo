const request = require('request');
var rp = require('request-promise');

async function fetchWeather(locationArray) {
  let promiseArray = [];
  for (var i = 0; i < locationArray.length; i++) {
    let lat = locationArray[i].position.coordinates[1];
    let long = locationArray[i].position.coordinates[0];
    promiseArray.push(rp({
      url: `https://api.forecast.io/forecast/108f4a0bc07eac437a8e2aa27962189e/${lat},${long}`,
      json: true
    }));
  }
  let weatherArray = await Promise.all(promiseArray);
  return weatherArray;
}

module.exports = {
  fetchWeather: fetchWeather
};
