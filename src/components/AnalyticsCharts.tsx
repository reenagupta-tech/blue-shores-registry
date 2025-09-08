import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Award, Activity } from "lucide-react";

const topNGOsData = [
  { name: 'Green Earth Foundation', credits: 1850, projects: 3 },
  { name: 'Coastal Guardians', credits: 1545, projects: 2 },
  { name: 'Wetland Warriors', credits: 1120, projects: 2 },
  { name: 'Blue Ocean Conservancy', credits: 980, projects: 2 },
  { name: 'Island Conservation Society', credits: 532, projects: 1 },
];

const tokenFlowData = [
  { month: 'Jan', issued: 850, redeemed: 320 },
  { month: 'Feb', issued: 1200, redeemed: 450 },
  { month: 'Mar', issued: 1850, redeemed: 680 },
  { month: 'Apr', issued: 2400, redeemed: 890 },
  { month: 'May', issued: 3100, redeemed: 1150 },
  { month: 'Jun', issued: 3850, redeemed: 1420 },
];

const speciesDistribution = [
  { name: 'Mangroves', value: 45, color: 'hsl(150 60% 35%)' },
  { name: 'Seagrass', value: 30, color: 'hsl(200 85% 45%)' },
  { name: 'Salt Marsh', value: 25, color: 'hsl(120 60% 45%)' },
];

export function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Top NGOs by Credits */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Award className="h-5 w-5 text-primary" />
            Top NGOs by Credits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topNGOsData.map((ngo, index) => (
              <div key={ngo.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{ngo.name}</p>
                    <p className="text-xs text-muted-foreground">{ngo.projects} projects</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{ngo.credits}</p>
                  <p className="text-xs text-muted-foreground">credits</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Token Flow Trends */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-secondary" />
            Token Flow Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tokenFlowData.map((item) => (
              <div key={item.month} className="flex items-center justify-between">
                <div className="text-sm font-medium">{item.month}</div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-sm">Issued: {item.issued}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="text-sm">Redeemed: {item.redeemed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Species Distribution */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Activity className="h-5 w-5 text-success" />
            Species Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {speciesDistribution.map((species) => (
              <div key={species.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: species.color }}
                  ></div>
                  <span className="text-sm font-medium">{species.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <span className="font-bold">{species.value}%</span>
                  </div>
                  <div className="w-16 bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${species.value}%`, 
                        backgroundColor: species.color 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary */}
          <div className="mt-6 p-4 bg-accent/20 rounded-lg">
            <h4 className="font-semibold text-sm mb-2">Distribution Summary</h4>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• Mangroves lead coastal restoration efforts (45%)</p>
              <p>• Seagrass projects focus on marine ecosystems (30%)</p>
              <p>• Salt marshes protect coastal communities (25%)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}