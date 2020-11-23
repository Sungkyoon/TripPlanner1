import mapboxgl from 'mapbox-gl'

export const iconURLS = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
}

const buildMarker = (activity, latLong) => {
  if (!iconURLS.hasOwnProperty(activity)){
    activity = 'activities'
  }
  const markerDom = document.createElement('div')
markerDom.style.width = "32px";
markerDom.style.height = "39px";
markerDom.style.backgroundImage = `url(${iconURLS[activity]})`

return new mapboxgl.Marker(markerDom).setLngLat(latLong)
}


export default buildMarker
