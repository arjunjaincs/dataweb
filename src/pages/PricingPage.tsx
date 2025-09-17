import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Crown, Zap, Building, Users, Shield } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import FloatingElements from "@/components/FloatingElements"

const PricingPage = () => {
  const pricingTiers = [
    {
      name: "Community Edition",
      subtitle: "Free Forever",
      price: "₹0",
      period: "forever",
      description: "Perfect for individual users and students",
      icon: Users,
      popular: false,
      features: [
        "Single device wiping",
        "Basic NIST-compliant algorithms",
        "Standard PDF certificates",
        "Community support",
        "Open-source core",
        "Basic device health scan",
      ],
      limitations: ["Limited to 5 devices per month", "Community support only", "Basic certificate format"],
      cta: "Get Started Free",
      highlight: false,
    },
    {
      name: "Professional Edition",
      subtitle: "For IT Service Providers",
      price: "₹29",
      period: "month",
      yearlyPrice: "₹290",
      description: "Ideal for IT service providers and small recyclers",
      icon: Zap,
      popular: true,
      features: [
        "Batch wiping (up to 50 devices/month)",
        "Advanced military-grade algorithms",
        "Blockchain-verified certificates",
        "Priority email support",
        "Custom branding options",
        "API access (limited)",
        "Advanced device health scan",
        "Compliance reporting",
      ],
      limitations: [],
      cta: "Start Professional Trial",
      highlight: true,
    },
    {
      name: "Enterprise Edition",
      subtitle: "For Large Organizations",
      price: "₹199",
      period: "month",
      yearlyPrice: "₹1,990",
      description: "Complete solution for corporations and major recyclers",
      icon: Building,
      popular: false,
      features: [
        "Unlimited device wiping",
        "Centralized management dashboard",
        "Full API integration",
        "Custom compliance reporting",
        "White-label licensing",
        "On-site training included",
        "24/7 phone support",
        "SLA guarantees",
        "Advanced analytics",
        "Multi-location support",
      ],
      limitations: [],
      cta: "Request Enterprise Demo",
      highlight: false,
    },
    {
      name: "Government Edition",
      subtitle: "For Public Sector",
      price: "Custom",
      period: "pricing",
      description: "Sovereign data security for government organizations",
      icon: Shield,
      popular: false,
      features: [
        "All Enterprise features",
        "Government compliance modules",
        "Air-gapped deployment options",
        "Custom security requirements",
        "Dedicated support team",
        "Training programs",
        "Audit trail & forensics",
        "Multi-level security clearance",
        "Sovereign cloud deployment",
        "Custom integration support",
      ],
      limitations: [],
      cta: "Contact Government Sales",
      highlight: false,
    },
  ]

  const additionalServices = [
    {
      name: "Certification Services",
      description: "Third-party verification and legal-grade documentation",
      pricing: "₹5 - ₹50 per certificate",
      features: ["Automated verification", "Legal-grade documentation", "Court-admissible reports"],
    },
    {
      name: "Hardware Solutions",
      description: "Dedicated wiping appliances and portable stations",
      pricing: "₹99,900 - ₹2,99,900",
      features: ["Pre-configured hardware", "Rack-mountable design", "3-year warranty"],
    },
    {
      name: "Training & Consulting",
      description: "Professional training and implementation support",
      pricing: "₹29,900 - ₹5,00,000",
      features: ["Certified technician training", "Custom implementation", "Ongoing support"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Navbar />

      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/20 border border-primary/30">
                <Crown className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Choose Your DataWipe Pro Plan</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              From individual users to enterprise organizations, we have the perfect solution for your secure data
              wiping needs. All plans include our revolutionary blockchain-verified certificates.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`stats-card relative ${tier.highlight ? "border-primary/60 bg-primary/5" : ""} ${tier.popular ? "scale-105" : ""}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3">
                    <div
                      className={`p-3 rounded-full ${tier.highlight ? "bg-primary/20" : "bg-muted/20"} border border-primary/30`}
                    >
                      <tier.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription className="text-sm">{tier.subtitle}</CardDescription>

                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold">{tier.price}</span>
                      {tier.period !== "pricing" && tier.period !== "forever" && (
                        <span className="text-muted-foreground ml-1">/{tier.period}</span>
                      )}
                    </div>
                    {tier.yearlyPrice && (
                      <p className="text-sm text-muted-foreground mt-1">or {tier.yearlyPrice}/year (save 17%)</p>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {tier.limitations.length > 0 && (
                    <div className="pt-2 border-t border-border/20">
                      <p className="text-xs text-muted-foreground mb-2">Limitations:</p>
                      {tier.limitations.map((limitation, limitIndex) => (
                        <p key={limitIndex} className="text-xs text-muted-foreground">
                          • {limitation}
                        </p>
                      ))}
                    </div>
                  )}

                  <div className="pt-4">
                    <Button
                      className={`w-full glow-button ${tier.highlight ? "bg-primary hover:bg-primary-glow" : ""}`}
                      variant={tier.highlight ? "default" : "outline"}
                    >
                      {tier.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Additional Services & Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="stats-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="text-primary font-semibold">{service.pricing}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="stats-card mb-8">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Can I upgrade or downgrade my plan anytime?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take
                  effect at the next billing cycle.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                <p className="text-sm text-muted-foreground">
                  We accept all major credit cards, UPI, net banking, and for enterprise customers, we also accept bank
                  transfers and purchase orders.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Is there a free trial for paid plans?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, all paid plans come with a 14-day free trial. No credit card required for the trial period.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What makes DataWipe Pro certificates special?</h4>
                <p className="text-sm text-muted-foreground">
                  Our certificates are blockchain-verified, making them tamper-proof and independently verifiable. This
                  builds unprecedented trust in the IT asset recycling process.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="stats-card border-primary/50 bg-primary/5">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">Ready to Transform Your Data Security?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of organizations already using DataWipe Pro to securely wipe their devices and build
                  trust in IT asset recycling.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/login">
                    <Button className="glow-button bg-primary hover:bg-primary-glow">Start Free Trial</Button>
                  </Link>
                  <Link to="/live-dashboard">
                    <Button variant="outline" className="glow-button bg-transparent">
                      View Live Demo
                    </Button>
                  </Link>
                  <Link to="/comparison">
                    <Button variant="outline" className="glow-button bg-transparent">
                      Compare Plans
                    </Button>
                  </Link>
                </div>
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

export default PricingPage
