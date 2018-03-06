// const serverUrl = 'http://localhost:3000/beens/'
// // maybe I don't need been at the end of the address??
// var isUserEditing = false
// var itemUnderEdit = {}
//
// var countryList = document.body.querySelector('ol')
// var createForm = document.body.querySelector('.aside-top')
//
// countryList.addEventListener('submit', handlePost)
// // createForm.addEventListener('submit', handleUpdate)
//
// window.onload = loadData
//
// function handlePost(e) {
//     e.preventDefault()
//
//     const countryInput = document.querySelector('. aside-top input[name="name"]').value
//
//     // Use fetch to make a POST request here
//     // Adding, connecting backend
//     fetch(serverUrl, {
//         method: 'POST',
//         header: {
//             'content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: countryInput
//         })
//     })
//       .then(res => console.log(res))
//       .catch(err => console.log(err))
// }
//
//
// // function handleDelete() {
// //
// // }
// //
// // function handleUpdate() {
// //
// // }
//
// function loadData() {
//     countryList.innerHTML = ''
//     fetch(serverUrl).then(res => res.json())
//         .then(beens => {
//               beens.forEach(been => {
//                   const listCountryContainer = document.createElement('li')
//                   const listCountryLink = document.createElement('a')
//                   listCountryLink.setAttribute('href', been.url)
//                   listCountryLink.innerHTML = been.name
//                   listCountryContainer.appendChild(listCountryLink)
//               })
//         })
// }




function initMap() {

   var map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 38.889939, lng: -77.00905},
         zoom: 13
   })
   // var infowindow = new google.maps.InfoWindow()
   var marker = new google.maps.Marker({
        map: map,
        position: {lat: 40.737325, lng: -73.991105}, // pin on the GA address
        title: 'Hello from GA!'
   })
}

marker.setMap(map)
