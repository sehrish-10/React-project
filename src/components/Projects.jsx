/* import { useEffect, useRef } from "react"
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
          y: 80,
          scale: 0.96,
          duration: 1.2,
          ease: "power2.out",

          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "restart none restart none",
          },
        })
      })

      // Recalculate trigger positions once all images inside this section have loaded
      const images = projectsRef.current.querySelectorAll("img")
      let loadedCount = 0

      const checkAllLoaded = () => {
        if (loadedCount === images.length) {
          ScrollTrigger.refresh()
        }
      }

      if (images.length === 0) {
        ScrollTrigger.refresh()
      } else {
        images.forEach((img) => {
          if (img.complete) {
            loadedCount++
          } else {
            img.addEventListener("load", () => {
              loadedCount++
              checkAllLoaded()
            })
          }
        })
        checkAllLoaded()
      }
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

        <h2 className="mb-8 text-center text-3xl font-medium text-[var(--text-primary)] lg:text-4xl">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center">

          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
            >

              <div className="flex-grow overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm">

                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="mb-2 text-lg font-medium text-[var(--text-primary)] lg:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mb-4 text-[var(--text-secondary)]">
                    {project.description}
                  </p>

                  <div className="mb-5">

                    <strong className="text-[var(--text-primary)]">
                      Tech Stack:
                    </strong>

                    <ul className="mt-2">

                      {project.techStack.map((tech, index) => (
                        <li
                          key={index}
                          className="mb-1 mr-2 inline-block rounded-full border-2 border-[var(--accent)]/40 px-3 py-1 text-sm font-semibold text-[var(--accent-light)]"
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
                      className="rounded-full border border-[var(--accent)]/40 px-4 py-2 text-sm text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:shadow-lg hover:shadow-[var(--accent)]/30"
                    >
                      GitHub
                    </a>

                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[var(--accent)]/40 px-4 py-2 text-sm text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:shadow-lg hover:shadow-[var(--accent)]/30"
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

export default Projects */






import { useEffect, useRef } from "react"
import { PROJECTS } from "../constants"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const projectsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card")

      cards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 80,
          scale: 0.96,
          duration: 1.2,
          ease: "power2.out",

          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "restart none restart none",
          },
        })
      })

      // Refresh ScrollTrigger after project images load
      const images = projectsRef.current.querySelectorAll("img")

      let loadedCount = 0

      const checkAllLoaded = () => {
        if (loadedCount === images.length) {
          ScrollTrigger.refresh()
        }
      }

      const imageListeners = []

      if (images.length === 0) {
        ScrollTrigger.refresh()
      } else {
        images.forEach((img) => {
          if (img.complete) {
            loadedCount++
          } else {
            const handleLoad = () => {
              loadedCount++
              checkAllLoaded()
            }

            img.addEventListener("load", handleLoad)

            imageListeners.push({
              img,
              handleLoad,
            })
          }
        })

        checkAllLoaded()
      }

      return () => {
        imageListeners.forEach(({ img, handleLoad }) => {
          img.removeEventListener("load", handleLoad)
        })
      }
    }, projectsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="w-full overflow-visible pt-16"
    >
      <div className="w-full overflow-visible px-4">

        {/* Heading */}
        <h2 className="mb-8 text-center text-3xl font-medium text-[var(--text-primary)] lg:text-4xl">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="flex w-full flex-wrap justify-center overflow-visible">

          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
            >
              <div
                className="
                  flex-grow
                  overflow-hidden
                  rounded-lg
                  border
                  border-[var(--border)]
                  bg-[var(--card-bg)]
                  backdrop-blur-sm
                "
              >

                {/* Project Image */}
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">

                  {/* Project Title */}
                  <h3 className="mb-2 text-lg font-medium text-[var(--text-primary)] lg:text-2xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 text-[var(--text-secondary)]">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-5">

                    <strong className="text-[var(--text-primary)]">
                      Tech Stack:
                    </strong>

                    <ul className="mt-2">

                      {project.techStack.map((tech, index) => (
                        <li
                          key={index}
                          className="
                            mb-1
                            mr-2
                            inline-block
                            rounded-full
                            border-2
                            border-[var(--accent)]/40
                            px-3
                            py-1
                            text-sm
                            font-semibold
                            text-[var(--accent-light)]
                          "
                        >
                          {tech}
                        </li>
                      ))}

                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">

                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        rounded-full
                        border
                        border-[var(--accent)]/40
                        px-4
                        py-2
                        text-sm
                        text-[var(--text-primary)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[var(--accent)]
                        hover:bg-[var(--accent)]
                        hover:text-white
                        hover:shadow-lg
                        hover:shadow-[var(--accent)]/30
                      "
                    >
                      GitHub
                    </a>

                    {/* Live Demo */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        rounded-full
                        border
                        border-[var(--accent)]/40
                        px-4
                        py-2
                        text-sm
                        text-[var(--text-primary)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[var(--accent)]
                        hover:bg-[var(--accent)]
                        hover:text-white
                        hover:shadow-lg
                        hover:shadow-[var(--accent)]/30
                      "
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
