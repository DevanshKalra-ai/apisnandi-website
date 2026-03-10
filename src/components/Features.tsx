"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Features() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
    const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15]);
    const yPos = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const opacityAnim = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

    const features = [
        { title: "Tailored Insurance Solutions", desc: "Every business is unique. We design customized insurance programs aligned to your risk exposure and operational needs." },
        { title: "Industry Expertise", desc: "Our experienced brokers stay ahead of evolving regulations, emerging risks, and global market trends." },
        { title: "Comprehensive Risk Coverage", desc: "From life and health to property, liability, marine, cyber, and specialty risks, we provide complete portfolio management." },
        { title: "Risk Management Advisory", desc: "We don't just insure risk — we analyze, assess, and mitigate it proactively." },
        { title: "Technology-Driven Processes", desc: "Quick turnaround times, structured internal systems, and seamless policy management." },
        { title: "Ethical & Transparent Practices", desc: "Integrity and trust are the foundation of every client relationship." },
    ];

    return (
        <section ref={sectionRef} className="py-16 sm:py-24 bg-white overflow-hidden" id="about" style={{ perspective: "1200px" }}>
            <div className="container mx-auto px-5 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                {/* LEFT: 3D visual */}
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        y: yPos,
                        opacity: opacityAnim,
                        transformPerspective: 1200,
                        willChange: "transform, opacity",
                    }}
                    className="w-full lg:flex-1 transform-style-3d"
                >
                    {/* Outer wrapper — relative so stats card is positioned inside, not outside */}
                    <div className="relative transform-style-3d">
                        {/* Main image card */}
                        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative" style={{ transform: "translateZ(40px)" }}>
                            <Image
                                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80"
                                alt="Professional business partnership and insurance advisory"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#023e9f]/70 to-[#2cb2b3]/40" />
                            {/* Text — no translateZ to avoid z-fight with the overlay */}
                            <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 z-10">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-lg text-center">
                                    More Than Insurance.<br />
                                    <span className="text-[#ffc107]">A Strategic Risk Partner.</span>
                                </h2>
                            </div>
                        </div>

                        {/* Floating stats card — positioned inside bounds, no translateZ to avoid z-fight */}
                        <div className="absolute bottom-4 right-4 sm:-bottom-8 sm:-right-8 bg-white/95 backdrop-blur-xl p-5 sm:p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-[180px] sm:max-w-[220px] z-20">
                            <div className="text-4xl sm:text-5xl font-extrabold text-[#2cb2b3] mb-1">10+</div>
                            <p className="text-gray-900 font-bold text-base sm:text-lg leading-snug">Years of Excellence</p>
                            <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">Reliable risk management for modern enterprises.</p>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: features list */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:flex-1 lg:pl-10 mt-12 sm:mt-16 lg:mt-0"
                >
                    <h2 className="text-[#023e9f] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">What Sets Us Apart</h2>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6 sm:mb-8">
                        Why Partner with Apis Nandi?
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                key={idx}
                                className="flex gap-3 sm:gap-4 items-start group hover:-translate-y-1 transition-transform"
                            >
                                <div className="flex-shrink-0 mt-1 text-[#2cb2b3] bg-teal-50 p-1.5 sm:p-2 rounded-full group-hover:bg-[#2cb2b3] group-hover:text-white transition-colors shadow-sm">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-0.5 group-hover:text-[#023e9f] transition-colors">{feature.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
