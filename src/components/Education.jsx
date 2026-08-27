import { useRef, useEffect } from "react";
import { EDUCATION } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const educationRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(".education-item");

            items.forEach((item) => {
                gsap.from(item, {
                    opacity: 0,
                    y: 80,
                    x: -30,
                    scale: 0.95,
                    rotation: -1.5,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        // toggleActions: "play none none none",
                        toggleActions: "restart none restart none",
                    },
                });
            });
        }, educationRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            className="py-16"
            id="education"
            ref={educationRef}
        >
            <div className="mx-auto max-w-full px-4">

                {/* Heading */}
                <h2 className="mb-8 text-center text-3xl font-medium text-[var(--text-primary)] lg:text-4xl">
                    Education
                </h2>

                {/* Education Items */}
                <div className="flex flex-col space-y-8">

                    {EDUCATION.map((edu) => (
                        <div
                            key={edu.id}
                            className="education-item rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6 backdrop-blur-sm"
                        >

                            {/* Degree */}
                            <h3 className="mb-2 text-lg text-[var(--text-primary)] lg:text-2xl">
                                {edu.degree}
                            </h3>

                            {/* Institution */}
                            <h4 className="text-lg font-medium text-[var(--text-primary)] lg:text-xl">
                                {edu.institution}
                            </h4>

                            {/* Duration */}
                            <p className="text-sm text-[var(--accent)] lg:text-base">
                                {edu.duration}
                            </p>

                            {/* Description */}
                            <p className="mt-4 text-[var(--text-secondary)]">
                                {edu.description}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Education;