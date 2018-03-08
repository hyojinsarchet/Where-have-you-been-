// import map from google map api
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
                radius: 16093,
                fillColor: '#AA0000'
            })
            circle.bindTo('center', marker, 'position')
        } else {
          alert('Geocode was not successful for the following reason: ' + status)
        }
    })
}

google.maps.event.addDomListener(window, "load", initMap);

// * read/learned about 'google maps api', 'geocoder' from these pages below.
// https://developers.google.com/maps/documentation/javascript/
// https://stackoverflow.com/questions/36007724/add-marker-on-google-maps
// https:developers.google.com/maps/documentation/javascript/geocoding

// * learned about 'how to display input value' from the page below.
//https:stackoverflow.com/questions/19443834/how-to-display-input-back-to-the-user-on-an-html-page
