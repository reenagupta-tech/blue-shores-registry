import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Download, Calendar, MapPin } from "lucide-react";

// Dummy image data
const dummyImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
    title: "Mangrove Plantation - Site A",
    description: "Initial planting phase with 500 mangrove saplings",
    location: "Sundarbans, West Bengal",
    date: "2024-01-15",
    photographer: "Dr. Maya Singh",
    ngo: "Green Earth Foundation"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=400&h=300&fit=crop",
    title: "Coastal Restoration Progress",
    description: "6-month growth monitoring of seagrass beds",
    location: "Kerala Backwaters",
    date: "2024-02-20", 
    photographer: "Raj Patel",
    ngo: "Coastal Care Initiative"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop",
    title: "Salt Marsh Recovery",
    description: "Successful restoration of degraded salt marsh ecosystem",
    location: "Mumbai Coast",
    date: "2024-03-10",
    photographer: "Anita Sharma",
    ngo: "Blue Ocean Conservancy"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400&h=300&fit=crop",
    title: "Marine Sanctuary Monitoring",
    description: "Underwater documentation of seagrass health",
    location: "Chennai Marine Sanctuary",
    date: "2024-03-25",
    photographer: "Dr. Suresh Kumar",
    ngo: "Wetland Warriors"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
    title: "Community Engagement",
    description: "Local volunteers participating in mangrove planting",
    location: "Gujarat Coastal Buffer",
    date: "2024-04-05",
    photographer: "Priya Mehta",
    ngo: "Coastal Guardians"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    title: "Aerial Survey Documentation",
    description: "Drone mapping of restored coastal area",
    location: "Sundarbans Extension",
    date: "2024-04-12",
    photographer: "Kartik Roy",
    ngo: "Green Earth Foundation"
  }
];

interface ImageGalleryProps {
  requestId?: number;
  maxImages?: number;
}

export function ImageGallery({ requestId, maxImages }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<typeof dummyImages[0] | null>(null);
  
  // Filter or limit images based on props
  const images = maxImages ? dummyImages.slice(0, maxImages) : dummyImages;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <Card key={image.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => setSelectedImage(image)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-sm mb-2">{image.title}</h4>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{image.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <Badge variant="outline" className="text-xs">
                    <MapPin className="h-3 w-3 mr-1" />
                    {image.location}
                  </Badge>
                  <span className="text-muted-foreground flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(image.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Image Detail Modal */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">{selectedImage.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Description</h4>
                  <p className="text-sm text-muted-foreground">{selectedImage.description}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Details</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span>{selectedImage.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span>{new Date(selectedImage.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Photographer:</span>
                      <span>{selectedImage.photographer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">NGO:</span>
                      <span>{selectedImage.ngo}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Image
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}