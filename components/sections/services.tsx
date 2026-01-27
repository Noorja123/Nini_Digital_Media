"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Megaphone,
  Tv,
  Video,
  Sparkles,
  Calendar,
  Film,
  Share2,
  Target,
  FileText,
  Star,
  Music,
  Plane,
} from "lucide-react"

const services = [
  {
    title: "Advertising & Branding",
    description: "Strategic campaigns that capture attention and drive results across all channels.",
    icon: Megaphone,
    hasVideo: false,
  },
  {
    title: "Public Relations",
    description: "Build credibility and manage your reputation with expert PR strategies.",
    icon: FileText,
    hasVideo: false,
  },
  {
    title: "Digital Campaigns",
    description: "Data-driven digital marketing that reaches your audience where they are.",
    icon: Tv,
    hasVideo: false,
  },
  {
    title: "Videography",
    description: "Professional video production that tells your story beautifully.",
    icon: Video,
    hasVideo: true,
    videoSrc: "/videography-demo.mp4",
  },
  {
    title: "Motion Graphics",
    description: "Eye-catching animations that bring your brand to life.",
    icon: Sparkles,
    hasVideo: true,
    videoSrc: "/motion-demo.mp4",
  },
  {
    title: "Events",
    description: "End-to-end event management for memorable brand experiences.",
    icon: Calendar,
    hasVideo: false,
  },
  {
    title: "Film Marketing",
    description: "Comprehensive marketing strategies for films and entertainment.",
    icon: Film,
    hasVideo: true,
    videoSrc: "/film-marketing-demo.mp4",
  },
  {
    title: "Social Media",
    description: "Engaging social strategies that build communities and drive engagement.",
    icon: Share2,
    hasVideo: false,
  },
  {
    title: "Branding Strategy",
    description: "Define your brand identity with strategic positioning and design.",
    icon: Target,
    hasVideo: false,
  },
  {
    title: "Content Creation",
    description: "Compelling content that resonates with your target audience.",
    icon: FileText,
    hasVideo: false,
  },
  {
    title: "Endorsements",
    description: "Connect with the right influencers and celebrities for your brand.",
    icon: Star,
    hasVideo: false,
  },
  {
    title: "Music & Travel",
    description: "Specialized marketing for music artists and travel tourism.",
    icon: Music,
    hasVideo: false,
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300">
        {/* Video Background */}
        {service.hasVideo && (
          <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute inset-0 bg-background/80 z-10 transition-opacity duration-300 ${isHovered ? "opacity-60" : "opacity-90"}`} />
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-110"
            >
              <source src={service.videoSrc} type="video/mp4" />
            </video>
          </div>
        )}

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20" />

        {/* Content */}
        <div className="relative z-30 p-6">
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-primary" />
          </div>

          {/* Title & Description */}
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {service.description}
          </p>

          {/* Video indicator */}
          {service.hasVideo && (
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-accent">Demo Available</span>
            </div>
          )}

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-muted/20">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground text-balance">
            Full-Spectrum{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            From traditional advertising to cutting-edge digital campaigns, we offer 
            comprehensive services to elevate your brand across every platform.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Additional Services Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {services.slice(6).map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border hover:border-primary/30 transition-all cursor-pointer group"
              >
                <service.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {service.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
