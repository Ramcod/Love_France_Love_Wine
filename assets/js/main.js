function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {
            lat: 45.764042,
            lng: 4.835659,
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 46.108829, lng: 4.749740},//Beaujolais//
        { lat: 44.837788, lng: -0.579180 },//Bordeaux//
        { lat: 47.278111, lng: 4.994210 },//Burgundy//
        { lat: 43.508530, lng: 2.346340 },//Languedoc-Rousillon//
        { lat: 47.355942, lng: -0.859410},//Loire-Valley//
        { lat: 46.892181, lng: 6.729400 }//Provence//
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
