/* import { useEffect, useRef } from "react"
import { EXPERIENCES } from "../constants"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const experienceRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".experience-item")

      items.forEach((item) => {
        const year = item.querySelector(".experience-year")
        const content = item.querySelector(".experience-content")
        const tech = item.querySelectorAll(".experience-tech")

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })

        tl.from(item, {
          opacity: 0,
          y: 80,
          scale: 0.97,
          duration: 1,
          ease: "power3.out",
        })

          .from(
            year,
            {
              opacity: 0,
              x: -50,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.7"
          )

          .from(
            content,
            {
              opacity: 0,
              x: 50,
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.7"
          )

          .from(
            tech,
            {
              opacity: 0,
              y: 20,
              scale: 0.8,
              duration: 0.5,
              ease: "back.out(1.7)",
              stagger: 0.08,
            },
            "-=0.5"
          )
      })
    }, experienceRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      className="py-16"
      id="experience"
      ref={experienceRef}
    >
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="mb-16 text-center text-3xl font-medium text-[#EDE7E0] lg:text-4xl">
          Experience
        </h2>

        <div className="flex flex-col space-y-16">

          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="experience-item grid grid-cols-1 gap-8 md:grid-cols-[260px_1fr] md:gap-12"
            >

              <div className="experience-year border-l-2 border-[#C97B4A]/40 pl-5">

                <p className="text-sm font-semibold text-[#C97B4A] lg:text-base">
                  July 7th – September 1st
                </p>

                <h3 className="mt-3 text-base font-semibold text-[#EDE7E0] lg:text-lg">
                  Encova Solution Pvt Limited
                </h3>

                <p className="mt-1 text-sm text-[#A8AEB8]">
                  Peshawar
                </p>

              </div>

              <div className="experience-content">

                <h3 className="mb-3 text-xl font-medium text-[#EDE7E0] lg:text-2xl">
                  {exp.role}
                </h3>

                <p className="mb-6 max-w-3xl text-sm leading-7 text-[#A8AEB8] lg:text-base">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {exp.techStack.map((tech, id) => (
                    <span
                      key={id}
                      className="experience-tech rounded-full border border-[#C97B4A]/40 px-4 py-1.5 text-sm font-semibold text-[#E0A87E] transition-all duration-300 hover:border-[#C97B4A] hover:bg-[#C97B4A]/10"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Experience  */





import { useEffect, useRef } from "react"
import { EXPERIENCES } from "../constants"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const experienceRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".experience-item")

      items.forEach((item) => {
        const year = item.querySelector(".experience-year")
        const content = item.querySelector(".experience-content")
        const tech = item.querySelectorAll(".experience-tech")

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            // toggleActions: "play none none none",
            toggleActions: "restart none restart none",
          },
        })

        tl.from(item, {
          opacity: 0,
          y: 45,
          scale: 0.98,
          duration: 0.6,
          ease: "power2.out",
        })

          .from(
            year,
            {
              opacity: 0,
              x: -30,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.4"
          )

          .from(
            content,
            {
              opacity: 0,
              x: 30,
              duration: 0.55,
              ease: "power2.out",
            },
            "-=0.4"
          )

          .from(
            tech,
            {
              opacity: 0,
              y: 12,
              scale: 0.9,
              duration: 0.35,
              ease: "back.out(1.5)",
              stagger: 0.05,
            },
            "-=0.3"
          )
      })
    }, experienceRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      className="py-16"
      id="experience"
      ref={experienceRef}
    >
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <h2 className="mb-16 text-center text-3xl font-medium text-[var(--text-primary)] lg:text-4xl">
          Experience
        </h2>

        <div className="flex flex-col space-y-16">

          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="experience-item grid grid-cols-1 gap-8 md:grid-cols-[260px_1fr] md:gap-12"
            >

              {/* Experience Details */}
              <div className="experience-year border-l-2 border-[var(--accent)]/40 pl-5">

                <p className="text-sm font-semibold text-[var(--accent)] lg:text-base">
                  July 7th – September 1st
                </p>

                <h3 className="mt-3 text-base font-semibold text-[var(--text-primary)] lg:text-lg">
                  Encova Solution Pvt Limited
                </h3>

                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Peshawar
                </p>

              </div>

              {/* Experience Content */}
              <div className="experience-content">

                <h3 className="mb-3 text-xl font-medium text-[var(--text-primary)] lg:text-2xl">
                  {exp.role}
                </h3>

                <p className="mb-6 max-w-3xl text-sm leading-7 text-[var(--text-secondary)] lg:text-base">
                  {exp.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">

                  {exp.techStack.map((tech, id) => (
                    <span
                      key={id}
                      className="experience-tech rounded-full border border-[var(--accent)]/40 px-4 py-1.5 text-sm font-semibold text-[var(--accent-light)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Experience