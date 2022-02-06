function popUp() {
  const inpObj = document.getElementById("id");
  if (!inpObj.checkValidity()) {
    document.getElementById("message").innerHTML = "Please do not proceed to the Wine page";
  } else {
    document.getElementById("message").innerHTML = "Welcome to the site";
  }
}


// Google maps
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: {
      lat: 45.764042,
      lng: 4.835659,
    }
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [{
      lat: 46.108829,
      lng: 4.749740
    }, //Beaujolais//
    {
      lat: 44.837788,
      lng: -0.579180
    }, //Bordeaux//
    {
      lat: 47.278111,
      lng: 4.994210
    }, //Burgundy//
    {
      lat: 43.508530,
      lng: 2.346340
    }, //Languedoc-Rousillon//
    {
      lat: 47.355942,
      lng: -0.859410
    }, //Loire-Valley//
    {
      lat: 43.949318,
      lng: 4.805528
    } //Provence//
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
}
$(document).ready(function () {
  // Carousel with a timed interval
  $("#myCarousel").carousel({
    interval: 6000
  });

  // Carousel Indicators- arrows
  $(".item1").click(function () {
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function () {
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function () {
    $("#myCarousel").carousel(2);
  });

  // Carousel Controls
  $(".carousel-control-prev").click(function () {
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function () {
    $("#myCarousel").carousel("next");
  });
});

