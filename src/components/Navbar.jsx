import {
  RiMenu3Line,
  RiCloseLine,
  RiSunLine,
  RiMoonLine,
} from "@remixicon/react"
import { useState } from "react"

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  // { label: "Testimonial", href: "#testimonial" },
  { label: "Contact", href: "#contact" },
]

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault()

    const targetElement = document.querySelector(href)

    if (targetElement) {
      const offset = -85
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition =
        elementPosition + window.scrollY + offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      setIsMobileMenuOpen(false)
    }
  }

  return (
    <div>
      <nav className="fixed left-0 right-0 z-50 lg:top-4">

        <div className="mx-auto hidden max-w-3xl items-center justify-center rounded-full border border-[var(--border)] bg-[var(--nav-bg)] py-2 backdrop-blur-lg lg:flex">

          <div className="flex w-full items-center justify-between px-5">

            <div>
              <a href="/">
                <span className="uppercase text-[var(--text-primary)]">
                  Sehrish Bibi
                </span>
              </a>
            </div>

            <div className="flex items-center gap-5">

              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--accent-light)]"
                      href={item.href}
                      onClick={(e) =>
                        handleLinkClick(e, item.href)
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={toggleTheme}
                className="rounded-full border border-[var(--border)] p-2 text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)]"
                aria-label={
                  darkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <RiSunLine className="h-5 w-5" />
                ) : (
                  <RiMoonLine className="h-5 w-5" />
                )}
              </button>

            </div>
          </div>
        </div>

        <div className="bg-[var(--nav-bg)] py-2 backdrop-blur-md lg:hidden">

          <div className="flex items-center justify-between">

            <div>
              <a href="#">
                <span className="pl-2 uppercase text-[var(--text-primary)]">
                  Sehrish Bibi
                </span>
              </a>
            </div>

            <div className="flex items-center">

              <button
                onClick={toggleTheme}
                className="rounded-full p-2 text-[var(--text-primary)] transition-all duration-300 hover:text-[var(--accent-light)]"
                aria-label={
                  darkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <RiSunLine className="h-5 w-5" />
                ) : (
                  <RiMoonLine className="h-5 w-5" />
                )}
              </button>

              <button
                className="text-[var(--text-primary)] focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
                aria-label={
                  isMobileMenuOpen
                    ? "close Menu"
                    : "open Menu"
                }
              >
                {isMobileMenuOpen ? (
                  <RiCloseLine className="m-2 h-6 w-5" />
                ) : (
                  <RiMenu3Line className="m-2 h-6 w-5" />
                )}
              </button>

            </div>
          </div>

          {isMobileMenuOpen && (
            <ul className="my-4 ml-4 flex flex-col gap-6 bg-[var(--nav-bg)] backdrop-blur-md">

              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-lg text-[var(--text-primary)] transition-colors duration-300 hover:text-[var(--accent-light)]"
                    onClick={(e) =>
                      handleLinkClick(e, item.href)
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}

            </ul>
          )}

        </div>
      </nav>
    </div>
  )
}

export default Navbar