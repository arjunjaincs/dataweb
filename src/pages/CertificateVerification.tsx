"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Shield, Search, CheckCircle, Clock, FileText, Download, ExternalLink, Lock } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import FloatingElements from "@/components/FloatingElements"

const CertificateVerification = () => {
  const [certificateId, setCertificateId] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would be connected to actual auth

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // You could add a toast notification here
      console.log("Copied to clipboard:", text)
    })
  }

  const handleVerification = async () => {
    if (!certificateId.trim()) return

    if (!isLoggedIn) {
      // Show login required message
      return
    }

    setIsVerifying(true)

    // Simulate verification process
    setTimeout(() => {
      // Mock successful verification
      if (certificateId === "DWP-2024-001" || certificateId === "DWP-2024-127") {
        setVerificationResult({
          status: "valid",
          macAddress: "00:1B:44:11:3A:B7",
          deviceType: "Windows Laptop - Dell XPS 13",
          wipeDate: "2024-09-16 11:45:00",
          algorithm: "NIST SP 800-88 (3-Pass)",
          certificateId: certificateId,
          issuer: "DataWipe Pro Certification Authority",
          blockchainHash: "0x4a7b9e2f8c1d3e5a9b8c7f2e4d6a1b9c8e7f3a2b5d8c9e1f4a7b2c5d8e1f4a7b",
          verificationLevel: "Premium",
        })
      } else {
        setVerificationResult({
          status: "invalid",
          message: "Certificate not found or invalid. Please check the certificate ID.",
        })
      }
      setIsVerifying(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Navbar />

      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/20 border border-primary/30">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2">Certificate Verification</h1>
            <p className="text-muted-foreground">
              Verify the authenticity of DataWipe Pro certificates with blockchain validation
            </p>
          </div>

          {/* Search Section */}
          <Card className="stats-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-primary" />
                <span>Certificate Lookup</span>
              </CardTitle>
              <CardDescription>Enter a valid certificate ID to verify data wiping completion</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Input
                  placeholder="Enter certificate ID (e.g., DWP-2024-001)"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  className="search-input flex-1"
                  onKeyPress={(e) => e.key === "Enter" && handleVerification()}
                />
                <Button
                  onClick={handleVerification}
                  disabled={isVerifying || !certificateId.trim()}
                  className="glow-button bg-primary hover:bg-primary-glow px-8"
                >
                  {isVerifying ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      <span>Verifying...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Search className="h-4 w-4" />
                      <span>Verify</span>
                    </div>
                  )}
                </Button>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>
                  Try these demo certificate IDs:
                  <button
                    onClick={() => copyToClipboard("DWP-2024-001")}
                    className="bg-muted px-2 py-1 rounded mx-1 hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    DWP-2024-001
                  </button>
                  or
                  <button
                    onClick={() => copyToClipboard("DWP-2024-127")}
                    className="bg-muted px-2 py-1 rounded mx-1 hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    DWP-2024-127
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Login Required Message */}
          {!isLoggedIn && certificateId && (
            <Card className="stats-card mb-8 border-warning/50 bg-warning/5">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Lock className="h-8 w-8 text-warning" />
                    <div>
                      <h3 className="font-semibold text-warning">Authentication Required</h3>
                      <p className="text-sm text-muted-foreground">
                        Certificate verification is only available for signed-in users
                      </p>
                    </div>
                  </div>
                  <Link to="/login">
                    <Button className="glow-button bg-primary hover:bg-primary-glow">Sign In</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Verification Result */}
          {verificationResult && (
            <Card
              className={`stats-card ${
                verificationResult.status === "valid"
                  ? "border-success/50 bg-success/5"
                  : "border-destructive/50 bg-destructive/5"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {verificationResult.status === "valid" ? (
                    <CheckCircle className="h-6 w-6 text-success" />
                  ) : (
                    <ExternalLink className="h-6 w-6 text-destructive" />
                  )}
                  <span>{verificationResult.status === "valid" ? "Certificate Verified" : "Verification Failed"}</span>
                  {verificationResult.status === "valid" && (
                    <Badge className="bg-success/20 text-success border-success/30">Authentic</Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {verificationResult.status === "valid" ? (
                  <div className="space-y-6">
                    {/* Certificate Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-muted-foreground mb-1">Device Information</h4>
                          <p className="font-medium">{verificationResult.deviceType}</p>
                          <p className="text-sm text-muted-foreground">
                            MAC:
                            <button
                              onClick={() => copyToClipboard(verificationResult.macAddress)}
                              className="bg-muted px-2 py-1 rounded ml-1 hover:bg-primary/20 transition-colors cursor-pointer"
                            >
                              {verificationResult.macAddress}
                            </button>
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-muted-foreground mb-1">Wipe Completion</h4>
                          <p className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>{verificationResult.wipeDate}</span>
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-muted-foreground mb-1">Security Algorithm</h4>
                          <p className="font-medium">{verificationResult.algorithm}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-muted-foreground mb-1">Verification Level</h4>
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            {verificationResult.verificationLevel}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Blockchain Verification */}
                    <div className="border-t border-border/20 pt-4">
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">Blockchain Verification</h4>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Transaction Hash</p>
                        <button
                          onClick={() => copyToClipboard(verificationResult.blockchainHash)}
                          className="text-xs break-all hover:bg-primary/10 p-2 rounded transition-colors cursor-pointer w-full text-left"
                        >
                          {verificationResult.blockchainHash}
                        </button>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border/20">
                      <Button className="glow-button bg-primary hover:bg-primary-glow">
                        <Download className="h-4 w-4 mr-2" />
                        Download Certificate
                      </Button>
                      <Button variant="outline" className="glow-button bg-transparent">
                        <FileText className="h-4 w-4 mr-2" />
                        View Full Report
                      </Button>
                      <Button variant="outline" className="glow-button bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on Blockchain
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-destructive font-medium mb-2">{verificationResult.message}</p>
                    <p className="text-sm text-muted-foreground">
                      If you believe this is an error, please contact our support team.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Demo Login Toggle (Remove in production) */}
          <Card className="stats-card mt-8 border-info/50 bg-info/5">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-info">Demo Mode</h3>
                  <p className="text-sm text-muted-foreground">Toggle login status for demonstration purposes</p>
                </div>
                <Button variant="outline" onClick={() => setIsLoggedIn(!isLoggedIn)} className="glow-button">
                  {isLoggedIn ? "Simulate Logout" : "Simulate Login"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link to="/">
              <Button variant="outline" className="glow-button bg-transparent">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificateVerification
