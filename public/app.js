// function initMap() {
//    var map = new google.maps.Map(document.getElementById('map'), {
//          center: {lat: 38.889939, lng: -77.00905},
//          zoom: 10
//    })
//    // var infowindow = new google.maps.InfoWindow()
//    var marker = new google.maps.Marker({
//         map: map,
//         position: {lat: 38.904873, lng: -77.034028}, // pin on the GA address
//         title: 'Hello from GA!'
//    })
//
//    var icon1 = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
//    var icon2 = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
//
//    marker.addListener('mouseover', function() {
//       this.setIcon(icon2);
//    })
//    marker.addListener('mouseout', function() {
//       this.setIcon(icon1);
//    })
// }
//
// marker.setMap(map)

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.904873, lng: -77.034028},
        zoom: 6
    })
    var geocoder = new google.maps.Geocoder()
    var inputBox = document.getElementById('address')
    var countryList = document.getElementById('countryList')

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map)

        var li = document.createElement('li')
        countryList.appendChild(li)
        li.innerHTML = li.innerHTML + inputBox.value
    });
    geocodeAddress(geocoder,map)
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value
    geocoder.geocode({
        'address': address
    }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location)
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            })
            var circle = new google.maps.Circle({
                map: marker.getMap(),
                radius: 16093, // 10 miles in metres
                fillColor: '#AA0000'
            })
            circle.bindTo('center', marker, 'position')
        } else {
          alert('Geocode was not successful for the following reason: ' + status)
        }
    })
}

google.maps.event.addDomListener(window, "load", initMap);

// * read and adopted some codes about 'geocoder' from these pages below.
// https://stackoverflow.com/questions/36007724/add-marker-on-google-maps
// https:developers.google.com/maps/documentation/javascript/geocoding

// * learned about 'how to display input value' from the page below.
//https:stackoverflow.com/questions/19443834/how-to-display-input-back-to-the-user-on-an-html-page
