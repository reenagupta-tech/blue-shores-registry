import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { ImageGallery } from "@/components/ImageGallery";
import { DocumentViewer } from "@/components/DocumentViewer";
import { 
  Database, 
  Search, 
  Filter,
  Download,
  Eye,
  Calendar,
  MapPin,
  Coins,
  Camera,
  FileText
} from "lucide-react";

const registryData = [
  {
    id: "BC001",
    projectName: "Sundarbans Mangrove Project",
    location: "West Bengal",
    ngo: "Green Earth Foundation",
    area: "25.5 hectares",
    species: "Mangroves",
    carbonStored: 850,
    verificationDate: "2024-01-15",
    status: "Verified",
    blockchainHash: "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c"
  },
  {
    id: "BC002", 
    projectName: "Kerala Backwater Restoration",
    location: "Kerala",
    ngo: "Coastal Care Initiative",
    area: "18.2 hectares",
    species: "Seagrass",
    carbonStored: 620,
    verificationDate: "2024-01-10",
    status: "Verified",
    blockchainHash: "0x8g0fade2d1e58b8bg67bc5fbe80gade2d1e58b8bg67bc5fbe8d3d"
  },
  {
    id: "BC003",
    projectName: "Mumbai Coastal Conservation", 
    location: "Maharashtra",
    ngo: "Blue Ocean Conservancy",
    area: "12.1 hectares",
    species: "Salt Marsh",
    carbonStored: 410,
    verificationDate: "2024-01-08",
    status: "Verified",
    blockchainHash: "0x9h1gade3e2f69c9ch78cd6gcf91hade3e2f69c9ch78cd6gcf9e4e"
  }
];

export default function Registry() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Blue Carbon Registry
            </h1>
            <p className="text-muted-foreground mt-2">
              Immutable blockchain records of verified carbon projects
            </p>
          </div>
          <Button className="gap-2 bg-gradient-to-r from-primary to-secondary">
            <Download className="w-4 h-4" />
            Export Registry
          </Button>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <Tabs defaultValue="registry" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="registry">Registry</TabsTrigger>
              <TabsTrigger value="images">Documentation</TabsTrigger>
              <TabsTrigger value="documents">Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="registry" className="space-y-6">
              {/* Search and Filters */}
              <Card className="shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        placeholder="Search by project name, NGO, or location..."
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Filter className="w-4 h-4" />
                      Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Registry Table */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Verified Carbon Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Project ID</th>
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Project Name</th>
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Location</th>
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">NGO</th>
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Carbon (kg CO₂)</th>
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {registryData.map((project) => (
                          <tr key={project.id} className="border-b border-border/50 hover:bg-accent/50 transition-colors">
                            <td className="py-4 px-4">
                              <div className="font-mono text-sm font-medium text-primary">
                                {project.id}
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div>
                                <div className="font-medium">{project.projectName}</div>
                                <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                  <MapPin className="w-3 h-3" />
                                  {project.area} • {project.species}
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-sm">
                              {project.location}
                            </td>
                            <td className="py-4 px-4 text-sm">
                              {project.ngo}
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-1">
                                <Coins className="w-4 h-4 text-success" />
                                <span className="font-medium text-success">
                                  {project.carbonStored.toLocaleString()}
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <Badge className="bg-success/10 text-success border-success/20">
                                {project.status}
                              </Badge>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-2">
                                <Button size="sm" variant="outline" className="h-7 px-2">
                                  <Eye className="w-3 h-3" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="h-7 px-2 font-mono text-xs"
                                  title={`Blockchain Hash: ${project.blockchainHash}`}
                                >
                                  {project.blockchainHash.slice(0, 8)}...
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="images" className="space-y-4">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Project Documentation Images
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ImageGallery />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="space-y-4">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Project Documents & Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <DocumentViewer />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}