import mapboxgl from "mapbox-gl";
import buildMarker from './marker.js'

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VuZ2t5b29uIiwiYSI6ImNrZndvdHB6dDEwY3gyc285NDRscWVlNWcifQ.w-B9XvlN8H0ch9aV3uLo1A';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDom = document.createElement('div')
// markerDom.style.width = "32px";
// markerDom.style.height = "39px";
// markerDom.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg)";

// new mapboxgl.Marker(markerDom).setLngLat([-74.009, 40.705]).addTo(map);

const marker = buildMarker('hotels', [-74.009151, 40.705086])
marker.addTo(map)

console.log('Running')
