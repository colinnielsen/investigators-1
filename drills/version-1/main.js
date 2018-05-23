console.log("hello");

function initMap() {
  var galvanize = {lat: 39.7576570, lng: -105.0069530};

  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: galvanize});

  var marker = new google.maps.Marker({position: galvanize, map: map, label: 'Galvanize' });

}
