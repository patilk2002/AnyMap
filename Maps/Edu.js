

let map, infoWindow;
// function initMap() {
//   new google.maps.Map(document.getElementById("map"), {
//     mapId: "4f458e0d64c392d6",
//     center: { lat: 19.199785295564922, lng: 73.19290347632486 },
//     zoom: 18,
//   });
// }



function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "aa7db47704068366",
    center: { lat: 19.199785295564922, lng: 73.19290347632486 },
    zoom: 18,
  });

    //19.19966072246815, 73.19311334782242
  new google.maps.Marker({
    position: { lat: 19.141176, lng: 72.863383 },
    map,
    title: "Hello World!",
  });

  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = " Locate Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

//34.667136067396456, 135.42917838710045
//19.199785295564922, 73.19290347632486
