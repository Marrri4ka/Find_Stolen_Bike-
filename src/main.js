import { StolenBike}  from './stolenbike.js';
$(document).ready(function() {
  $('#bikeLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");


    let stolenBike = new StolenBike();  // create instance of WeatherService class
    let promise = stolenBike.findStolenBike(city);  // call the instance method and pass in user input

    promise.then(function(response) {
      let body = JSON.parse(response);
      var date = new Date(body.bikes[0].date_stolen * 1000);


      for (let i=0; i<body.bikes.length; i++)
      {
          $('.showTitle').append("<li>"+ body.bikes[i].frame_colors + "</li>");


    }


    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
