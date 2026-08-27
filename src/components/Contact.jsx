import { useRef, useEffect } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
    RiLinkedinBoxFill,
    RiGithubFill,
} from "@remixicon/react"

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const contactRef = useRef(null)

    const [state, handleSubmit] = useForm("mbgjrlka")

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Heading animation
            gsap.from(".contact-title", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 80%",
                    toggleActions: "restart none restart none",
                },
            })

            // Form fields animation
            gsap.from(".contact-field", {
                opacity: 0,
                y: 40,
                duration: 0.7,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 80%",
                    toggleActions: "restart none restart none",
                },
            })

            // Button animation
            gsap.from(".contact-button", {
                opacity: 0,
                y: 30,
                scale: 0.95,
                duration: 0.7,
                delay: 0.3,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 80%",
                    toggleActions: "restart none restart none",
                },
            })

        }, contactRef)

        const handleLoad = () => {
            ScrollTrigger.refresh()
        }

        window.addEventListener("load", handleLoad)

        return () => {
            ctx.revert()
            window.removeEventListener("load", handleLoad)
        }
    }, [])

    return (
        <section
            className="py-16"
            id="contact"
            ref={contactRef}
        >
            <div className="mx-auto max-w-4xl px-4 text-center">

                {/* Heading */}
                <h2 className="contact-title mb-10 text-3xl font-medium text-[var(--text-primary)] lg:text-4xl">
                    Contact
                </h2>

                {/* Contact Form */}
                {state.succeeded ? (
                    <div className="contact-success mx-auto max-w-2xl rounded-2xl border border-[var(--accent)]/40 bg-[var(--accent)]/10 p-8 shadow-lg shadow-[var(--accent)]/10">

                        <h3 className="mb-3 text-2xl font-medium text-[var(--text-primary)]">
                            Message Sent! ✨
                        </h3>

                        <p className="text-[var(--text-secondary)]">
                            Thank you for reaching out. I'll get back to you soon.
                        </p>

                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="contact-form mx-auto max-w-2xl space-y-5 text-left"
                    >

                        {/* Name */}
                        <div className="contact-field">
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                            >
                                Your Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                required
                                placeholder="Enter your name"
                                className="w-full rounded-xl border border-[var(--text-secondary)]/30 bg-[var(--card-bg)] px-4 py-3.5 text-[var(--text-primary)] outline-none transition-all duration-300 placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:bg-[var(--card-bg)] focus:ring-2 focus:ring-[var(--accent)]/20"
                            />
                        </div>

                        {/* Email */}
                        <div className="contact-field">
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                            >
                                Your Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-[var(--text-secondary)]/30 bg-[var(--card-bg)] px-4 py-3.5 text-[var(--text-primary)] outline-none transition-all duration-300 placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:bg-[var(--card-bg)] focus:ring-2 focus:ring-[var(--accent)]/20"
                            />

                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="mt-2 text-sm text-red-400"
                            />
                        </div>

                        {/* Message */}
                        <div className="contact-field">
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                            >
                                Your Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="6"
                                placeholder="Write your message..."
                                className="w-full resize-none rounded-xl border border-[var(--text-secondary)]/30 bg-[var(--card-bg)] px-4 py-3.5 text-[var(--text-primary)] outline-none transition-all duration-300 placeholder:text-[var(--text-secondary)]/50 focus:border-[var(--accent)] focus:bg-[var(--card-bg)] focus:ring-2 focus:ring-[var(--accent)]/20"
                            />

                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                                className="mt-2 text-sm text-red-400"
                            />
                        </div>

                        {/* General Form Error */}
                        {state.errors && (
                            <ValidationError
                                errors={state.errors}
                                className="text-sm text-red-400"
                            />
                        )}

                        {/* Send Button */}
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="contact-button group relative mt-2 w-full overflow-hidden rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] px-6 py-3.5 font-medium text-white shadow-lg shadow-[var(--accent)]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--accent)]/30 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">

                                {state.submitting ? (
                                    <>
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message

                                        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </>
                                )}

                            </span>

                            {/* Hover shine */}
                            <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0"></span>

                        </button>

                    </form>
                )}

                {/* Social Links */}
                <div className="contact-icons mt-10 flex justify-center gap-8">

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/sehrish-bibi-52a032419/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile"
                        className="contact-icon inline-flex text-[var(--text-secondary)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-125 hover:text-[var(--accent)] hover:drop-shadow-[0_0_12px_var(--accent)]"
                    >
                        <RiLinkedinBoxFill size={34} />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/sehrish-10"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile"
                        className="contact-icon inline-flex text-[var(--text-secondary)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-125 hover:text-[var(--accent)] hover:drop-shadow-[0_0_12px_var(--accent)]"
                    >
                        <RiGithubFill size={34} />
                    </a>

                </div>

            </div>
        </section>
    )
}

export default Contact