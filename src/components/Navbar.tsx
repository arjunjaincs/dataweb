"use client"

import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Globe, Sun, Moon } from "lucide-react"
import { useState } from "react"
import { useTheme } from "@/contexts/ThemeContext"

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/40 backdrop-blur-2xl border-b border-primary/20 shadow-[0_0_30px_hsl(var(--primary-glow)/0.15)]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Admin Panel Button (Left) */}
          <Link to="/admin">
            <Button variant="outline" size="sm" className="glow-button bg-background/40">
              Admin Panel
            </Button>
          </Link>

          {/* Logo and Brand (Center) */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-primary/20 border border-primary/30 shadow-[0_0_15px_hsl(var(--primary-glow)/0.2)]">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              DataWipe Pro
            </div>
          </Link>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/pricing">
                <Button
                  variant="ghost"
                  size="sm"
                  className="glow-button bg-background/30 text-foreground hover:bg-primary/10"
                >
                  Pricing
                </Button>
              </Link>
              <Link to="/comparison">
                <Button
                  variant="ghost"
                  size="sm"
                  className="glow-button bg-background/30 text-foreground hover:bg-primary/10"
                >
                  Compare
                </Button>
              </Link>
              <Link to="/live-dashboard">
                <Button
                  variant="ghost"
                  size="sm"
                  className="glow-button bg-background/30 text-foreground hover:bg-primary/10"
                >
                  Live Demo
                </Button>
              </Link>
            </div>

            {/* Theme Toggle Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="glow-button bg-background/40 border-primary/30 hover:bg-primary/10"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Language Selector */}
            <Select defaultValue="en">
              <SelectTrigger className="w-32 glow-button border-primary/30 bg-background/40">
                <Globe className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card/95 backdrop-blur-xl border-primary/30">
                <SelectItem value="en">🇺🇸 English</SelectItem>
                <SelectItem value="hi">🇮🇳 हिंदी</SelectItem>
                <SelectItem value="te">🇮🇳 తెలుగు</SelectItem>
                <SelectItem value="ta">🇮🇳 தமிழ்</SelectItem>
                <SelectItem value="bn">🇮🇳 বাংলা</SelectItem>
                <SelectItem value="mr">🇮🇳 मराठी</SelectItem>
                <SelectItem value="gu">🇮🇳 ગુજરાતી</SelectItem>
                <SelectItem value="kn">🇮🇳 ಕನ್ನಡ</SelectItem>
                <SelectItem value="ml">🇮🇳 മലയാളം</SelectItem>
                <SelectItem value="pa">🇮🇳 ਪੰਜਾਬੀ</SelectItem>
                <SelectItem value="ur">🇮🇳 اردو</SelectItem>
                <SelectItem value="es">🇪🇸 Español</SelectItem>
                <SelectItem value="fr">🇫🇷 Français</SelectItem>
                <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
                <SelectItem value="ja">🇯🇵 日本語</SelectItem>
                <SelectItem value="ko">🇰🇷 한국어</SelectItem>
                <SelectItem value="zh">🇨🇳 中文</SelectItem>
                <SelectItem value="ar">🇸🇦 العربية</SelectItem>
                <SelectItem value="ru">🇷🇺 Русский</SelectItem>
              </SelectContent>
            </Select>

            {/* Login/Signup Button */}
            <Link to="/login">
              <Button className="glow-button bg-primary hover:bg-primary-glow text-primary-foreground font-bold px-6 py-2 shadow-[0_0_25px_hsl(var(--primary-glow)/0.4)] hover:shadow-[0_0_40px_hsl(var(--primary-glow)/0.7)] transition-all duration-300">
                Login / Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
