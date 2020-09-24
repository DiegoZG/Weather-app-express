"use strict";

var request = require('request');

var forecast = function forecast(latitude, longitude, callback) {
  var url = "http://api.weatherstack.com/current?access_key=1153e1fb0c0cb8f91b86df4bfc806a98&query=" + latitude + "," + longitude + "&units=f";
  request({
    url: url,
    json: true
  }, function (error, _ref) {
    var body = _ref.body;

    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location!');
    } else {
      callback(undefined, "".concat(body.current.weather_descriptions[0], ". It is currently ").concat(body.current.temperature, " degrees out. \n            It feels like ").concat(body.current.feelslike, " degrees out. The humidity is ").concat(body.current.humidity, "%. Y JUAN ES UN IMBECIL DE MIERDA"));
    }
  });
};

module.exports = forecast;