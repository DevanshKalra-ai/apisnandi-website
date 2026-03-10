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

    // Reduced rotation — the whole card tilts as ONE flat piece, no 3D layering
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);
    const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8]);
    const yPos    = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const opacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0]);

    const features = [
        { title: "Tailored Insurance Solutions", desc: "Every business is unique. We design customized insurance programs aligned to your risk exposure and operational needs." },
        { title: "Industry Expertise", desc: "Our experienced brokers stay ahead of evolving regulations, emerging risks, and global market trends." },
        { title: "Comprehensive Risk Coverage", desc: "From life and health to property, liability, marine, cyber, and specialty risks, we provide complete portfolio management." },
        { title: "Risk Management Advisory", desc: "We don't just insure risk — we analyze, assess, and mitigate it proactively." },
        { title: "Technology-Driven Processes", desc: "Quick turnaround times, structured internal systems, and seamless policy management." },
        { title: "Ethical & Transparent Practices", desc: "Integrity and trust are the foundation of every client relationship." },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-16 sm:py-24 bg-white overflow-hidden"
            id="about"
            style={{ perspective: "1400px" }}
        >
            <div className="container mx-auto px-5 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                {/* LEFT: 3D card — rotates as ONE flat unit, no inner 3D layers */}
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        y: yPos,
                        opacity,
                        transformPerspective: 1400,
                        willChange: "transform, opacity",
                    }}
                    className="w-full lg:flex-1"
                >
                    {/* Single flat card wrapper — no transform-style-3d */}
                    <div className="relative rounded-3xl overflow-visible shadow-2xl">
                        {/* Main image */}
                        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                                alt="Business professionals in a boardroom discussion"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Deep blue overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#023e9f]/75 via-[#1a5bc9]/50 to-[#2cb2b3]/30" />

                            {/* Text ON the image — centred, no z-transform */}
                            <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-lg text-center">
                                    More Than Insurance.<br />
                                    <span className="text-[#ffc107]">A Strategic Risk Partner.</span>
                                </h2>
                            </div>
                        </div>

                        {/* Glassmorphism floating stats — regular CSS position, no translateZ */}
                        <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 z-10
                            bg-white/80 backdrop-blur-xl
                            border border-white/60 shadow-2xl
                            p-5 sm:p-6 rounded-2xl
                            max-w-[170px] sm:max-w-[210px]"
                        >
                            <div className="text-4xl sm:text-5xl font-extrabold text-[#2cb2b3] mb-1 leading-none">10+</div>
                            <p className="text-gray-900 font-bold text-sm sm:text-base leading-snug">Years of Excellence</p>
                            <p className="text-xs text-gray-500 mt-1">Reliable risk management for modern enterprises.</p>
                        </div>

                        {/* Glassmorphism top-left badge */}
                        <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 z-10
                            bg-[#023e9f]/80 backdrop-blur-md
                            border border-white/20 shadow-xl
                            px-4 py-2 rounded-xl"
                        >
                            <span className="text-white font-bold text-sm">₹500Cr+ Claims</span>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: features list */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:flex-1 mt-10 sm:mt-14 lg:mt-0"
                >
                    <h2 className="text-[#023e9f] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">What Sets Us Apart</h2>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6 sm:mb-8">
                        Why Partner with Apis Nandi?
                    </h3>
                    <div className="space-y-4 sm:space-y-5">
                        {features.map((feature, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.07 }}
                                key={idx}
                                className="flex gap-3 sm:gap-4 items-start group hover:-translate-y-1 transition-transform"
                            >
                                <div className="flex-shrink-0 mt-1 text-[#2cb2b3] bg-teal-50 p-1.5 rounded-full group-hover:bg-[#2cb2b3] group-hover:text-white transition-colors shadow-sm">
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
