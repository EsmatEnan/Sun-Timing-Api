 //Refresh button
 $(document).on("click", "#refresh", function() {

  document.getElementById("search").className ='show';

 })

 //Submit button
$(document).on("click", "#button1", function() {
   lat = document.getElementById("lat").value;
  lon = document.getElementById("lon").value;
 console.log(lat)
  $.ajax({

    url:'https://api.sunrise-sunset.org/json?lat=' + lat +'&lng=' + lon,
    dataType: 'json',
    type: 'GET',
  }).success(function(data) {

  place =data.results;

    PopulateList(place);

    });

  });

  //Populate the data

  function PopulateList(place) {

 $('#sunrise').text('Sun Rise: '+ place.sunrise);
 $('#sunset').text('Sun Set: ' +  place.sunset);
 $('#duration').text('Day Length: ' +  place.day_length);
 $('#solarnoon').text('Solar Noon: '+place.solar_noon);

//refreshing the list
    $('#latLonValue').listview('refresh');
    }

    //Map button
    $(document).on("click", "#map-btn", function() {
      lat = document.getElementById("lat").value;
      lon = document.getElementById("lon").value;
      var element = $('#mapPage');
      element.height(element.height() - 42);
      var map = L.map('map').setView([lat, lon], 13);
      // add an OpenStreetMap tile layer
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href=”http://osm.org/copyright”>OpenStreetMap</a> contributors'
      }).addTo(map);

      window.setTimeout(function (){
        map.invalidateSize();
      },1000);

      markers = new L.marker([lat,lon])
        .addTo(map);


    });