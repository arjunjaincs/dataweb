import { Shield, Lock, Database, Cpu, Wifi, Globe } from "lucide-react"

const FloatingElements = () => {
  const elements = [
    { icon: Shield, position: { top: "30%", left: "20%" }, delay: 0, size: "h-12 w-12" },
    { icon: Lock, position: { top: "60%", left: "80%" }, delay: 1000, size: "h-10 w-10" },
    { icon: Database, position: { top: "20%", left: "70%" }, delay: 2000, size: "h-8 w-8" },
    { icon: Cpu, position: { top: "70%", left: "15%" }, delay: 3000, size: "h-10 w-10" },
    { icon: Wifi, position: { top: "40%", left: "85%" }, delay: 4000, size: "h-8 w-8" },
    { icon: Globe, position: { top: "80%", left: "60%" }, delay: 1500, size: "h-9 w-9" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => {
        const IconComponent = element.icon
        return (
          <div
            key={index}
            className="absolute float-animation-enhanced opacity-40 hover:opacity-70 transition-opacity duration-500"
            style={{
              top: element.position.top,
              left: element.position.left,
              animationDelay: `${element.delay}ms`,
              animationDuration: "8s",
            }}
          >
            <div className="p-4 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 shadow-[0_0_35px_hsl(var(--primary-glow)/0.35)]">
              <IconComponent className={`${element.size} text-primary/90`} />
            </div>
          </div>
        )
      })}

      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary-glow rounded-full opacity-20 float-animation"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6000}ms`,
              animationDuration: `${6 + Math.random() * 4}s`,
              boxShadow: `0 0 ${8 + Math.random() * 12}px hsl(var(--primary-glow)/0.5)`,
              filter: "blur(0px)", // Removed blur for sharper particles
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-15 float-animation"
            style={{
              width: `${60 + Math.random() * 80}px`,
              height: `${60 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, hsl(var(--primary-glow)/0.3) 0%, transparent 70%)`,
              animationDelay: `${Math.random() * 8000}ms`,
              animationDuration: `${8 + Math.random() * 6}s`,
              filter: "blur(0px)", // Removed blur for sharper orbs
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default FloatingElements
