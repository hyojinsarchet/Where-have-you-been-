function initMap() {
   var map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 38.889939, lng: -77.00905},
         zoom: 10
   })
   // var infowindow = new google.maps.InfoWindow()
   var marker = new google.maps.Marker({
        map: map,
        position: {lat: 38.904873, lng: -77.034028}, // pin on the GA address
        title: 'Hello from GA!'
   })

   var icon1 = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
   var icon2 = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";

   marker.addListener('mouseover', function() {
      this.setIcon(icon2);
   })
   marker.addListener('mouseout', function() {
      this.setIcon(icon1);
   })
}

marker.setMap(map)
