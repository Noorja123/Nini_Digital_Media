"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Branding", "Video", "Campaigns", "Events", "Social"]

const portfolioItems = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    type: "image",
    color: "from-primary/30 to-secondary/30",
    size: "large",
  },
  {
    id: 2,
    title: "Product Launch Video",
    category: "Video",
    type: "video",
    color: "from-secondary/30 to-accent/30",
    size: "medium",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    category: "Campaigns",
    type: "image",
    color: "from-accent/30 to-primary/30",
    size: "small",
  },
  {
    id: 4,
    title: "Corporate Event Coverage",
    category: "Events",
    type: "video",
    color: "from-primary/30 to-accent/30",
    size: "medium",
  },
  {
    id: 5,
    title: "Instagram Growth Strategy",
    category: "Social",
    type: "image",
    color: "from-secondary/30 to-primary/30",
    size: "small",
  },
  {
    id: 6,
    title: "Film Promotion Campaign",
    category: "Campaigns",
    type: "video",
    color: "from-accent/30 to-secondary/30",
    size: "large",
  },
  {
    id: 7,
    title: "Logo Design System",
    category: "Branding",
    type: "image",
    color: "from-primary/30 to-secondary/30",
    size: "small",
  },
  {
    id: 8,
    title: "Motion Graphics Reel",
    category: "Video",
    type: "video",
    color: "from-secondary/30 to-accent/30",
    size: "medium",
  },
]

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === "All" || item.category === activeFilter
  )

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative overflow-hidden bg-muted/20">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-foreground text-balance">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our latest projects spanning branding, video production, 
            digital campaigns, and more.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className={
                activeFilter === category
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className={`relative break-inside-avoid group cursor-pointer ${
                  item.size === "large" ? "aspect-[4/5]" : item.size === "medium" ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                <div className={`absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br ${item.color} border border-border`}>
                  {/* Placeholder Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      {item.type === "video" && (
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                          <Play className="w-6 h-6 text-primary ml-1" />
                        </div>
                      )}
                      <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/40 to-secondary/40" />
                      <p className="text-foreground/60 text-sm">{item.title}</p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col items-center justify-end p-6"
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        y: hoveredItem === item.id ? 0 : 20,
                        opacity: hoveredItem === item.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <span className="text-primary text-sm font-medium">{item.category}</span>
                      <h3 className="text-xl font-bold text-foreground mt-1">{item.title}</h3>
                      <div className="flex items-center justify-center gap-3 mt-4">
                        {item.type === "video" && (
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform">
                            <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
                          </div>
                        )}
                        <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center hover:scale-110 transition-transform">
                          <ExternalLink className="w-4 h-4 text-foreground" />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:border-primary/50 group bg-transparent"
          >
            View All Projects
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
