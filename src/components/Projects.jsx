import { useEffect, useRef } from "react"
import { PROJECTS } from "../constants"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const projectsRef = useRef(null)

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.utils.toArray(".project-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
    })
  }, projectsRef)

  return () => ctx.revert()
}, [])

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="pt-16"
    >
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium text-[#EDE7E0] lg:text-4xl">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
            >
              <div className="flex-grow overflow-hidden rounded-lg border border-[#C97B4A]/30 bg-white/5 backdrop-blur-sm">

                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium text-[#EDE7E0] lg:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mb-4 text-[#A8AEB8]">
                    {project.description}
                  </p>

                  <div className="mb-5">
                    <strong className="text-[#EDE7E0]">
                      Tech Stack:
                    </strong>

                    <ul className="mt-2">
                      {project.techStack.map((tech, index) => (
                        <li
                          key={index}
                          className="mb-1 mr-2 inline-block rounded-full border-2 border-[#C97B4A]/40 px-3 py-1 text-sm font-semibold text-[#E0A87E]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#C97B4A]/40 px-4 py-2 text-sm text-[#EDE7E0] transition-all duration-300 hover:-translate-y-1 hover:border-[#C97B4A] hover:bg-[#C97B4A] hover:text-[#EDE7E0] hover:shadow-lg hover:shadow-[#C97B4A]/30"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#C97B4A]/40 px-4 py-2 text-sm text-[#EDE7E0] transition-all duration-300 hover:-translate-y-1 hover:border-[#C97B4A] hover:bg-[#C97B4A] hover:text-[#EDE7E0] hover:shadow-lg hover:shadow-[#C97B4A]/30"
                    >
                      Live Demo
                    </a>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects





// need to add company name with proper date in the expoerience, in the education, add metric.and add  form in the contact area.