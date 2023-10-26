let map;

async function initMap() {

  const position = { lat: -8.175507, lng: 115.016893 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "66c05054f155f714",
  });
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "RESTAURANT",
  });
}

initMap();