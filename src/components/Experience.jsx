/* import { useEffect, useRef } from "react"
import { EXPERIENCES } from "../constants"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const experienceRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,

        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
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
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl font-medium text-[#EDE7E0] lg:text-4xl">
          Experience
        </h2>

        <div className="flex flex-col space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="experience-item flex flex-col items-start justify-between md:flex-row"
            >
              <div className="w-full text-sm font-semibold text-[#C97B4A] md:w-1/4 lg:text-lg">
                {exp.yearRange}
              </div>

              <div className="w-full md:w-3/4">
                <h3 className="mb-2 text-lg text-[#EDE7E0] lg:text-2xl">
                  {exp.role} -{" "}
                  <span className="bg-gradient-to-r from-[#C97B4A] to-[#E0A87E] bg-clip-text text-transparent">
                    {exp.company}
                  </span>
                </h3>

                <p className="mb-4 text-sm text-[#A8AEB8] lg:text-base">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, id) => (
                    <span
                      key={id}
                      className="rounded-full border-2 border-[#C97B4A]/40 px-3 py-1 text-sm font-semibold text-[#E0A87E]"
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

export default Experience */







import { useEffect, useRef } from "react"
import { EXPERIENCES } from "../constants"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const experienceRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main experience items
      gsap.from(".experience-item", {
        opacity: 0,
        y: 70,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Years slide in from the left
      gsap.from(".experience-year", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Content slides in from the right
      gsap.from(".experience-content", {
        opacity: 0,
        x: 50,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      gsap.from(".experience-tech", {
        opacity: 0,
        y: 15,
        scale: 0.8,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.08,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
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
      <div className="mx-auto max-w-4xl px-4">

        <h2 className="mb-12 text-center text-3xl font-medium text-[#EDE7E0] lg:text-4xl">
          Experience
        </h2>

        <div className="flex flex-col space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="experience-item flex flex-col items-start justify-between md:flex-row"
            >

              <div className="experience-year w-full text-sm font-semibold text-[#C97B4A] md:w-1/4 lg:text-lg">
                {exp.yearRange}
              </div>

              <div className="experience-content w-full md:w-3/4">

                <h3 className="mb-2 text-lg text-[#EDE7E0] lg:text-2xl">
                  {exp.role} -{" "}
                  <span className="bg-gradient-to-r from-[#C97B4A] to-[#E0A87E] bg-clip-text text-transparent">
                    {exp.company}
                  </span>
                </h3>

                <p className="mb-4 text-sm text-[#A8AEB8] lg:text-base">
                  {exp.description}
                </p>

                
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, id) => (
                    <span
                      key={id}
                      className="experience-tech rounded-full border-2 border-[#C97B4A]/40 px-3 py-1 text-sm font-semibold text-[#E0A87E]"
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