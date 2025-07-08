// components/ProjectMap.js
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix: Default Leaflet icons (removes "?" icon issue)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function ProjectMap({ projects }) {
  if (!projects || projects.length === 0) return null;

  const defaultPosition = projects[0]?.coordinates || { lat: 20.5937, lng: 78.9629 };

  return (
    <MapContainer center={[defaultPosition.lat, defaultPosition.lng]} zoom={11} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {projects.map((project, i) => {
        const { lat, lng } = project.coordinates || {};
        if (!lat || !lng) return null;

        return (
          <Marker
            key={i}
            position={[lat, lng]}
          >
            
            <Popup>
              <strong>{project.name}</strong><br />
              {project.price}<br />
              {project.builder}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}