"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        // Reset success message after 3 seconds
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-surface-elevated border border-border rounded-lg p-8"
    >
      <h2 className="text-2xl font-bold mb-6">
        <span className="gradient-text">Send a Message</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-foreground mb-2 block">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-surface border-border text-foreground placeholder:text-foreground-subtle"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-foreground mb-2 block">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="bg-surface border-border text-foreground placeholder:text-foreground-subtle"
          />
        </div>

        <div>
          <Label htmlFor="subject" className="text-foreground mb-2 block">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className="bg-surface border-border text-foreground placeholder:text-foreground-subtle"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-foreground mb-2 block">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me more..."
            rows={6}
            className="bg-surface border-border text-foreground placeholder:text-foreground-subtle resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full bg-primary hover:bg-primary-hover text-background group"
        >
          {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {status === "success" && <CheckCircle2 className="mr-2 h-4 w-4" />}
          {status === "idle" && <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
          {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
        </Button>

        {status === "error" && (
          <p className="text-sm text-error text-center">Something went wrong. Please try again.</p>
        )}
      </form>
    </motion.div>
  )
}
