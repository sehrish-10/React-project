




import { useState, useEffect } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education from "./components/Education"
// import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme")
    return saved ? saved === "dark" : true
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("dark-theme", "light-theme")
    root.classList.add(darkMode ? "dark-theme" : "light-theme")
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (
    <div className="snap-container">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <section className="snap-section"><Hero /></section>
      <section className="snap-section"><Projects /></section>
      <section className="snap-section"><Skills /></section>
      <section className="snap-section"><Experience /></section>
      <section className="snap-section"><Education /></section>
      <section className="snap-section"><Contact /></section>
      <Footer />
    </div>
  )
}

export default App