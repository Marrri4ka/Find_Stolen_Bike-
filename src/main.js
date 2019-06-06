import { StolenBike}  from './stolenbike.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



$(document).ready(function() {

    $('#open').click(function(){
      $('.overlay').slideDown();

    });

    $('.closebtn').click(function(){
      $('.overlay').slideUp();

    });
      // document.getElementById("myOverlay").style.display = "block";


  // function closeSearch() {
  //     document.getElementById("myOverlay").style.display = "none";
  // }


    $('.formBike').submit(function(event) {
      event.preventDefault();
      let page = $('.pagination').val();
      let city = $('#location').val();
      let manufacturer =$('#manufacturerSearch').val();
      $("#pagenumber").text(page);
      let stolenBike = new StolenBike();  // create instance of WeatherService class
      let promise = stolenBike.findStolenBike(city,page,manufacturer);  // call the instance method and pass in user input
      promise.then(function(response) {
      let body = JSON.parse(response);
      let myday = new Date() - ((24*60*60*1000)*7);
      let weekago = new Date(myday);

    $('.showTitle').html("");
      for (let i=0; i<body.bikes.length; i++)
      {
        if ((new Date(body.bikes[i].date_stolen * 1000)) >weekago ){
          $('.showTitle').append("<li>"+ new Date(body.bikes[i].date_stolen * 1000) + "</li>");
          }
        }

      }, function(error) {

      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

});



    $('.manufacturer').submit(function(event) {
      event.preventDefault();
      let page = $('.pagination').val();
      let city = $('#location').val();
      let manufacturer =$('#manufacturerSearch').val();
      $("#pagenumber").text(page);
      let stolenBike = new StolenBike();  // create instance of WeatherService class
      let promise = stolenBike.findStolenBike(city,page,manufacturer);  // call the instance method and pass in user input
      promise.then(function(response) {
      let body = JSON.parse(response);
      for (let i=0; i<body.bikes.length; i++)
      {
          $('.showManufacture').append("<li>"+ body.bikes[i].title + "</li>");
        }

      }, function(error) {

      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

});

  $('#showColor').click(function() {
    let page = $('.pagination').val();
    let city = $('#location').val();
    let manufacturer =$('#manufacturerSearch').val();
  $("#pagenumber").text(page);
    let stolenBike = new StolenBike();  // create instance of WeatherService class
    let promise = stolenBike.findStolenBike(city,page,manufacturer);  // call the instance method and pass in user input
    promise.then(function(response) {
    let body = JSON.parse(response);
    let yearAgo = new Date().getFullYear() - 1;

  $('.showTitle').html("");
  let colorRed = 0;
  let colorBlue = 0;
  for (let i =0; i<body.bikes.length; i ++)
  {
    if(new Date(body.bikes[i].date_stolen * 1000)>yearAgo)
    {
      if(body.bikes[i].frame_colors.includes("Red"))
      {
        colorRed +=1;
      }
      if(body.bikes[i].frame_colors.includes("Blue"))
      {
        colorBlue+=1;
      }

    }

  }

  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [ "Red", "Blue"],
    datasets: [{
      backgroundColor: [

        "#e74c3c",
        "#34495e"
      ],
      data: [ colorRed,  colorBlue]
    }]
  }
});


    $('#result').text(yearAgo);
    }, function(error) {

    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

});







});
