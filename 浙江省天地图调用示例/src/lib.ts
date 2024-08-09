import { Map } from '@cgcs2000/mapbox-gl';

export function initMap(option: mapboxgl.MapboxOptions): mapboxgl.Map {
  if (!(option.container instanceof HTMLElement)) {
    throw new Error('container is not HTMLElement');
  }
  const map = new Map(option);

  return map;
}
