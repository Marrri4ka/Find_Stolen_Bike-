import { StolenBike}  from './stolenbike.js';
$(document).ready(function() {
  $('#bikeLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");


    let stolenBike = new StolenBike();  // create instance of WeatherService class
    let promise = stolenBike.findStolenBike(city);  // call the instance method and pass in user input

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showSerial').text(`The serial in ${city} is ${body.bikes.serial}%`);
      $('.showYear').text(`The year  is ${body.bikes.year} `);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
