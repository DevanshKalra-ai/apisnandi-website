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

    // Card 3D tilt — whole card as ONE flat piece
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
    const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
    const yPos    = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    // Right panel slides in + fades from right as section enters view
    const xRight  = useTransform(scrollYProgress, [0, 0.25], [60, 0]);
    const opRight = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    // Staggered scroll-driven vertical reveals for each feature row
    const makeFeatureY = (i: number) =>
        useTransform(scrollYProgress, [0.1 + i * 0.04, 0.25 + i * 0.04], [32, 0]);
    const makeFeatureOp = (i: number) =>
        useTransform(scrollYProgress, [0.1 + i * 0.04, 0.25 + i * 0.04], [0, 1]);

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

                {/* LEFT: 3D card — tilts as ONE flat unit */}
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
                            {/* Gradient — stronger on left so text is readable */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#023e9f]/85 via-[#1a5bc9]/55 to-[#2cb2b3]/20" />

                            {/* Text: top-left aligned — keeps bottom-right free for floating stats card */}
                            <div className="absolute inset-0 flex items-start justify-start p-8 sm:p-10 lg:p-10">
                                <h2
                                    className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight text-left max-w-[70%]"
                                    style={{
                                        textShadow:
                                            "1px 1px 0 #1a4fc4, 2px 2px 0 #0a2d7a, 3px 3px 0 #061c52, 4px 4px 16px rgba(0,0,0,0.45)",
                                    }}
                                >
                                    More Than<br />Insurance.
                                    <br />
                                    <span
                                        className="text-[#ffc107]"
                                        style={{
                                            textShadow:
                                                "1px 1px 0 #c98f00, 2px 2px 0 #8a6200, 3px 3px 12px rgba(0,0,0,0.4)",
                                        }}
                                    >
                                        A Strategic<br />Risk Partner.
                                    </span>
                                </h2>
                            </div>
                        </div>

                        {/* Floating stats — bottom-right, clear of text */}
                        <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 z-10
                            bg-white/85 backdrop-blur-xl
                            border border-white/60 shadow-2xl
                            p-5 sm:p-6 rounded-2xl
                            max-w-[160px] sm:max-w-[200px]"
                        >
                            <div className="text-4xl sm:text-5xl font-extrabold text-[#2cb2b3] mb-1 leading-none">10+</div>
                            <p className="text-gray-900 font-bold text-sm sm:text-base leading-snug">Years of Excellence</p>
                            <p className="text-xs text-gray-500 mt-1">Reliable risk management for modern enterprises.</p>
                        </div>

                        {/* Top-left badge */}
                        <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 z-10
                            bg-[#023e9f]/85 backdrop-blur-md
                            border border-white/20 shadow-xl
                            px-4 py-2 rounded-xl"
                        >
                            <span className="text-white font-bold text-sm">₹500Cr+ Claims</span>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: features list — scroll-driven slide-in */}
                <motion.div
                    style={{ x: xRight, opacity: opRight, willChange: "transform, opacity" }}
                    className="w-full lg:flex-1 mt-10 sm:mt-14 lg:mt-0"
                >
                    <h2 className="text-[#023e9f] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3">What Sets Us Apart</h2>
                    <h3
                        className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6 sm:mb-8"
                        style={{
                            textShadow: "1px 1px 0 #d0d0d0, 2px 2px 6px rgba(0,0,0,0.08)",
                        }}
                    >
                        Why Partner with Apis Nandi?
                    </h3>
                    <div className="space-y-4 sm:space-y-5">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                style={{
                                    y: makeFeatureY(idx),
                                    opacity: makeFeatureOp(idx),
                                }}
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
