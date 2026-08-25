import { RiMenu3Line, RiCloseLine } from "@remixicon/react"
import { useState } from "react"

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
//   { label: "Testimonial", href: "#testimonial" },
  { label: "Contact", href: "#contact" },
]
const Navbar = () => {
    const[isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
       setIsMobileMenuOpen(!isMobileMenuOpen) 
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href)
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <div>
            <nav className="fixed left-0 right-0 z-50 lg:top-4">
                {/* DESKTOP MENU */}
                <div className="mx-auto hidden max-w-xl items-center justify-center rounded-full border border-[#C97B4A]/30 bg-[#0D1117]/50 py-2 backdrop-blur-lg lg:flex">
                    <div className="flex items-center justify-between gap-6">
                        <div>
                            <a href="/">
                                <span className="uppercase text-[#EDE7E0]">Sehrish Bibi</span>
                            </a>
                        </div>
                        <div>
                            <ul className="flex items-center gap-4">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a 
                                            className="text-sm text-[#A8AEB8] hover:text-[#E0A87E]" 
                                            href={item.href}
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            {/* Mobile Menu */}
            <div className="bg-[#0D1117]/50 py-2 backdrop-blur-md lg:hidden">
           <div className="flex items-center justify-between ">
         <div>
          <a href="#">
            <span className="pl-2 uppercase text-[#EDE7E0]">Sehrish Bibi</span>
            </a>  
         </div>
         <div className="flex items-center">
            <button className="text-[#EDE7E0] focus:outline-none lg:hidden" onClick=
            {toggleMobileMenu} aria-label={isMobileMenuOpen ? "close Menu" :
               "open Menu"}>
                {isMobileMenuOpen ? (
                  <RiCloseLine className="m-2 h-6 w-5"/>

                ) : (
                    <RiMenu3Line className="m-2 h-6 w-5"/>
                    )}
               </button>

               </div>

           </div>
         {isMobileMenuOpen && (
            <ul className="my-4 ml-4 flex flex-col gap-6 bg-[#0D1117]/60 backdrop-blur-md">
                {NAVIGATION_LINKS.map((item,index ) =>(
                    <li key ={index}>
                  <a href={item.href} className="block w-full text-lg text-[#EDE7E0]" onClick=
                  {(e) => handleLinkClick(e, item.href)}>
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