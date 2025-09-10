import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Users, 
  CreditCard, 
  TrendingUp,
  MapPin,
  CheckCircle,
  XCircle,
  Eye
} from "lucide-react";

import { AnalyticsCharts } from "./AnalyticsCharts";
import { Navbar } from "./Navbar";
import { SystemMetrics } from "./SystemMetrics";
import { RecentActivity } from "./RecentActivity";
import { ViewImagesModal } from "./ViewImagesModal";

// Dummy data for the dashboard
const kpiData = {
  totalCarbon: 12350,
  ngosOnboarded: 47,
  vouchersRedeemed: 2850,
  activePlantations: 23
};

const pendingRequests = [
  {
    id: 1,
    ngoName: "Green Earth Foundation",
    species: "Mangroves",
    area: "15.5 hectares",
    location: "21.3099°N, 70.1431°E",
    status: "pending",
    photos: 3
  },
  {
    id: 2,
    ngoName: "Coastal Care Initiative",
    species: "Seagrass",
    area: "8.2 hectares",
    location: "11.0567°N, 78.0988°E",
    status: "pending",
    photos: 5
  },
  {
    id: 3,
    ngoName: "Blue Ocean Conservancy",
    species: "Salt Marsh",
    area: "22.1 hectares",
    location: "19.0760°N, 72.8777°E",
    status: "pending",
    photos: 4
  },
  {
    id: 4,
    ngoName: "Wetland Warriors",
    species: "Mangroves",
    area: "12.8 hectares",
    location: "13.0827°N, 80.2707°E",
    status: "pending",
    photos: 6
  },
];

export function Dashboard() {
  const [requests, setRequests] = useState(pendingRequests);
  const [viewImagesModal, setViewImagesModal] = useState<{
    isOpen: boolean;
    requestData: typeof pendingRequests[0] | null;
  }>({ isOpen: false, requestData: null });

  const handleViewImages = (request: typeof pendingRequests[0]) => {
    setViewImagesModal({ isOpen: true, requestData: request });
  };

  const handleApprove = (id: number) => {
    setRequests(prev => prev.filter(req => req.id !== id));
  };

  const handleReject = (id: number) => {
    setRequests(prev => prev.filter(req => req.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Blue Carbon Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">
              Monitoring, Reporting & Verification Dashboard
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
            System Online
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="relative overflow-hidden bg-gradient-to-br from-card to-accent/5 shadow-card border-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Carbon Stored
              </CardTitle>
              <Leaf className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold text-primary">
                {kpiData.totalCarbon.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                BlueCarbon Tokens = {kpiData.totalCarbon} kg CO₂
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-card to-secondary/5 shadow-card border-0">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent"></div>
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                NGOs Onboarded
              </CardTitle>
              <Users className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold text-secondary">
                {kpiData.ngosOnboarded}
              </div>
              <p className="text-xs text-muted-foreground">
                +3 this month
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-card to-warning/5 shadow-card border-0">
            <div className="absolute inset-0 bg-gradient-to-br from-warning/5 to-transparent"></div>
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Vouchers Redeemed
              </CardTitle>
              <CreditCard className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold text-warning">
                {kpiData.vouchersRedeemed.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                Marketplace activity
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-card to-success/5 shadow-card border-0">
            <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent"></div>
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Plantations
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold text-success">
                {kpiData.activePlantations}
              </div>
              <p className="text-xs text-muted-foreground">
                Across 8 states
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6">
          {/* Pending Requests Table */}
          <div>
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Pending Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {requests.map((request) => (
                    <div key={request.id} className="border border-border rounded-lg p-4 space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm">{request.ngoName}</h4>
                        <p className="text-xs text-muted-foreground">{request.species} • {request.area}</p>
                        <p className="text-xs text-muted-foreground">{request.location}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Badge 
                          variant="outline" 
                          className="text-xs cursor-pointer hover:bg-accent"
                          onClick={() => handleViewImages(request)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          {request.photos} photos
                        </Badge>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReject(request.id)}
                            className="h-7 px-2 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                          >
                            <XCircle className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleApprove(request.id)}
                            className="h-7 px-2 bg-success hover:bg-success/90 text-success-foreground"
                          >
                            <CheckCircle className="h-3 w-3" />
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

        {/* System Metrics */}
        <div>
          <h2 className="text-2xl font-bold mb-4">System Metrics</h2>
          <SystemMetrics />
        </div>

        {/* Bottom Row: Analytics and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AnalyticsCharts />
          </div>
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
        </div>
      </div>

      {/* View Images Modal */}
      {viewImagesModal.requestData && (
        <ViewImagesModal
          isOpen={viewImagesModal.isOpen}
          onClose={() => setViewImagesModal({ isOpen: false, requestData: null })}
          requestData={viewImagesModal.requestData}
        />
      )}
    </div>
  );
}