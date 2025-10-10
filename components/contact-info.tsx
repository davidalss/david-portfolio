"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "david.alisson92@outlook.com",
    href: "mailto:david.alisson92@outlook.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+55 (41) 99115-2861",
    href: "tel:+5541991152861",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "São José dos Pinhais, PR - Brazil",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/davidalss",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/davidalss",
  },
]

export function ContactInfo() {
  const handleDownloadCV = () => {
    // In a real implementation, this would download the actual CV file
    console.log("[v0] Downloading CV...")
    // You can replace this with a link to your actual CV file
    // window.open('/cv/david-alisson-cv.pdf', '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Contact Details */}
      <div className="bg-surface-elevated border border-border rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">
          <span className="gradient-text">Contact Information</span>
        </h2>

        <div className="space-y-4">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex items-start gap-4">
              <div className="p-2 bg-primary-muted rounded-lg">
                <detail.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground-subtle mb-1">{detail.label}</p>
                {detail.href ? (
                  <a href={detail.href} className="text-foreground hover:text-primary transition-colors font-medium">
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{detail.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-surface-elevated border border-border rounded-lg p-8">
        <h3 className="text-xl font-bold mb-6">
          <span className="gradient-text">Connect on Social</span>
        </h3>

        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface border border-border rounded-lg hover:border-primary hover:bg-primary-muted transition-all group"
            >
              <social.icon className="h-5 w-5 text-foreground-muted group-hover:text-primary transition-colors" />
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* CV Download */}
      <div className="bg-surface-elevated border border-border rounded-lg p-8">
        <h3 className="text-xl font-bold mb-4">
          <span className="gradient-text">Download CV</span>
        </h3>
        <p className="text-foreground-muted text-sm mb-6 leading-relaxed">
          Get a detailed overview of my experience, skills, and education in PDF format.
        </p>
        <Button onClick={handleDownloadCV} className="w-full bg-primary hover:bg-primary-hover text-background group">
          <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          Download CV (PDF)
        </Button>
      </div>

      {/* Availability */}
      <div className="bg-surface-elevated border border-border rounded-lg p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
          <h3 className="text-xl font-bold">
            <span className="gradient-text">Available for Opportunities</span>
          </h3>
        </div>
        <p className="text-foreground-muted text-sm leading-relaxed">
          I'm currently open to new opportunities in full-stack development, automation, and quality systems. Let's
          discuss how I can contribute to your team.
        </p>
      </div>
    </motion.div>
  )
}
