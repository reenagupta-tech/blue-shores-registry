import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  Zap, 
  Clock, 
  AlertTriangle,
  CheckCircle2,
  Server
} from "lucide-react";

export function SystemMetrics() {
  const systemData = {
    uptime: "99.9%",
    responseTime: "120ms",
    activeConnections: 1247,
    verificationQueue: 8,
    blockchainSync: 100,
    lastBackup: "2 hours ago"
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="shadow-card border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            System Health
          </CardTitle>
          <Activity className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-success">{systemData.uptime}</div>
          <p className="text-xs text-muted-foreground">Uptime this month</p>
          <Progress value={99.9} className="mt-2 h-2" />
        </CardContent>
      </Card>

      <Card className="shadow-card border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Response Time
          </CardTitle>
          <Zap className="h-4 w-4 text-warning" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-warning">{systemData.responseTime}</div>
          <p className="text-xs text-muted-foreground">Average API response</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/20">
              Optimal
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Active Sessions
          </CardTitle>
          <Server className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">{systemData.activeConnections.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">Connected users</p>
        </CardContent>
      </Card>

      <Card className="shadow-card border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Verification Queue
          </CardTitle>
          <Clock className="h-4 w-4 text-secondary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-secondary">{systemData.verificationQueue}</div>
          <p className="text-xs text-muted-foreground">Pending verifications</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
              Processing
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Blockchain Sync
          </CardTitle>
          <CheckCircle2 className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-success">{systemData.blockchainSync}%</div>
          <p className="text-xs text-muted-foreground">Sync completion</p>
          <Progress value={systemData.blockchainSync} className="mt-2 h-2" />
        </CardContent>
      </Card>

      <Card className="shadow-card border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Last Backup
          </CardTitle>
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold text-foreground">{systemData.lastBackup}</div>
          <p className="text-xs text-muted-foreground">Data backup status</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/20">
              Completed
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}