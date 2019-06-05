import { StolenBike}  from './stolenbike.js';
$(document).ready(function() {
  $('#bikeLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");


    let stolenBike = new StolenBike();  // create instance of WeatherService class
    let promise = stolenBike.findStolenBike(city);  // call the instance method and pass in user input

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
  });



});



//
//       for (let i = 0; i < body.bikes.length; i++) {
//         let dateStolen = new Date(0);
//         dateStolen.setUTCSeconds(body.bikes[i].date_stolen);
//
//         let weekAgo = new Date();
//         weekAgo.setDate(weekAgo.getDate() - 7);
//
//         if (dateStolen > weekAgo) {
//           myBikeText += " " + body.bikes[i].serial;
//         }
//       }
//       $('.showSerial').text(myBikeText);
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error.message}`);
//     });
//   });
//
// });
