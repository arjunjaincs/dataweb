"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Monitor,
  Smartphone,
  Download,
  Shield,
  CheckCircle,
  Recycle,
  Leaf,
  Globe,
  BarChart3,
  Search,
  Zap,
  Eye,
  Users,
  TrendingUp,
} from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Navbar from "@/components/Navbar"
import FloatingElements from "@/components/FloatingElements"

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/verify?q=${encodeURIComponent(searchQuery)}`)
    } else {
      navigate("/verify")
    }
  }

  const handleViewCertificates = (type: "desktop" | "mobile") => {
    navigate("/verify")
  }

  const stats = {
    onlineDevices: 1247,
    accuracy: 99.9,
    certificatesIssued: 127349,
    successRate: 98.7,
    activeUsers: 15847,
    uptimePercentage: 99.9,
  }

  const environmentStats = {
    co2Saved: 2340,
    devicesRecycled: 89234,
    wasteReduced: 445.7,
    treesEquivalent: 12890,
    energySaved: 678.3,
    recyclingPartners: 1240,
  }

  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Secure Data Wiping for
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Trustworthy IT Asset Recycling
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              India's first blockchain-verified data destruction solution. Enable safe recycling of ₹50,000 crore worth
              of IT assets with tamper-proof certificates and military-grade security.
            </p>

            {/* Certificate Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex space-x-4">
                <Input
                  placeholder="Search certificate ID or device MAC address..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input flex-1 h-14 text-lg"
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
                <Button onClick={handleSearch} className="glow-button bg-primary hover:bg-primary-glow h-14 px-8">
                  <Search className="h-5 w-5 mr-2" />
                  Verify
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Verify certificates instantly with blockchain validation
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/live-dashboard">
                <Button className="glow-button bg-primary hover:bg-primary-glow">
                  <Eye className="h-4 w-4 mr-2" />
                  Live Dashboard
                </Button>
              </Link>
              <Link to="/comparison">
                <Button variant="outline" className="glow-button bg-transparent">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Why Choose Us?
                </Button>
              </Link>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Left Column - Statistics */}
            <div className="space-y-6">
              <Card className="stats-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Security Metrics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Threat Detection</span>
                    <span className="font-semibold text-success">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Data Recovery Prevention</span>
                    <span className="font-semibold text-success">99.99%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Compliance Score</span>
                    <span className="font-semibold text-primary">A+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Audit Passes</span>
                    <span className="font-semibold text-success">2,847</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="stats-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>Live Statistics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Online Devices</span>
                    <span className="font-semibold flex items-center">
                      <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
                      {stats.onlineDevices.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Wipe Accuracy</span>
                    <span className="font-semibold text-success">{stats.accuracy}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Certificates Issued</span>
                    <span className="font-semibold">{stats.certificatesIssued.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="font-semibold text-success">{stats.successRate}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Users</span>
                    <span className="font-semibold">{stats.activeUsers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">System Uptime</span>
                    <span className="font-semibold text-success">{stats.uptimePercentage}%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="stats-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Community</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-primary">{stats.activeUsers.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Trusted Users</div>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +23% this month
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Center Column - Download Section */}
            <div className="space-y-6">
              <Card className="stats-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Download DataWipe Pro</CardTitle>
                  <CardDescription>Cross-platform secure data destruction for Windows, Linux & Android</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Windows/Linux Download */}
                  <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/20">
                    <div className="p-4 rounded-full bg-primary/20 inline-block mb-4">
                      <Monitor className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Windows / Linux</h3>
                    <p className="text-sm text-muted-foreground mb-4">Secure data sanitization for desktop systems</p>
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span>Connected Devices</span>
                        <span className="text-primary font-medium">3 Found</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Certificates Generated</span>
                        <span className="text-primary font-medium">127</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Button className="glow-button bg-primary hover:bg-primary-glow text-primary-foreground text-lg px-8 py-4 rounded-full w-full">
                        <Download className="mr-2 h-5 w-5" />
                        Download ISO for Windows
                      </Button>
                      <Button
                        variant="outline"
                        className="glow-button w-full bg-transparent"
                        onClick={() => handleViewCertificates("desktop")}
                      >
                        View Certificates
                      </Button>
                    </div>
                  </div>

                  {/* Android Download */}
                  <div className="text-center p-6 rounded-2xl bg-card/40 border border-border/30">
                    <div className="p-4 rounded-full bg-primary/20 inline-block mb-4">
                      <Smartphone className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Android</h3>
                    <p className="text-sm text-muted-foreground mb-4">Mobile device data sanitization</p>
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span>Connected Devices</span>
                        <span className="text-primary font-medium">1 Found</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Certificates Generated</span>
                        <span className="text-primary font-medium">45</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Button variant="outline" className="glow-button w-full bg-transparent">
                        <Download className="h-4 w-4 mr-2" />
                        Download Android App
                      </Button>
                      <Button
                        variant="outline"
                        className="glow-button w-full bg-transparent"
                        onClick={() => handleViewCertificates("mobile")}
                      >
                        View Mobile Certificates
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Environmental Impact */}
            <div className="space-y-6">
              <Card className="stats-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Leaf className="h-5 w-5 text-success" />
                    <span>Environmental Impact</span>
                  </CardTitle>
                  <CardDescription>Real impact on India's e-waste crisis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">CO₂ Emissions Saved</span>
                    <span className="font-semibold text-success">{environmentStats.co2Saved}kg</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Devices Recycled</span>
                    <span className="font-semibold">{environmentStats.devicesRecycled.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">E-Waste Reduced</span>
                    <span className="font-semibold text-success">{environmentStats.wasteReduced}T</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Trees Equivalent</span>
                    <span className="font-semibold text-success">
                      {environmentStats.treesEquivalent.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Energy Saved</span>
                    <span className="font-semibold text-success">{environmentStats.energySaved} MWh</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Recycling Partners</span>
                    <span className="font-semibold">{environmentStats.recyclingPartners}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="stats-card border-success/30 bg-success/5">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <Recycle className="h-8 w-8 text-success mx-auto" />
                    <h3 className="font-semibold">Carbon Neutral Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Every device securely wiped contributes to India's circular economy
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="stats-card border-info/30 bg-info/5">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="p-3 rounded-full bg-info/20 inline-block">
                      <Globe className="h-8 w-8 text-info" />
                    </div>
                    <h3 className="font-semibold text-info">Global Standards</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">NIST Compliance</span>
                        <span className="text-info font-medium">✓ SP 800-88</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">DoD Standards</span>
                        <span className="text-info font-medium">✓ 5220.22-M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">ISO Certified</span>
                        <span className="text-info font-medium">✓ 27001</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Setup Guide Section */}
          <Card className="stats-card mb-16">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-primary" />
                <span>Setup Guide: Create Bootable USB Drive</span>
              </CardTitle>
              <CardDescription>Step-by-step guide to create a bootable DataWipe Pro USB using Rufus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-semibold">Download ISO</h4>
                  <p className="text-sm text-muted-foreground">
                    Download the DataWipe Pro bootable ISO file from above
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-semibold">Get Rufus</h4>
                  <p className="text-sm text-muted-foreground">
                    Download Rufus from rufus.ie - a free USB creation utility
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-semibold">Create USB</h4>
                  <p className="text-sm text-muted-foreground">
                    Use Rufus to flash the DataWipe Pro ISO to your USB drive
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-success" />
                  </div>
                  <h4 className="font-semibold">Boot & Wipe</h4>
                  <p className="text-sm text-muted-foreground">Boot from USB and securely wipe your devices offline</p>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="text-center">
                <h4 className="font-semibold mb-3">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Our AI chatbot can provide step-by-step visual guidance for creating bootable drives
                </p>
                <Badge className="bg-info/20 text-info border-info/30">
                  💬 Try the chatbot in the bottom-right corner for instant help
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="stats-card border-primary/50 bg-primary/5">
            <CardContent className="pt-8 pb-8">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">Ready to Secure Your Data?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of organizations leading India's IT asset recycling revolution with blockchain-verified
                  data destruction.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/live-dashboard">
                    <Button className="glow-button bg-primary hover:bg-primary-glow">
                      <Monitor className="h-4 w-4 mr-2" />
                      View Live Demo
                    </Button>
                  </Link>
                  <Link to="/comparison">
                    <Button variant="outline" className="glow-button bg-transparent">
                      <Shield className="h-4 w-4 mr-2" />
                      See Comparison
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="outline" className="glow-button bg-transparent">
                      <Users className="h-4 w-4 mr-2" />
                      Join Community
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Index
