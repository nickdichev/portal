'use client'

import { useRef, useEffect } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

import { Stockist } from '@/models/Stockist'

export default function StockistsMap({ stockists }: { stockists: Stockist[] }) {
  const mapContainer = useRef(null)
  const map = useRef<maplibregl.Map | null>(null)

//   const handlePinClick = (stockist) => {
//     setSelectedStockist(stockist)
//     if (stockistRefs.current[stockist.id]) {
//       stockistRefs.current[stockist.id].scrollIntoView({ behavior: 'smooth', block: 'center' })
//     }
//   }

  useEffect(() => {
    if (map.current) return

    map.current = new maplibregl.Map({
      style: 'https://tiles.openfreemap.org/styles/liberty',
      center: [-98.5795, 39.8283],
      zoom: 2.75,
      container: 'map',
    })

    map.current.on('load', () => {
      // Add a new source and layer for the markers
      map.current!.addSource('cities', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-122.4194, 37.7749] }, properties: { name: 'San Francisco' } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-117.1611, 32.7157] }, properties: { name: 'San Diego' } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-74.0060, 40.7128] }, properties: { name: 'New York' } },
          ]
        }
      });

      map.current!.addLayer({
        id: 'cities-layer',
        type: 'circle',
        source: 'cities',
        paint: {
          'circle-radius': 3,
          'circle-color': 'blue'
        }
      });

      // Add popup on click
      map.current!.on('click', 'cities-layer', (e) => {
        if (!e.features || e.features.length === 0) return;
        const feature = e.features[0];
        if (feature.geometry.type !== 'Point') return;

        const coordinates = feature.geometry.coordinates.slice();
        const name = feature.properties?.name;

        if (coordinates && name) {
          new maplibregl.Popup()
            .setLngLat(coordinates as [number, number])
            .setHTML(`<h3>${name}</h3>`)
            .addTo(map.current!);
        }
      });

      // Change cursor to pointer when hovering over a marker
      map.current!.on('mouseenter', 'cities-layer', () => {
        map.current!.getCanvas().style.cursor = 'pointer';
      });

      map.current!.on('mouseleave', 'cities-layer', () => {
        map.current!.getCanvas().style.cursor = '';
      });
    });
  }, [])

  return <div id="map" style={{ width: '100%', height: '500px' }}></div>
}
