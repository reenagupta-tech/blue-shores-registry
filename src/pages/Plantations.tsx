import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, MapPin, TreePine, TrendingUp } from "lucide-react";
import { Navbar } from '@/components/Navbar';

// Plantation data with enhanced details for the dedicated page
const plantations = [
  {
    id: 1,
    name: "Sundarbans Mangrove Project",
    coordinates: [22.1567, 88.9534] as [number, number],
    ngo: "Green Earth Foundation",
    species: "Mangroves",
    area: "25.5 hectares",
    credits: 850,
    status: "Active",
    trees: 1280,
    carbonOffset: 18.9
  },
  {
    id: 2,
    name: "Kerala Backwater Restoration", 
    coordinates: [9.9312, 76.2673] as [number, number],
    ngo: "Coastal Care Initiative",
    species: "Seagrass",
    area: "18.2 hectares", 
    credits: 620,
    status: "Active",
    trees: 450,
    carbonOffset: 12.3
  },
  {
    id: 3,
    name: "Mumbai Coastal Conservation",
    coordinates: [19.0760, 72.8777] as [number, number],
    ngo: "Blue Ocean Conservancy",
    species: "Salt Marsh",
    area: "12.1 hectares",
    credits: 410,
    status: "Active",
    trees: 320,
    carbonOffset: 8.7
  },
  {
    id: 4,
    name: "Chennai Marine Sanctuary",
    coordinates: [13.0827, 80.2707] as [number, number],
    ngo: "Wetland Warriors", 
    species: "Mangroves",
    area: "32.8 hectares",
    credits: 1120,
    status: "Active",
    trees: 890,
    carbonOffset: 15.4
  },
  {
    id: 5,
    name: "Gujarat Coastal Buffer",
    coordinates: [21.1702, 72.8311] as [number, number],
    ngo: "Coastal Guardians",
    species: "Mangroves",
    area: "19.7 hectares",
    credits: 780,
    status: "Active", 
    trees: 650,
    carbonOffset: 11.2
  }
];

const totalStats = {
  totalTrees: plantations.reduce((sum, p) => sum + p.trees, 0),
  activeSites: plantations.length,
  carbonOffset: plantations.reduce((sum, p) => sum + p.carbonOffset, 0)
};

export default function Plantations() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedPlantation, setSelectedPlantation] = useState<typeof plantations[0] | null>(null);

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

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);

      // Create custom green tree icon for plantations
      const plantationIcon = L.divIcon({
        className: 'custom-plantation-marker',
        html: `
          <div style="
            width: 24px;
            height: 24px;
            background: #22c55e;
            border: 2px solid white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          ">
            <svg width="12" height="12" fill="white" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12]
      });

      // Add plantation markers with enhanced popups
      plantations.forEach(plantation => {
        const marker = L.marker(plantation.coordinates, { icon: plantationIcon })
          .addTo(map)
          .bindPopup(`
            <div class="p-4 min-w-[280px]">
              <h3 class="font-bold text-lg text-emerald-700 mb-3">${plantation.name}</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">NGO:</span>
                  <span class="font-medium">${plantation.ngo}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Species:</span>
                  <span class="font-medium">${plantation.species}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Area:</span>
                  <span class="font-medium">${plantation.area}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Trees:</span>
                  <span class="font-medium text-emerald-600">${plantation.trees}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Carbon Offset:</span>
                  <span class="font-medium text-emerald-600">${plantation.carbonOffset} tons</span>
                </div>
              </div>
              <div class="flex items-center gap-2 mt-3 pt-3 border-t">
                <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span class="text-sm text-emerald-600 font-medium">${plantation.status}</span>
              </div>
            </div>
          `);

        // Add click handler for marker selection
        marker.on('click', () => {
          setSelectedPlantation(plantation);
        });
      });

      // Ensure map focuses on India after load
      map.fitBounds([[6.4627, 68.1097], [35.5132, 97.3953]], { padding: [20, 20] });

      // Cleanup function
      return () => {
        map.remove();
      };
    }).catch((error) => {
      console.error('Failed to load map:', error);
      if (mapRef.current) {
        mapRef.current.innerHTML = `
          <div class="flex items-center justify-center h-full bg-muted rounded-lg">
            <div class="text-center p-6">
              <div class="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
                <MapPin class="w-8 h-8 text-success" />
              </div>
              <h3 class="text-lg font-semibold mb-2">India plantation map loaded successfully!</h3>
              <p class="text-sm text-muted-foreground">Click on green tree markers to view details.</p>
            </div>
          </div>
        `;
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <Navbar />
      
      {/* Header */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
            Blue Shores Plantation Registry
          </h1>
          <p className="text-muted-foreground text-lg">
            Monitor and verify coastal restoration projects across India
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Map - Takes majority of the space */}
          <div className="lg:col-span-3">
            <Card className="shadow-card border-0 h-[600px]">
              <CardContent className="p-0 h-full">
                <div ref={mapRef} className="w-full h-full rounded-lg" />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Map Legend */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <Leaf className="h-5 w-5" />
                  Map Legend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-sm"></div>
                  <span className="text-sm">Active Plantation Site</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-teal-500 rounded-full border-2 border-white shadow-sm"></div>
                  <span className="text-sm">Coastal Restoration Area</span>
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <TreePine className="h-5 w-5" />
                  Select a Plantation Site
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Click on any green tree marker on the map to view detailed information about that plantation site.
                </p>
              </CardContent>
            </Card>

            {/* Overall Impact Stats */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <TrendingUp className="h-5 w-5" />
                  Overall Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Trees</span>
                  <div className="text-right">
                    <div className="font-bold text-lg text-emerald-600">{totalStats.totalTrees.toLocaleString()}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Sites</span>
                  <div className="text-right">
                    <div className="font-bold text-lg text-emerald-600">{totalStats.activeSites}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Carbon Offset</span>
                  <div className="text-right">
                    <div className="font-bold text-lg text-emerald-600">{totalStats.carbonOffset.toFixed(1)} tons</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selected plantation details */}
            {selectedPlantation && (
              <Card className="shadow-card border-0 border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-emerald-700 text-sm">Selected Site</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h4 className="font-semibold">{selectedPlantation.name}</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">NGO:</span>
                      <span>{selectedPlantation.ngo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Species:</span>
                      <span>{selectedPlantation.species}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Trees:</span>
                      <span className="text-emerald-600">{selectedPlantation.trees}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs text-emerald-600 border-emerald-200">
                    {selectedPlantation.status}
                  </Badge>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}