import './style.css'
import "@cgcs2000/mapbox-gl/dist/mapbox-gl.css";
import style from "./style.ts"
import { initMap } from './lib.ts'
import mapboxgl from 'mapbox-gl';

const mapRef = document.querySelector<HTMLElement>('#app');

const map = initMap({
  container: mapRef as HTMLElement,
  accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
  zoom: 8,
  center: [122.17616713926242, 30.04654951692227],
  maxBounds: [111.390883, 23.780958, 129.813606, 34.911582],
  pitchWithRotate: false,
  boxZoom: false,
  style: style as mapboxgl.Style,
});

window.map = map;