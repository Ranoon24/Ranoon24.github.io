function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 31.2001, lng: 29.9187};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Alexandria, Egypt' // Title Location
    });
}