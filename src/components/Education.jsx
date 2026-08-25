import { useRef } from "react"
import { EDUCATION } from "../constants"
import {gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Education = () => {
    const educationRef = useRef(null)

    return (
        <section
            className="py-16"
            id="education"
            ref={educationRef}
        >
            <div className="mx-auto max-w-full px-4">
                <h2 className="mb-8 text-center text-3xl font-medium text-[#EDE7E0] lg:text-4xl">
                    Education
                </h2>

                <div className="flex flex-col space-y-8">
                    {EDUCATION.map((edu) => (
                        <div
                            key={edu.id}
                            className="rounded-xl border border-[#C97B4A]/30 bg-white/5 p-6 backdrop-blur-sm"
                        >
                            <h3 className="mb-2 text-lg text-[#EDE7E0] lg:text-2xl">
                                {edu.degree}
                            </h3>

                            <h4 className="text-lg font-medium text-[#EDE7E0] lg:text-xl">
                                {edu.institution}
                            </h4>
                            <p className="text-sm text-[#C97B4A] lg:text-base">{edu.duration}</p>
                            <p className="mt-4 text-[#A8AEB8]">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education