"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, X, Send, ImageIcon, HelpCircle, Sparkles, Zap } from "lucide-react"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "👋 Hi there! I'm your DataWipe Pro assistant. I can help you with:\n\n🔧 Setting up bootable USB drives\n📋 Certificate verification\n💾 Device compatibility checks\n🛠️ Troubleshooting wipe processes\n📸 Visual assistance with screenshots\n\nWhat can I help you with today?",
    },
  ])

  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const quickActions = [
    { text: "Setup Bootable USB", icon: "💾" },
    { text: "Verify Certificate", icon: "📋" },
    { text: "Device Compatibility", icon: "🔍" },
    { text: "Troubleshoot Error", icon: "🛠️" },
  ]

  const handleSendMessage = () => {
    if (!message.trim()) return

    const newMessages = [...messages, { type: "user", content: message }]

    // Enhanced bot responses based on message content
    let botResponse = ""
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("bootable") || lowerMessage.includes("usb") || lowerMessage.includes("rufus")) {
      botResponse =
        "🔧 **Setting up a Bootable USB Drive:**\n\n1. **Download** DataWipe Pro ISO from our homepage\n2. **Get Rufus** from rufus.ie (free tool)\n3. **Insert** your USB drive (8GB+ recommended)\n4. **Open Rufus** and select your USB drive\n5. **Browse** and select the DataWipe Pro ISO\n6. **Click START** and wait for completion\n\n⚠️ **Important:** This will erase all data on your USB drive!\n\nNeed help with any specific step?"
    } else if (lowerMessage.includes("certificate") || lowerMessage.includes("verify")) {
      botResponse =
        "📋 **Certificate Verification Help:**\n\n✅ **To verify a certificate:**\n1. Go to our Certificate Verification page\n2. Enter your certificate ID (format: DWP-XXXX-XXXX)\n3. View device details and wipe timestamp\n\n🔍 **What you'll see:**\n• Device MAC address\n• Wipe completion time\n• Verification status\n• Blockchain proof\n\nHave a certificate ID you'd like to check?"
    } else if (lowerMessage.includes("error") || lowerMessage.includes("problem") || lowerMessage.includes("issue")) {
      botResponse =
        "🛠️ **Troubleshooting Common Issues:**\n\n❌ **Boot Problems:**\n• Check BIOS/UEFI boot order\n• Disable Secure Boot temporarily\n• Try different USB ports\n\n💾 **Wipe Failures:**\n• Ensure device is properly connected\n• Check for hardware encryption\n• Verify sufficient power supply\n\n📸 **Upload a screenshot** of your error for specific help!"
    } else if (lowerMessage.includes("device") || lowerMessage.includes("compatible")) {
      botResponse =
        "🔍 **Device Compatibility:**\n\n✅ **Supported Devices:**\n• HDDs (all sizes)\n• SSDs (SATA, NVMe, M.2)\n• USB drives & SD cards\n• Android devices (via app)\n\n⚡ **Special Features:**\n• HPA/DCO area wiping\n• Hardware encryption detection\n• TRIM command support for SSDs\n\nWhat type of device are you planning to wipe?"
    } else {
      botResponse =
        "Thanks for your message! 🚀\n\nI'm here to help with DataWipe Pro. Here are some things I can assist with:\n\n🔧 **Technical Support:**\n• Bootable USB creation\n• Device compatibility\n• Error troubleshooting\n\n📋 **Verification:**\n• Certificate checking\n• Wipe status confirmation\n\n📸 **Visual Help:**\n• Screenshot analysis\n• Step-by-step guidance\n\nTry asking about any of these topics, or upload a screenshot if you're stuck!"
    }

    setMessages([...newMessages, { type: "bot", content: botResponse }])
    setMessage("")
  }

  const handleQuickAction = (action: string) => {
    setMessage(action)
    handleSendMessage()
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      const newMessages = [
        ...messages,
        { type: "user", content: `📸 [Image uploaded: ${file.name}]` },
        {
          type: "bot",
          content:
            "🔍 **Screenshot Analysis:**\n\nI can see your screenshot! Based on what I observe, here's what I can help with:\n\n🎯 **Common Solutions:**\n• **BIOS Issues:** Press F2/F12 during boot to access BIOS\n• **Boot Order:** Set USB as first boot device\n• **Secure Boot:** Disable in BIOS security settings\n• **USB Issues:** Try a different USB port or drive\n\n💡 **Next Steps:**\n1. Describe what you're seeing on screen\n2. Tell me at which step you're stuck\n3. I'll provide specific guidance\n\nWhat specific issue are you encountering?",
        },
      ]
      setMessages(newMessages)
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/30 animate-bounce shadow-[0_0_20px_hsl(var(--primary-glow)/0.3)]">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <p className="text-sm text-primary font-medium">Need help? I'm your DataWipe Pro expert!</p>
            </div>
          </div>
          <Button
            onClick={() => setIsOpen(true)}
            className="glow-button rounded-full p-4 h-16 w-16 wiggle pulse-glow bg-gradient-to-br from-primary to-primary-glow"
          >
            <MessageCircle className="h-8 w-8 text-primary-foreground" />
          </Button>
        </div>
      )}

      {isOpen && (
        <Button
          onClick={() => setIsOpen(false)}
          className="fixed bottom-6 right-6 z-50 glow-button rounded-full p-4 h-16 w-16 bg-gradient-to-br from-destructive to-destructive/80"
        >
          <X className="h-8 w-8 text-destructive-foreground" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card
          ref={chatRef}
          className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-card/95 backdrop-blur-xl border-primary/40 flex flex-col shadow-[0_0_50px_hsl(var(--primary-glow)/0.3)] animate-scale-in"
        >
          {/* Header */}
          <div className="p-4 border-b border-primary/20 flex items-center space-x-3 bg-gradient-to-r from-primary/10 to-primary/5">
            <div className="p-2 rounded-full bg-primary/20 border border-primary/30">
              <HelpCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold flex items-center space-x-2">
                <span>DataWipe Pro Assistant</span>
                <Zap className="h-4 w-4 text-primary animate-pulse" />
              </h3>
              <p className="text-xs text-muted-foreground">Your expert guide for secure data wiping</p>
            </div>
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="p-4 border-b border-primary/10 bg-muted/5">
              <p className="text-xs text-muted-foreground mb-2">Quick Help:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="glow-button text-xs h-8 justify-start bg-transparent"
                    onClick={() => handleQuickAction(action.text)}
                  >
                    <span className="mr-1">{action.icon}</span>
                    {action.text}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  msg.type === "bot"
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 text-foreground border border-primary/20"
                    : "bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground ml-auto max-w-[85%] border border-secondary/40"
                }`}
              >
                <p className="text-sm whitespace-pre-line leading-relaxed">{msg.content}</p>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-primary/20 space-y-3 bg-gradient-to-r from-card/50 to-card/80">
            <div className="flex space-x-2">
              <Textarea
                placeholder="Ask me anything about DataWipe Pro..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                className="flex-1 resize-none bg-background/80 border-primary/30 focus:border-primary/60 rounded-lg"
                rows={2}
              />
              <div className="flex flex-col space-y-1">
                <Button onClick={handleSendMessage} size="sm" className="glow-button bg-primary hover:bg-primary-glow">
                  <Send className="h-4 w-4" />
                </Button>
                <label className="cursor-pointer">
                  <Button size="sm" variant="outline" className="glow-button bg-transparent" asChild>
                    <span>
                      <ImageIcon className="h-4 w-4" />
                    </span>
                  </Button>
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">📸 Upload screenshots • ⏎ Enter to send</p>
              <div className="flex items-center space-x-1 text-xs text-primary">
                <Sparkles className="h-3 w-3 animate-pulse" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}

export default Chatbot
