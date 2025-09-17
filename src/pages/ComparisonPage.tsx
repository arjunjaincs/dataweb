import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X, Crown, Zap } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import FloatingElements from "@/components/FloatingElements"

const ComparisonPage = () => {
  const features = [
    {
      category: "Security & Verification",
      items: [
        {
          name: "Blockchain-based Certificates",
          datawipe: true,
          blancco: false,
          dban: false,
          ccleaner: false,
          others: false,
        },
        {
          name: "Open Source Transparency",
          datawipe: true,
          blancco: false,
          dban: true,
          ccleaner: false,
          others: false,
        },
        {
          name: "Third-party Verification",
          datawipe: true,
          blancco: false,
          dban: false,
          ccleaner: false,
          others: false,
        },
      ],
    },
    {
      category: "Technical Capabilities",
      items: [
        {
          name: "Offline Wipe Support",
          datawipe: true,
          blancco: true,
          dban: true,
          ccleaner: false,
          others: false,
        },
        {
          name: "AI Device Health Scan",
          datawipe: true,
          blancco: false,
          dban: false,
          ccleaner: false,
          others: false,
        },
        {
          name: "HPA/DCO Wipe Support",
          datawipe: true,
          blancco: true,
          dban: false,
          ccleaner: false,
          others: false,
        },
        {
          name: "Post-Quantum Ready (R&D)",
          datawipe: true,
          blancco: false,
          dban: false,
          ccleaner: false,
          others: false,
        },
      ],
    },
    {
      category: "User Experience",
      items: [
        {
          name: "One-Click Interface",
          datawipe: true,
          blancco: false,
          dban: false,
          ccleaner: true,
          others: false,
        },
        {
          name: "Cross-platform Support",
          datawipe: true,
          blancco: true,
          dban: true,
          ccleaner: true,
          others: true,
        },
        {
          name: "Real-time Progress Monitoring",
          datawipe: true,
          blancco: true,
          dban: false,
          ccleaner: false,
          others: false,
        },
      ],
    },
  ]

  const competitors = [
    {
      name: "DataWipe Pro",
      subtitle: "Next-Gen Solution",
      highlight: true,
      pricing: "Free - ₹199/month",
      description: "India's first blockchain-verified data wiping solution",
    },
    {
      name: "Blancco",
      subtitle: "Enterprise Leader",
      highlight: false,
      pricing: "$75-500/year per device",
      description: "Global enterprise data erasure standard",
    },
    {
      name: "DBAN",
      subtitle: "Open Source",
      highlight: false,
      pricing: "Free",
      description: "Basic open-source disk wiping utility",
    },
    {
      name: "CCleaner",
      subtitle: "Consumer Tool",
      highlight: false,
      pricing: "$40-130/year",
      description: "Popular consumer cleaning software",
    },
    {
      name: "Others",
      subtitle: "Legacy Tools",
      highlight: false,
      pricing: "Varies",
      description: "Traditional data destruction tools",
    },
  ]

  const CheckIcon = () => <Check className="h-5 w-5 text-success" />
  const CrossIcon = () => <X className="h-5 w-5 text-destructive" />

  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Navbar />

      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/20 border border-primary/30">
                <Crown className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2">Why Choose DataWipe Pro?</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how DataWipe Pro compares to traditional data wiping solutions and why we're leading the revolution in
              secure IT asset recycling.
            </p>
          </div>

          {/* Comparison Table */}
          <Card className="stats-card mb-8 overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Feature Comparison Matrix</span>
              </CardTitle>
              <CardDescription>
                Comprehensive comparison across security, technical capabilities, and user experience
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/20">
                      <th className="text-left p-4 font-semibold">Feature / Capability</th>
                      {competitors.map((competitor, index) => (
                        <th
                          key={index}
                          className={`p-4 text-center font-semibold ${competitor.highlight ? "bg-primary/5" : ""}`}
                        >
                          <div>
                            <div className="font-bold">{competitor.name}</div>
                            <div className="text-xs text-muted-foreground font-normal">{competitor.subtitle}</div>
                            <div className="text-sm font-medium text-primary mt-1">{competitor.pricing}</div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((category, categoryIndex) => (
                      <>
                        <tr key={`category-${categoryIndex}`} className="border-b border-border/10 bg-muted/20">
                          <td colSpan={6} className="p-4 font-semibold text-sm text-primary">
                            {category.category}
                          </td>
                        </tr>
                        {category.items.map((feature, featureIndex) => (
                          <tr
                            key={`feature-${categoryIndex}-${featureIndex}`}
                            className="border-b border-border/10 hover:bg-muted/10 transition-colors"
                          >
                            <td className="p-4 font-medium">{feature.name}</td>
                            <td className={`p-4 text-center ${competitors[0].highlight ? "bg-primary/5" : ""}`}>
                              {feature.datawipe ? <CheckIcon /> : <CrossIcon />}
                            </td>
                            <td className="p-4 text-center">{feature.blancco ? <CheckIcon /> : <CrossIcon />}</td>
                            <td className="p-4 text-center">{feature.dban ? <CheckIcon /> : <CrossIcon />}</td>
                            <td className="p-4 text-center">{feature.ccleaner ? <CheckIcon /> : <CrossIcon />}</td>
                            <td className="p-4 text-center">{feature.others ? <CheckIcon /> : <CrossIcon />}</td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Competitive Advantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="stats-card">
              <CardHeader>
                <CardTitle className="text-lg">Blockchain Verified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  First-ever blockchain-based certificate system ensures tamper-proof verification and builds trust in
                  the recycling ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="stats-card">
              <CardHeader>
                <CardTitle className="text-lg">India-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Designed specifically for India's ₹50,000 crore IT asset hoarding crisis with local compliance and
                  multilingual support.
                </p>
              </CardContent>
            </Card>

            <Card className="stats-card">
              <CardHeader>
                <CardTitle className="text-lg">AI-Powered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced AI health scanning predicts device lifespan and optimizes recycling workflows for maximum
                  value recovery.
                </p>
              </CardContent>
            </Card>

            <Card className="stats-card">
              <CardHeader>
                <CardTitle className="text-lg">Open Source</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Transparent, auditable code builds trust. Community-driven development ensures continuous security
                  improvements.
                </p>
              </CardContent>
            </Card>

            <Card className="stats-card">
              <CardHeader>
                <CardTitle className="text-lg">Cost-Effective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security at significantly lower cost than traditional solutions. Freemium model
                  accessible to all users.
                </p>
              </CardContent>
            </Card>

            <Card className="stats-card">
              <CardHeader>
                <CardTitle className="text-lg">Future-Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Post-quantum cryptography research and advanced device support prepare your organization for
                  tomorrow's challenges.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="stats-card border-primary/50 bg-primary/5">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">Ready to Lead the Change?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of organizations transforming India's IT asset recycling landscape with DataWipe Pro's
                  revolutionary approach to secure data destruction.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/">
                    <Button className="glow-button bg-primary hover:bg-primary-glow">Start Free Trial</Button>
                  </Link>
                  <Link to="/live-dashboard">
                    <Button variant="outline" className="glow-button bg-transparent">
                      View Live Demo
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button variant="outline" className="glow-button bg-transparent">
                      View Pricing Plans
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

export default ComparisonPage
