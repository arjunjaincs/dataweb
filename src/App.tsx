import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"
import LoginPage from "./pages/LoginPage"
import LiveDashboard from "./pages/LiveDashboard"
import CertificateVerification from "./pages/CertificateVerification"
import ComparisonPage from "./pages/ComparisonPage"
import AdminPanel from "./pages/AdminPanel"
import Chatbot from "./components/Chatbot"
import FloatingElements from "./components/FloatingElements"
import Footer from "./components/Footer"
import PricingPage from "./pages/PricingPage"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FloatingElements />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/live-dashboard" element={<LiveDashboard />} />
          <Route path="/verify" element={<CertificateVerification />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
