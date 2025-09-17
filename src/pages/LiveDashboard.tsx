import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Monitor, 
  Smartphone, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Activity,
  Wifi,
  WifiOff
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FloatingElements from "@/components/FloatingElements";

const LiveDashboard = () => {
  const devices = [
    {
      id: "DEV001",
      macAddress: "00:1B:44:11:3A:B7",
      type: "Windows Laptop",
      status: "completed",
      progress: 100,
      startTime: "2024-09-16 10:30:00",
      endTime: "2024-09-16 11:45:00",
      icon: Monitor
    },
    {
      id: "DEV002", 
      macAddress: "A4:C3:F0:85:AC:2D",
      type: "Android Phone",
      status: "in-progress",
      progress: 67,
      startTime: "2024-09-16 11:15:00",
      endTime: null,
      icon: Smartphone
    },
    {
      id: "DEV003",
      macAddress: "B8:27:EB:76:8C:14",
      type: "Linux Desktop",
      status: "pending", 
      progress: 0,
      startTime: null,
      endTime: null,
      icon: Monitor
    },
    {
      id: "DEV004",
      macAddress: "DC:A6:32:15:B2:89",
      type: "iPhone",
      status: "completed",
      progress: 100,
      startTime: "2024-09-16 09:20:00", 
      endTime: "2024-09-16 10:05:00",
      icon: Smartphone
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-success';
      case 'in-progress': return 'text-warning';
      case 'pending': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in-progress': return Activity;
      case 'pending': return Clock;
      default: return AlertTriangle;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Navbar />
      
      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Live Wipe Dashboard</h1>
            <p className="text-muted-foreground">Real-time monitoring of secure data destruction processes</p>
          </div>

          {/* Connection Status */}
          <Card className="stats-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <Wifi className="h-5 w-5 text-primary" />
                  <span>System Status</span>
                </span>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                  Online
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Connected Devices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">2</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning">1</div>
                  <div className="text-sm text-muted-foreground">In Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground">1</div>
                  <div className="text-sm text-muted-foreground">Pending</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Device List */}
          <div className="grid gap-6">
            {devices.map((device) => {
              const StatusIcon = getStatusIcon(device.status);
              const DeviceIcon = device.icon;
              
              return (
                <Card key={device.id} className="stats-card">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <DeviceIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">{device.type}</div>
                          <div className="text-sm text-muted-foreground">ID: {device.id}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <StatusIcon className={`h-5 w-5 ${getStatusColor(device.status)}`} />
                        <Badge variant="outline" className="capitalize">
                          {device.status.replace('-', ' ')}
                        </Badge>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      MAC Address: <code className="bg-muted px-2 py-1 rounded text-sm">{device.macAddress}</code>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Wipe Progress</span>
                        <span className="text-sm text-muted-foreground">{device.progress}%</span>
                      </div>
                      <Progress 
                        value={device.progress} 
                        className="h-3"
                      />
                    </div>

                    {/* Timing Information */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-muted-foreground">Start Time</div>
                        <div>{device.startTime || "Not started"}</div>
                      </div>
                      <div>
                        <div className="font-medium text-muted-foreground">End Time</div>
                        <div>{device.endTime || (device.status === 'in-progress' ? "In progress..." : "Not completed")}</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-2">
                      {device.status === 'completed' && (
                        <Button size="sm" className="glow-button bg-primary hover:bg-primary-glow">
                          Download Certificate
                        </Button>
                      )}
                      {device.status === 'in-progress' && (
                        <Button size="sm" variant="outline" className="glow-button">
                          View Details
                        </Button>
                      )}
                      {device.status === 'pending' && (
                        <Button size="sm" className="glow-button bg-primary hover:bg-primary-glow">
                          Start Wipe Process
                        </Button>
                      )}
                      <Button size="sm" variant="outline" className="glow-button">
                        View Logs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Actions */}
          <div className="text-center mt-8 space-x-4">
            <Link to="/verify">
              <Button variant="outline" className="glow-button">
                Verify Certificate
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="glow-button">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDashboard;
