import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Shield, 
  BarChart3, 
  Settings, 
  TrendingUp, 
  UserCheck, 
  Building,
  Smartphone,
  Monitor,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FloatingElements from "@/components/FloatingElements";

const AdminPanel = () => {
  const stats = {
    totalUsers: 15847,
    enterpriseUsers: 342, 
    professionalUsers: 1256,
    freeUsers: 14249,
    activeToday: 3421,
    certificatesIssued: 127349,
    devicesWiped: 89234,
    revenueThisMonth: 2340000
  };

  const recentSignups = [
    { id: 1, name: "Tech Solutions Pvt Ltd", type: "Enterprise", date: "2024-09-16", status: "active" },
    { id: 2, name: "Green Recycling Co.", type: "Professional", date: "2024-09-16", status: "active" },
    { id: 3, name: "John Smith", type: "Individual", date: "2024-09-15", status: "pending" },
    { id: 4, name: "DataSecure Inc.", type: "Enterprise", date: "2024-09-15", status: "active" },
    { id: 5, name: "Mumbai IT Services", type: "Professional", date: "2024-09-15", status: "active" }
  ];

  const systemAlerts = [
    { id: 1, type: "warning", message: "High server load detected - 85% capacity", time: "5 min ago" },
    { id: 2, type: "info", message: "Blockchain verification system updated", time: "1 hour ago" },
    { id: 3, type: "success", message: "Monthly backup completed successfully", time: "2 hours ago" },
    { id: 4, type: "error", message: "Certificate generation failed for 3 devices", time: "3 hours ago" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success/20 text-success border-success/30';
      case 'pending': return 'bg-warning/20 text-warning border-warning/30';
      case 'suspended': return 'bg-destructive/20 text-destructive border-destructive/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'error': return 'text-destructive';
      case 'warning': return 'text-warning';
      case 'success': return 'text-success';
      case 'info': return 'text-info';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Navbar />
      
      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/20 border border-primary/30">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Comprehensive overview of DataWipe Pro system performance and user management
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card className="stats-card">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Total Users</div>
                </div>
              </CardContent>
            </Card>

            <Card className="stats-card">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stats.enterpriseUsers}</div>
                  <div className="text-sm text-muted-foreground">Enterprise</div>
                </div>
              </CardContent>
            </Card>

            <Card className="stats-card">
              <CardContent className="pt-6">
                <div className="text-center">
                  <UserCheck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stats.professionalUsers}</div>
                  <div className="text-sm text-muted-foreground">Professional</div>
                </div>
              </CardContent>
            </Card>

            <Card className="stats-card">
              <CardContent className="pt-6">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">₹{(stats.revenueThisMonth / 100000).toFixed(1)}L</div>
                  <div className="text-sm text-muted-foreground">Revenue (Month)</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-card/50">
              <TabsTrigger value="overview" className="glow-button">Overview</TabsTrigger>
              <TabsTrigger value="users" className="glow-button">Users</TabsTrigger>
              <TabsTrigger value="analytics" className="glow-button">Analytics</TabsTrigger>
              <TabsTrigger value="system" className="glow-button">System</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card className="stats-card">
                  <CardHeader>
                    <CardTitle>Recent Signups</CardTitle>
                    <CardDescription>Latest user registrations across all tiers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentSignups.map((signup) => (
                        <div key={signup.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                          <div>
                            <div className="font-semibold">{signup.name}</div>
                            <div className="text-sm text-muted-foreground">{signup.date}</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {signup.type}
                            </Badge>
                            <Badge className={`text-xs ${getStatusColor(signup.status)}`}>
                              {signup.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* System Alerts */}
                <Card className="stats-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-warning" />
                      <span>System Alerts</span>
                    </CardTitle>
                    <CardDescription>Recent system notifications and status updates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {systemAlerts.map((alert) => (
                        <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/20">
                          <div className={`w-2 h-2 rounded-full mt-2 ${getAlertColor(alert.type).replace('text-', 'bg-')}`} />
                          <div className="flex-1">
                            <div className={`font-medium text-sm ${getAlertColor(alert.type)}`}>
                              {alert.message}
                            </div>
                            <div className="text-xs text-muted-foreground">{alert.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="users">
              <div className="grid gap-6">
                <Card className="stats-card">
                  <CardHeader>
                    <CardTitle>User Distribution</CardTitle>
                    <CardDescription>Breakdown of users by subscription tier</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 rounded-lg bg-muted/20">
                        <div className="text-2xl font-bold text-primary">{stats.enterpriseUsers}</div>
                        <div className="text-sm text-muted-foreground">Enterprise Users</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {((stats.enterpriseUsers / stats.totalUsers) * 100).toFixed(1)}% of total
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/20">
                        <div className="text-2xl font-bold text-success">{stats.professionalUsers}</div>
                        <div className="text-sm text-muted-foreground">Professional Users</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {((stats.professionalUsers / stats.totalUsers) * 100).toFixed(1)}% of total
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/20">
                        <div className="text-2xl font-bold text-info">{stats.freeUsers}</div>
                        <div className="text-sm text-muted-foreground">Free Users</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {((stats.freeUsers / stats.totalUsers) * 100).toFixed(1)}% of total
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/20">
                        <div className="text-2xl font-bold text-warning">{stats.activeToday}</div>
                        <div className="text-sm text-muted-foreground">Active Today</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {((stats.activeToday / stats.totalUsers) * 100).toFixed(1)}% engagement
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid gap-6">
                <Card className="stats-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <span>Performance Metrics</span>
                    </CardTitle>
                    <CardDescription>Key performance indicators and usage statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">{stats.certificatesIssued.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Certificates Issued</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-success mb-2">{stats.devicesWiped.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Devices Wiped</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-info mb-2">99.9%</div>
                        <div className="text-sm text-muted-foreground">System Uptime</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="system">
              <div className="grid gap-6">
                <Card className="stats-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="h-5 w-5 text-primary" />
                      <span>System Configuration</span>
                    </CardTitle>
                    <CardDescription>System settings and maintenance tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <Button className="glow-button" variant="outline">
                        <Monitor className="h-4 w-4 mr-2" />
                        Server Monitoring
                      </Button>
                      <Button className="glow-button" variant="outline">
                        <Shield className="h-4 w-4 mr-2" />
                        Security Settings
                      </Button>
                      <Button className="glow-button" variant="outline">
                        <Smartphone className="h-4 w-4 mr-2" />
                        Device Management
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Back to Home */}
          <div className="text-center mt-8">
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

export default AdminPanel;
