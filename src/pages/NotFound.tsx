import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import MetaTags from '@/components/MetaTags'
import { useEffect } from 'react'

export default function NotFound() {
  // Set proper 404 status for production (this works for SPA when served with proper server config)
  useEffect(() => {
    // This sets the document title to indicate 404 to crawlers
    document.title = "404 - Page Not Found | Matt Trice Design";
  }, []);
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <MetaTags 
        title="404 - Page Not Found | Matt Trice Design"
        description="The page you're looking for doesn't exist."
        noindex={true}
      />
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/fuzzy-404.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-500/70" />

      {/* Content Overlay */}
      <div className="relative z-10 container flex flex-col items-center justify-center min-h-screen gap-6 py-8 md:py-12 lg:py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="w-[80vw] text-center text-[20vh] sm:text-[25vh] md:text-[30vh] lg:text-[35vh] font-bold">
            404
          </h1>
          <h2 className="text-body-lg md:text-body-xl text-foreground w-[80vw] text-center">
            Oops! Not found.
          </h2>
        </div>
        
        <Link to="/">
          <Button
            size="lg"
            className="text-primary-foreground"
            icon={ArrowLeft}
            iconPlacement="left"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
} 