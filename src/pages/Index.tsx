import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Shield, Globe, TrendingUp, Users, Award } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-primary/5">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-glow">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Blue Carbon Registry
            </h1>
            <p className="text-xs text-muted-foreground">MRV System</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => navigate("/login")}
            className="border-primary/20 hover:bg-primary/5 transition-smooth"
          >
            Sign In
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-glow transition-smooth"
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent">
              Blockchain-Powered
            </span>
            <br />
            Blue Carbon MRV System
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Decentralized Monitoring, Reporting & Verification for coastal ecosystem restoration. 
            Transparent carbon credit tokenization with immutable plantation data across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              onClick={() => navigate("/dashboard")}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-glow transition-smooth px-8 py-4 text-lg"
            >
              View Dashboard Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/signup")}
              className="border-primary/20 hover:bg-primary/5 transition-smooth px-8 py-4 text-lg"
            >
              Register Organization
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-card border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Immutable Registry</h3>
              <p className="text-muted-foreground">
                Blockchain-based storage ensures plantation and restoration data integrity with complete transparency.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center">
                <Globe className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Smart Contracts</h3>
              <p className="text-muted-foreground">
                Automated tokenization of carbon credits through verified smart contracts and field data integration.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-success/20 to-success/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold">Real-time Monitoring</h3>
              <p className="text-muted-foreground">
                Continuous monitoring through mobile apps, drone data, and IoT sensors for accurate MRV reporting.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-gradient-to-r from-card/50 to-accent/20 rounded-2xl p-8 backdrop-blur-sm">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">12,350</div>
            <div className="text-muted-foreground text-sm">Tokens Issued</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">47</div>
            <div className="text-muted-foreground text-sm">NGOs Registered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success">23</div>
            <div className="text-muted-foreground text-sm">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning">8</div>
            <div className="text-muted-foreground text-sm">States Covered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
