"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const rotateXImage = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const rotateYImage = useTransform(scrollYProgress, [0, 1], [0, -15]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-[#023e9f] via-[#1a5bc9] to-[#2cb2b3] perspective-[1000px]"
        >
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] opacity-10 blur-[1px]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ y: yText, opacity: opacityText, willChange: "transform, opacity" }}
                    className="flex-1 text-center lg:text-left text-white"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold mb-8 text-[#ffc107]">
                        <ShieldCheck size={18} />
                        <span>Protection with Precision. Partnership with Purpose.</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
                        Your Shield. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-100">Our Expertise.</span>
                    </h1>

                    <p className="text-lg md:text-xl font-medium text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        At Apis Nandi Insurance Brokers Pvt. Ltd., we believe insurance is more than coverage — it's a strategic partnership. We help organizations manage risk with confidence and clarity.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Link
                            href="#services"
                            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#023e9f] font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            Explore Solutions
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 rounded-full bg-black/20 backdrop-blur-sm text-white border border-white/30 font-bold text-lg hover:bg-black/30 transition-all"
                        >
                            Get Expert Advice
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                        y: yImage,
                        scale: scaleImage,
                        rotateX: rotateXImage,
                        rotateY: rotateYImage,
                        transformPerspective: 1000,
                        willChange: "transform",
                    }}
                    className="flex-1 hidden lg:block transform-style-3d"
                >
                    <div className="relative w-full aspect-square max-w-lg mx-auto transform-style-3d">
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-[3rem] rotate-6 border border-white/20 shadow-2xl translate-z-[50px]"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#ffc107]/20 to-transparent rounded-[3rem] -rotate-3 border border-white/10 translate-z-[20px]"></div>

                        <div className="absolute inset-4 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/30 p-8 flex flex-col justify-center gap-6 translate-z-[100px] shadow-2xl">
                            <div className="bg-white/20 p-4 w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner">
                                <ShieldCheck size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white drop-shadow-md">Comprehensive Risk Management</h3>
                            <p className="text-white/90 line-clamp-3 drop-shadow-sm">
                                From life and health to property, liability, marine, cyber, and specialty risks, we provide complete portfolio management for modern enterprises.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
