"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Shield, Lock, User, Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import FloatingElements from "@/components/FloatingElements"

const LoginPage = () => {
  const [showSignupPassword, setShowSignupPassword] = useState(false)
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Signup attempt:", signupData)
    // TODO: Implement actual signup logic
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", loginData)
    // TODO: Implement actual login logic
  }

  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Navbar />

      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/20 border border-primary/30">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2">Join DataWipe Pro</h1>
            <p className="text-muted-foreground">Secure your data, protect your future</p>
          </div>

          {/* Signup Form */}
          <Card className="stats-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5 text-primary" />
                <span>Create New Account</span>
              </CardTitle>
              <CardDescription>Join thousands of users securing their data with DataWipe Pro</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={signupData.name}
                    onChange={(e) => setSignupData((prev) => ({ ...prev, name: e.target.value }))}
                    className="search-input"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="signup-email">Email Address</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="Enter your email"
                    value={signupData.email}
                    onChange={(e) => setSignupData((prev) => ({ ...prev, email: e.target.value }))}
                    className="search-input"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="signup-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="signup-password"
                      type={showSignupPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={signupData.password}
                      onChange={(e) => setSignupData((prev) => ({ ...prev, password: e.target.value }))}
                      className="search-input pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                      onClick={() => setShowSignupPassword(!showSignupPassword)}
                    >
                      {showSignupPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm your password"
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                    className="search-input"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full glow-button bg-primary hover:bg-primary-glow text-primary-foreground"
                >
                  Create Account
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Divider */}
          <div className="relative mb-8">
            <Separator className="bg-border/30" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
              <span className="text-sm text-muted-foreground">Already have an account?</span>
            </div>
          </div>

          {/* Login Form */}
          <Card className="stats-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-primary" />
                <span>Sign In</span>
              </CardTitle>
              <CardDescription>Welcome back! Sign in to access your secure dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="login-email">Email Address</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="Enter your email"
                    value={loginData.email}
                    onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                    className="search-input"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="login-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showLoginPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                      className="search-input pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                    >
                      {showLoginPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button variant="link" className="p-0 text-primary hover:text-primary-glow">
                    Forgot password?
                  </Button>
                </div>
                <Button
                  type="submit"
                  className="w-full glow-button bg-primary hover:bg-primary-glow text-primary-foreground"
                >
                  Sign In
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Login */}
          <Card className="stats-card">
            <CardHeader>
              <CardTitle className="text-center">Quick Sign In</CardTitle>
              <CardDescription className="text-center">
                Connect with your existing accounts for faster access
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="glow-button border-primary/40 hover:border-primary hover:bg-primary/10 bg-transparent"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="glow-button border-primary/40 hover:border-primary hover:bg-primary/10 bg-transparent"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  className="glow-button border-primary/40 hover:border-primary hover:bg-primary/10 bg-transparent"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  className="glow-button border-primary/40 hover:border-primary hover:bg-primary/10 bg-transparent"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
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

export default LoginPage
