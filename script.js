// icon style variables
var dotSize = 12, // size of the icon [w, h]
    dotAnchor = 6, // point of the icon which will correspond to marker's location [x, y]
    dotPop = -6; // point from which the popup should open relative to the iconAnchor [x, y]

var redIcon = L.icon({
    iconUrl: 'images/icons/red-icon.png',
    iconSize: [dotSize], 
    iconAnchor: [dotAnchor, dotAnchor], 
    popupAnchor: [0, dotPop], 
})
var greenIcon = L.icon({
    iconUrl: 'images/icons/green-icon.png',
    iconSize: [dotSize], 
    iconAnchor: [dotAnchor, dotAnchor], 
    popupAnchor: [0, dotPop], 
})
var winkIcon = L.icon({
    iconUrl: 'images/icons/wink-icon.png',
    iconSize: [dotSize], 
    iconAnchor: [dotAnchor, dotAnchor], 
    popupAnchor: [0, dotPop], 
})
var botyIcon = L.icon({
    iconUrl: 'images/icons/boty-icon.png',
    iconSize: [dotSize], 
    iconAnchor: [dotAnchor, dotAnchor], 
    popupAnchor: [0, dotPop], 
})

// initialize map
function initMap() {
    //set map view
    var map = L.map("map").setView([40.72261, -73.98242], 14);

    // access token for Mapbox API base map layer
    var accessToken = 'pk.eyJ1IjoibGVhbG8iLCJhIjoiY2xwa2swbHdzMDE1djJqbjA3ZjhxeHY3NCJ9._aMCD7AEOO-RB6R5Gip9OQ';
  
    // add base map layer
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=' + accessToken, {
        attribution: '© Mapbox'
        }).addTo(map);

  
  // add markers
  var red1 = L.marker([40.73364, -73.98383], { icon: redIcon })
            .bindPopup('<div><img src="./images/red/red-1.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      red2 = L.marker([40.72351, -73.98102], { icon: redIcon })
            .bindPopup('<div><img src="./images/red/red-2.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      red3 = L.marker([40.71551, -73.97845], { icon: redIcon })
            .bindPopup('<div><img src="./images/red/red-3.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      red4 = L.marker([40.71340, -73.97120], { icon: redIcon })
            .bindPopup('<div><img src="./images/red/red-4.gif" style="width: 125px; height: auto;"></div>').addTo(map),
      red5 = L.marker([40.70976, -73.99052], { icon: redIcon })
            .bindPopup('<div><img src="./images/red/red-5.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      red6 = L.marker([40.71694, -73.98315], { icon: redIcon })
            .bindPopup('<div><img src="./images/red/red-6.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      red7 = L.marker([40.72528, -73.97781], { icon: redIcon })
            .bindPopup('<div><img src="./images/red/red-7.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      red8 = L.marker([40.71148, -73.98674], { icon: redIcon })
            .bindPopup('<div><img src="./images/red/red-8.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      red9 = L.marker([40.72668, -73.98298], { icon: redIcon })
            .bindPopup('<div><img src="./images/red/red-9.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      red10 = L.marker([40.72665, -73.98225], { icon: redIcon })
            .bindPopup('<div><img src="./images/red/red-10.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      red11 = L.marker([40.72630, -73.98090], { icon: redIcon })
            .bindPopup('<div><img src="./images/red/red-11.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      red12 = L.marker([40.72508, -73.97742], { icon: redIcon })
            .bindPopup('<div><img src="./images/red/red-12.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      red13 = L.marker([40.72073, -73.98130], { icon: redIcon })
            .bindPopup('<div><img src="./images/red/red-13.jpg" style="width: 125px; height: auto;"></div>').addTo(map);
     
  var green1 = L.marker([40.72898, -73.98653], { icon: greenIcon })
            .bindPopup('<div><img src="/images/green/green-1.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      green2 = L.marker([40.72822, -73.97930], { icon: greenIcon })
            .bindPopup('<div><img src="/images/green/green-2.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      green3 = L.marker([40.72738, -73.97915], { icon: greenIcon })
            .bindPopup('<div><img src="/images/green/green-3.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      green4 = L.marker([40.72856, -73.98015], { icon: greenIcon })
            .bindPopup('<div><img src="/images/green/green-4.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      green5 = L.marker([40.72868, -73.98229], { icon: greenIcon })
            .bindPopup('<div><img src="/images/green/green-5.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      green6 = L.marker([40.72916, -73.98337], { icon: greenIcon })
            .bindPopup('<div><img src="/images/green/green-6.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      green7 = L.marker([40.72455, -73.98186], { icon: greenIcon })
            .bindPopup('<div><img src="/images/green/green-7.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      green8 = L.marker([40.72691, -73.98367], { icon: greenIcon })
            .bindPopup('<div><img src="/images/green/green-8.jpg" style="width: 125px; height: auto;"></div>').addTo(map);

  var wink1 = L.marker([40.73583, -73.99133], { icon: winkIcon }) // check coords
            .bindPopup('<div><img src="/images/wink/wink-1.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      wink2 = L.marker([40.72852, -73.98766], { icon: winkIcon }) // check coords
            .bindPopup('<div><img src="/images/wink/wink-2.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      wink3 = L.marker([40.72757, -73.98517], { icon: winkIcon }) // check coords
            .bindPopup('<div><img src="/images/wink/wink-3.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      wink4 = L.marker([40.72184, -73.98896], { icon: winkIcon }) // no picture
            .bindPopup('<div><img src="" style="width: 125px; height: auto;"></div>').addTo(map),
      wink5 = L.marker([40.71600, -73.98038], { icon: winkIcon }) // no picture
            .bindPopup('<div><img src="" style="width: 125px; height: auto;"></div>').addTo(map);

  var boty1 = L.marker([40.73633, -73.98914], { icon: botyIcon })
            .bindPopup('<div><img src="/images/boty/boty-1.jpg" style="width: 125px; height: auto;"></div>').addTo(map),
      boty2 = L.marker([40.73604, -73.98927], { icon: botyIcon })
            .bindPopup('<div><img src="/images/boty/boty-2.jpg" style="width: 125px; height: auto;"></div>').addTo(map);

  // create layer groups for markers
  var red = L.layerGroup([red1, red2, red3, red4, red5, red6, red7, red8, red9, red10, red11, red12, red13]),
      green = L.layerGroup([green1, green2, green3, green4, green5, green6, green7, green8]),
      wink = L.layerGroup([wink1, wink2, wink3, wink4]),
      boty = L.layerGroup([boty1, boty2]);

  // create overlay map with layers
  var overlayMaps = {
    "Red": red,
    "Green": green,
    "Boty": boty,
    "; )": wink
  };

    // Add layer control to the map, expanded
    var layerControl = L.control.layers(null, overlayMaps, { collapsed: false }).addTo(map);

    // Add a title to the layer control panel
    var title = L.DomUtil.create('div', 'leaflet-control-layers-title');
    title.innerHTML = '<h4>Stencil Tags</h4>';
    map.getContainer().querySelector('.leaflet-control-layers-list').insertBefore(title, map.getContainer().querySelector('.leaflet-control-layers-overlays'));

    // Manually set layers as visible
    for (var i in overlayMaps) {
        if (overlayMaps.hasOwnProperty(i)) {
            map.addLayer(overlayMaps[i]);
        }
    }
}

// call the initializeMap function when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    initMap();
});
