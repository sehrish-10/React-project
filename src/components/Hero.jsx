import { useRef, useEffect } from "react"
import { PROFILE } from "../constants"
import { RiArrowRightUpLine } from "@remixicon/react"
import sehrish from "../assets/sehrish (2).webp"
import { gsap } from "gsap"

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      })

      tl.fromTo(
        ".hero-title",
        {
          opacity: 0,
          y: -50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
        }
      )

        .fromTo(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.35"
        )

        .fromTo(
          ".hero-text",
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.35"
        )

        .fromTo(
          ".hero-btn-wrap",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.35"
        )

        .fromTo(
          ".hero-img",
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
          },
          "-=0.35"
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6"
    >
      <div className="mt-8 lg:mt-20">
        <h1 className="hero-title text-4xl uppercase text-[#EDE7E0] lg:text-7xl">
          {PROFILE.name}
        </h1>

        <h2 className="hero-subheading bg-gradient-to-r from-[#C97B4A] to-[#E0A87E] bg-clip-text text-center text-2xl tracking-tighter text-transparent">
          {PROFILE.role}
        </h2>
      </div>

      <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter text-[#A8AEB8] lg:text-2xl">
        {PROFILE.subheading}
      </p>

      <div className="hero-btn-wrap mb-6">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="hero-btn flex items-center gap-1 rounded-full border border-[#C97B4A]/50 bg-[#C97B4A]/10 px-4 py-2 tracking-tighter text-[#EDE7E0] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C97B4A] hover:bg-[#C97B4A] hover:text-white hover:shadow-lg hover:shadow-[#C97B4A]/30"
        >
          <span>Download Resume</span>
          <RiArrowRightUpLine size={18} />
        </a>
      </div>

      <img
        src={sehrish}
        alt={PROFILE.name}
        width={400}
        height={400}
        className="hero-img rounded-3xl border border-[#C97B4A]/40 p-1"
      />
    </section>
  )
}

export default Hero