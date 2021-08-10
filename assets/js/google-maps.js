function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 31.2242387, lng: 29.8848462};

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