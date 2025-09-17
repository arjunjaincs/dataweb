import { Shield, Github, Mail, Globe, Award, Users, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="relative bg-card/40 backdrop-blur-xl border-t border-primary/30 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">DataWipe Pro</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Secure, verifiable data wiping solution for India's circular economy. Building trust in IT asset recycling
              with NIST-compliant erasure.
            </p>
            <div className="flex items-center space-x-2 text-sm text-primary">
              <Award className="h-4 w-4" />
              <span>NIST SP 800-88 Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/live-dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Live Dashboard
                </a>
              </li>
              <li>
                <a href="/verify" className="text-muted-foreground hover:text-primary transition-colors">
                  Verify Certificate
                </a>
              </li>
              <li>
                <a href="/comparison" className="text-muted-foreground hover:text-primary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="/admin" className="text-muted-foreground hover:text-primary transition-colors">
                  Admin Panel
                </a>
              </li>
            </ul>
          </div>

          {/* Impact Stats */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Our Impact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Recycle className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">1.2M+ Devices Wiped</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">50K+ Happy Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Zero Data Breaches</span>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="space-y-3">
              <Button
                variant="ghost"
                size="sm"
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4 mr-2" />
                support@datawipepro.in
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary"
              >
                <Github className="h-4 w-4 mr-2" />
                Open Source Project
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Developed for SIH 2024
              <br />
              Ministry of Mines • JNARDDC
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">© 2025 DataWipe Pro. Advancing India's Circular Economy.</p>
          <div className="flex space-x-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </footer>
  )
}

export default Footer
