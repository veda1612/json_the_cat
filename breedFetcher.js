const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const domain = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(domain, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      errMessage = `The breed ${breedName} is not found`;
      callback(errMessage, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };