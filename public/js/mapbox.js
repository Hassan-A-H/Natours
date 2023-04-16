/* eslint-disable*/

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiaGFzc29uYS05OCIsImEiOiJjbGYwdTE0YjcwMjFhM3psanZmZHB0bWFyIn0.KXd8o1zwL2hZl_xe2o3MFw';

  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/hassona-98/clf08pzs5000201mr451gdcz1'
    // scrollZoom: false // style URL
    // interactive: false
    // center: [-74.5, 40], // starting position [lng, lat]
    // zoom: 9 // starting zoom
  });

  // mapboxgl.accessToken =
  //   'pk.eyJ1IjoiaGFzc29uYS05OCIsImEiOiJjbGYwdTE0YjcwMjFhM3psanZmZHB0bWFyIn0.KXd8o1zwL2hZl_xe2o3MFw';

  // var map = new mapboxgl.Map({
  //   container: 'map',
  //   style: 'mapbox://styles/hassona-98/clf08pzs5000201mr451gdcz1'
  // });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker(el, {
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extends map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
