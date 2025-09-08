import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/Navbar";
import { 
  Shield, 
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Upload,
  Satellite,
  Camera,
  FileText
} from "lucide-react";

const verificationQueue = [
  {
    id: "VR001",
    projectName: "Andaman Mangrove Restoration",
    ngo: "Island Conservation Trust",
    submissionDate: "2024-01-20",
    type: "Initial Verification",
    priority: "High",
    area: "45.2 hectares",
    species: "Mangroves",
    documents: 12,
    photos: 24,
    droneData: true,
    satelliteData: true,
    status: "Under Review"
  },
  {
    id: "VR002", 
    projectName: "Gujarat Salt Marsh Project",
    ngo: "Coastal Restoration Foundation",
    submissionDate: "2024-01-18",
    type: "Annual Review",
    priority: "Medium",
    area: "18.7 hectares",
    species: "Salt Marsh",
    documents: 8,
    photos: 16,
    droneData: false,
    satelliteData: true,
    status: "Pending Documents"
  },
  {
    id: "VR003",
    projectName: "Odisha Seagrass Conservation",
    ngo: "Marine Biodiversity Initiative", 
    submissionDate: "2024-01-15",
    type: "Mid-term Assessment",
    priority: "Low",
    area: "32.1 hectares",
    species: "Seagrass",
    documents: 15,
    photos: 28,
    droneData: true,
    satelliteData: true,
    status: "Ready for Approval"
  }
];

export default function Verification() {
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Pending Documents':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'Ready for Approval':
        return 'bg-success/10 text-success border-success/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-destructive text-destructive-foreground';
      case 'Medium':
        return 'bg-warning text-warning-foreground';
      case 'Low':
        return 'bg-success text-success-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Verification Center
            </h1>
            <p className="text-muted-foreground mt-2">
              MRV (Monitoring, Reporting & Verification) System
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
            AI Analysis Active
          </div>
        </div>

        {/* Verification Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <Clock className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-warning">{verificationQueue.length}</div>
                  <p className="text-xs text-muted-foreground">Pending Review</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">47</div>
                  <p className="text-xs text-muted-foreground">Verified This Month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-destructive">3</div>
                  <p className="text-xs text-muted-foreground">Rejected</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">98.2%</div>
                  <p className="text-xs text-muted-foreground">Accuracy Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Verification Queue */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Verification Queue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {verificationQueue.map((request) => (
                <div key={request.id} className="border border-border rounded-lg p-6 space-y-4">
                  {/* Header Row */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{request.projectName}</h3>
                        <Badge className={getPriorityColor(request.priority)}>
                          {request.priority} Priority
                        </Badge>
                        <Badge className={getStatusColor(request.status)}>
                          {request.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {request.ngo} • {request.type} • {request.area}
                      </p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>ID: {request.id}</p>
                      <p>Submitted: {new Date(request.submissionDate).toLocaleDateString()}</p>
                    </div>
                  </div>

                  {/* Data Availability Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      <div>
                        <div className="font-medium text-sm">{request.documents}</div>
                        <div className="text-xs text-muted-foreground">Documents</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-secondary" />
                      <div>
                        <div className="font-medium text-sm">{request.photos}</div>
                        <div className="text-xs text-muted-foreground">Photos</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Upload className={`w-4 h-4 ${request.droneData ? 'text-success' : 'text-muted-foreground'}`} />
                      <div>
                        <div className="font-medium text-sm">{request.droneData ? 'Available' : 'Missing'}</div>
                        <div className="text-xs text-muted-foreground">Drone Data</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Satellite className={`w-4 h-4 ${request.satelliteData ? 'text-success' : 'text-muted-foreground'}`} />
                      <div>
                        <div className="font-medium text-sm">{request.satelliteData ? 'Available' : 'Missing'}</div>
                        <div className="text-xs text-muted-foreground">Satellite</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-gradient-to-br from-primary to-secondary"></div>
                      <div>
                        <div className="font-medium text-sm">{request.species}</div>
                        <div className="text-xs text-muted-foreground">Species</div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Verification Progress</span>
                      <span className="font-medium">
                        {request.status === 'Ready for Approval' ? '95%' : 
                         request.status === 'Under Review' ? '65%' : '25%'}
                      </span>
                    </div>
                    <Progress 
                      value={
                        request.status === 'Ready for Approval' ? 95 : 
                        request.status === 'Under Review' ? 65 : 25
                      } 
                      className="h-2"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Eye className="w-4 h-4" />
                        Review Details
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Camera className="w-4 h-4" />
                        View Images
                      </Button>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <XCircle className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-success hover:bg-success/90 text-success-foreground"
                        disabled={request.status !== 'Ready for Approval'}
                      >
                        <CheckCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}