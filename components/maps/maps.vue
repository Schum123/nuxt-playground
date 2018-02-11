<template>
    <div class="google-map" :id="mapName"></div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'google-map',
  props: ['name', 'longitude', 'latitude'],
  data () {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [{
        latitude: this.latitude,
        longitude: this.longitude
      }],
      map: null,
      bounds: null,
      markers: [],
    }
  },
  mounted: function () {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName)
    const mapCentre = this.markerCoordinates[0]
    const options = {
      zoom: 13,
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    }
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({ 
        position,
        map: this.map
      });
    this.markers.push(marker)
    });
  }
};
</script>
