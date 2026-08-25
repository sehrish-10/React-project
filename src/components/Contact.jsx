
import { useRef } from "react"
import {
    RiLinkedinBoxFill,
    RiGithubFill,
} from "@remixicon/react"

const Contact = () => {
    const contactRef = useRef(null)

    return (
        <section
            className="py-16"
            id="contact"
            ref={contactRef}
        >
            <div className="px-4 text-center">
                <h2 className="mb-8 text-3xl font-medium text-[#EDE7E0] lg:text-4xl">
                    Contact
                </h2>

                <p className="mb-4 text-lg text-[#A8AEB8] lg:text-xl">
                    Feel free to reach out to me via email:{" "}

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sehirsh.biibi@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-[#C97B4A] text-[#EDE7E0] transition-colors hover:text-[#E0A87E]"
                    >
                        sehrish.biibi01@gmail.com
                    </a>
                </p>

                <div className="mt-8 flex justify-center space-x-6">

                    <a
                        href="https://www.linkedin.com/in/sehrish-bibi-52a032419/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon text-[#A8AEB8] transition-all duration-300 hover:-translate-y-1 hover:text-[#C97B4A] hover:drop-shadow-[0_0_8px_#C97B4A]"
                        aria-label="Visit my LinkedIn profile"
                    >
                        <RiLinkedinBoxFill className="text-3xl" />
                    </a>

                    <a
                        href="https://github.com/sehrish-10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon text-[#A8AEB8] transition-all duration-300 hover:-translate-y-1 hover:text-[#C97B4A] hover:drop-shadow-[0_0_8px_#C97B4A]"
                        aria-label="Visit my GitHub profile"
                    >
                        <RiGithubFill className="text-3xl" />
                    </a>

                </div>
            </div>
        </section>
    )
}

export default Contact