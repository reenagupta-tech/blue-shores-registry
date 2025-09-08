import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Navbar } from "@/components/Navbar";
import { 
  Users, 
  Plus,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Coins,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const ngoData = [
  {
    id: 1,
    name: "Green Earth Foundation",
    type: "Environmental NGO",
    location: "West Bengal",
    contact: {
      email: "contact@greenearth.org",
      phone: "+91 98765 43210"
    },
    projects: 5,
    totalCarbon: 2150,
    joinDate: "2023-08-15",
    status: "Active",
    representative: "Dr. Priya Sharma"
  },
  {
    id: 2,
    name: "Coastal Care Initiative", 
    type: "Marine Conservation",
    location: "Kerala",
    contact: {
      email: "info@coastalcare.in",
      phone: "+91 97654 32109"
    },
    projects: 3,
    totalCarbon: 1820,
    joinDate: "2023-09-22",
    status: "Active",
    representative: "Ravi Kumar"
  },
  {
    id: 3,
    name: "Blue Ocean Conservancy",
    type: "Ocean Protection",
    location: "Maharashtra",
    contact: {
      email: "hello@blueocean.org",
      phone: "+91 96543 21098"
    },
    projects: 4,
    totalCarbon: 1650,
    joinDate: "2023-07-10",
    status: "Active",
    representative: "Anita Desai"
  },
  {
    id: 4,
    name: "Wetland Warriors",
    type: "Wetland Restoration",
    location: "Tamil Nadu",
    contact: {
      email: "team@wetlandwarriors.in",
      phone: "+91 95432 10987"
    },
    projects: 2,
    totalCarbon: 890,
    joinDate: "2023-10-05",
    status: "Pending Verification",
    representative: "Karthik Raj"
  }
];

export default function NGOs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NGO Partners
            </h1>
            <p className="text-muted-foreground mt-2">
              Organizations contributing to blue carbon restoration
            </p>
          </div>
          <Button className="gap-2 bg-gradient-to-r from-primary to-secondary">
            <Plus className="w-4 h-4" />
            Onboard NGO
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{ngoData.length}</div>
                  <p className="text-xs text-muted-foreground">Total NGOs</p>
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
                  <div className="text-2xl font-bold text-success">
                    {ngoData.filter(ngo => ngo.status === 'Active').length}
                  </div>
                  <p className="text-xs text-muted-foreground">Active Partners</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-warning">
                    {ngoData.filter(ngo => ngo.status === 'Pending Verification').length}
                  </div>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Coins className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">
                    {ngoData.reduce((sum, ngo) => sum + ngo.totalCarbon, 0).toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">Total Carbon (kg)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* NGO Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ngoData.map((ngo) => (
            <Card key={ngo.id} className="shadow-card border-0 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
                        {ngo.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{ngo.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{ngo.type}</p>
                    </div>
                  </div>
                  <Badge 
                    className={
                      ngo.status === 'Active' 
                        ? "bg-success/10 text-success border-success/20"
                        : "bg-warning/10 text-warning border-warning/20"
                    }
                  >
                    {ngo.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{ngo.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>{ngo.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{ngo.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>Joined {new Date(ngo.joinDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{ngo.projects}</div>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-success">{ngo.totalCarbon.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">Carbon (kg)</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-secondary">{ngo.representative.split(' ')[0]}</div>
                    <p className="text-xs text-muted-foreground">Contact</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}