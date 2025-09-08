import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  CheckCircle, 
  XCircle, 
  Upload, 
  UserPlus, 
  Coins,
  MapPin,
  Clock
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "approval",
    title: "Plantation Approved",
    description: "Sundarbans Mangrove Project verified and 850 tokens issued",
    user: "Green Earth Foundation",
    timestamp: "2 minutes ago",
    icon: CheckCircle,
    iconColor: "text-success"
  },
  {
    id: 2,
    type: "upload",
    title: "Data Upload",
    description: "Coastal restoration photos uploaded for verification",
    user: "Coastal Care Initiative",
    timestamp: "15 minutes ago", 
    icon: Upload,
    iconColor: "text-primary"
  },
  {
    id: 3,
    type: "rejection",
    title: "Request Rejected",
    description: "Insufficient documentation for Mumbai coastal project",
    user: "Blue Ocean Conservancy",
    timestamp: "1 hour ago",
    icon: XCircle,
    iconColor: "text-destructive"
  },
  {
    id: 4,
    type: "registration",
    title: "NGO Onboarded",
    description: "Marine Conservation Trust successfully registered",
    user: "System Admin",
    timestamp: "2 hours ago",
    icon: UserPlus,
    iconColor: "text-secondary"
  },
  {
    id: 5,
    type: "token",
    title: "Tokens Redeemed",
    description: "1,200 BlueCarbon tokens exchanged in marketplace",
    user: "EcoVentures Ltd",
    timestamp: "3 hours ago",
    icon: Coins,
    iconColor: "text-warning"
  },
  {
    id: 6,
    type: "location",
    title: "Site Verification",
    description: "GPS coordinates verified for Kerala mangrove site",
    user: "Wetland Warriors",
    timestamp: "5 hours ago",
    icon: MapPin,
    iconColor: "text-info"
  }
];

export function RecentActivity() {
  return (
    <Card className="shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <div className={`p-2 rounded-full bg-card ${activity.iconColor}`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-medium text-sm">{activity.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Avatar className="h-5 w-5">
                          <AvatarFallback className="text-xs">
                            {activity.user.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">
                          {activity.user}
                        </span>
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="text-xs whitespace-nowrap">
                      {activity.timestamp}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}