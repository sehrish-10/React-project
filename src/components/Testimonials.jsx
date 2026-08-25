/* import { useRef } from "react"
import { TESTIMONIALS } from "../constants"

const Testimonials = () => {
    const testimonialsRef = useRef(null)

    return (
        <section
            id="testimonial"
            className="py-16"
            ref={testimonialsRef}
        >
            <h2 className="mb-12 text-center text-3xl font-medium text-[#EDE7E0] lg:text-4xl">
                Testimonials
            </h2>

            <div className="mx-auto max-w-5xl px-4">
                <div className="grid gap-8 md:grid-cols-2">
                    {TESTIMONIALS.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="rounded-2xl border border-[#C97B4A]/30 bg-white/5 p-6 text-center backdrop-blur-sm"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="mx-auto mb-6 h-24 w-24 rounded-full border-4 border-[#C97B4A]/40 object-cover"
                            />

                            <blockquote className="text-lg leading-relaxed text-[#EDE7E0] lg:text-xl">
                                &quot;{testimonial.quote}&quot;
                            </blockquote>

                            <div className="mt-6">
                                <p className="text-lg font-medium text-[#EDE7E0]">
                                    {testimonial.name}
                                </p>

                                <p className="text-sm text-[#A8AEB8]">
                                    {testimonial.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials */