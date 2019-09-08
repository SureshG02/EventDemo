const request = require('request');
var rp = require('request-promise');

async function getLocation(helevents) {
  var arrayLength = helevents.length;
  let promiseArray = [];
  for (var i = 0; i < arrayLength; i++) {
    loc = helevents[i].location["@id"];
    promiseArray.push(rp({
      url: `${loc}`,
      json: true
    }));
  }

  let locationArray = await Promise.all(promiseArray);
  return locationArray;
}

module.exports = {
  getLocation: getLocation
};