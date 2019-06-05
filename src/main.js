import { StolenBike}  from './stolenbike.js';
$(document).ready(function() {
    $('.formBike').submit(function(event) {
  event.preventDefault();
    let page = $('.pagination').val();
    console.log(page);

  // $('#bikeLocation').click(function() {
    let city = $('#location').val();
    // $('#location').val("");


    $("#pagenumber").text(page);


    let stolenBike = new StolenBike();  // create instance of WeatherService class
    let promise = stolenBike.findStolenBike(city,page);  // call the instance method and pass in user input

    promise.then(function(response) {
      let body = JSON.parse(response);

      let myday = new Date() - ((24*60*60*1000)*7);
      let weekago = new Date(myday);
      for (let i=0; i<body.bikes.length; i++)
      {
        if ((new Date(body.bikes[i].date_stolen * 1000)) >weekago ){

          $('.showTitle').append("<li>"+ new Date(body.bikes[i].date_stolen * 1000) + "</li>");

}
    }
  $('#result').text(weekago);
    }, function(error) {

      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  // });




});
});
