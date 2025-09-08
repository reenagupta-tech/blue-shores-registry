import { useEffect, useRef } from 'react';

// Plantation data across India
const plantations = [
  {
    id: 1,
    name: "Sundarbans Mangrove Project",
    coordinates: [22.1567, 88.9534] as [number, number],
    ngo: "Green Earth Foundation",
    species: "Mangroves",
    area: "25.5 hectares",
    credits: 850,
    status: "Active"
  },
  {
    id: 2,
    name: "Kerala Backwater Restoration", 
    coordinates: [9.9312, 76.2673] as [number, number],
    ngo: "Coastal Care Initiative",
    species: "Seagrass",
    area: "18.2 hectares", 
    credits: 620,
    status: "Active"
  },
  {
    id: 3,
    name: "Mumbai Coastal Conservation",
    coordinates: [19.0760, 72.8777] as [number, number],
    ngo: "Blue Ocean Conservancy",
    species: "Salt Marsh",
    area: "12.1 hectares",
    credits: 410,
    status: "Active"
  },
  {
    id: 4,
    name: "Chennai Marine Sanctuary",
    coordinates: [13.0827, 80.2707] as [number, number],
    ngo: "Wetland Warriors", 
    species: "Mangroves",
    area: "32.8 hectares",
    credits: 1120,
    status: "Active"
  }
];

export function IndiaMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Load Leaflet dynamically to avoid SSR issues
    import('leaflet').then((L) => {
      // Clear any existing map
      mapRef.current!.innerHTML = '';

      // Create the map with proper India bounds
      const map = L.map(mapRef.current!, {
        center: [20.5937, 78.9629], // Center of India
        zoom: 5,
        zoomControl: true,
        maxBounds: [[6.4627, 68.1097], [35.5132, 97.3953]], // India bounds
        maxBoundsViscosity: 1.0
      });

      // Add CartoDB Positron tiles for better contrast
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      // Ensure map focuses on India after load
      map.fitBounds([[6.4627, 68.1097], [35.5132, 97.3953]], { padding: [20, 20] });

      // Add plantation markers
      plantations.forEach(plantation => {
        const marker = L.marker(plantation.coordinates as [number, number])
          .addTo(map)
          .bindPopup(`
            <div class="p-3">
              <h3 class="font-semibold text-green-700 mb-2">${plantation.name}</h3>
              <p><strong>NGO:</strong> ${plantation.ngo}</p>
              <p><strong>Species:</strong> ${plantation.species}</p>
              <p><strong>Area:</strong> ${plantation.area}</p>
              <p><strong>Credits:</strong> ${plantation.credits} BlueCarbon Tokens</p>
              <div class="flex items-center gap-2 mt-2">
                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                <span class="text-xs text-green-600 font-medium">${plantation.status}</span>
              </div>
            </div>
          `);
      });

      // Cleanup function
      return () => {
        map.remove();
      };
    }).catch((error) => {
      console.error('Failed to load map:', error);
      if (mapRef.current) {
        mapRef.current.innerHTML = `
          <div class="flex items-center justify-center h-full bg-gray-100 rounded-lg">
            <div class="text-center p-6">
              <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-700 mb-2">Interactive Map</h3>
              <p class="text-sm text-gray-500 mb-4">Blue Carbon Plantation Locations Across India</p>
              <div class="grid grid-cols-2 gap-4 text-xs">
                ${plantations.map(p => `
                  <div class="bg-white p-2 rounded border">
                    <div class="font-medium text-green-700">${p.name}</div>
                    <div class="text-gray-600">${p.ngo}</div>
                    <div class="text-green-600">${p.credits} tokens</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      }
    });
  }, []);

  return (
    <div className="h-96 w-full rounded-lg overflow-hidden bg-gray-50">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}