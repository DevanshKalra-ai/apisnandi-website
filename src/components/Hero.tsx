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
    const yImage = useTransform(scrollYProgress, [0, 1], [0, -60]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-[#023e9f] via-[#1a5bc9] to-[#2cb2b3]"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] blur-[1px]"></div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#2cb2b3]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                {/* LEFT: text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ y: yText, opacity: opacityText, willChange: "transform, opacity" }}
                    className="flex-1 text-center lg:text-left text-white w-full"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 text-[#ffc107]">
                        <ShieldCheck size={16} />
                        <span>Protection with Precision. Partnership with Purpose.</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-5 sm:mb-6">
                        Your Shield. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-100">Our Expertise.</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl font-medium text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        At Apis Nandi Insurance Brokers Pvt. Ltd., we believe insurance is more than coverage — it's a strategic partnership. We help organizations manage risk with confidence and clarity.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Link
                            href="#services"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#023e9f] font-bold text-base sm:text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            Explore Solutions
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto text-center px-7 py-4 rounded-full bg-black/20 backdrop-blur-sm text-white border border-white/30 font-bold text-base sm:text-lg hover:bg-black/30 transition-all"
                        >
                            Get Expert Advice
                        </Link>
                    </div>

                    {/* Trust stats row */}
                    <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
                        {[
                            { val: "500+", label: "Clients Served" },
                            { val: "10+", label: "Years of Excellence" },
                            { val: "40+", label: "Industries Covered" },
                        ].map((s) => (
                            <div key={s.label} className="text-center lg:text-left">
                                <div className="text-2xl sm:text-3xl font-extrabold text-white">{s.val}</div>
                                <div className="text-xs sm:text-sm text-white/70 font-medium">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT: Animated SVG */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.25 }}
                    style={{ y: yImage, willChange: "transform" }}
                    className="flex-1 hidden lg:flex items-center justify-center"
                >
                    <svg
                        viewBox="0 0 480 480"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full max-w-md drop-shadow-2xl"
                        aria-hidden="true"
                    >
                        <defs>
                            <radialGradient id="shieldGrad" cx="50%" cy="40%" r="60%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
                                <stop offset="100%" stopColor="#023e9f" stopOpacity="0.05" />
                            </radialGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>

                            {/* Pulsing animation */}
                            <style>{`
                                @keyframes pulse-ring {
                                    0% { r: 110; opacity: 0.3; }
                                    100% { r: 170; opacity: 0; }
                                }
                                @keyframes pulse-ring2 {
                                    0% { r: 110; opacity: 0.2; }
                                    100% { r: 200; opacity: 0; }
                                }
                                @keyframes float-card {
                                    0%, 100% { transform: translateY(0px); }
                                    50% { transform: translateY(-8px); }
                                }
                                @keyframes float-card2 {
                                    0%, 100% { transform: translateY(0px); }
                                    50% { transform: translateY(8px); }
                                }
                                @keyframes shield-glow {
                                    0%, 100% { opacity: 0.7; }
                                    50% { opacity: 1; }
                                }
                                @keyframes dash {
                                    to { stroke-dashoffset: -200; }
                                }
                                .pulse1 { animation: pulse-ring 2.5s ease-out infinite; }
                                .pulse2 { animation: pulse-ring2 2.5s ease-out infinite 0.8s; }
                                .card1 { animation: float-card 4s ease-in-out infinite; }
                                .card2 { animation: float-card2 4.5s ease-in-out infinite 0.5s; }
                                .card3 { animation: float-card 5s ease-in-out infinite 1s; }
                                .shield-inner { animation: shield-glow 3s ease-in-out infinite; }
                                .dash-line { animation: dash 3s linear infinite; }
                            `}</style>
                        </defs>

                        {/* Pulse rings */}
                        <circle className="pulse1" cx="240" cy="230" r="110" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                        <circle className="pulse2" cx="240" cy="230" r="110" fill="none" stroke="rgba(44,178,179,0.2)" strokeWidth="1" />

                        {/* Dashed orbit */}
                        <circle cx="240" cy="230" r="155" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="8 6" className="dash-line" />

                        {/* Connector lines to cards */}
                        <line x1="240" y1="120" x2="240" y2="70" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 3" />
                        <line x1="155" y1="310" x2="80" y2="340" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 3" />
                        <line x1="330" y1="310" x2="395" y2="345" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 3" />

                        {/* Main shield */}
                        <g className="shield-inner">
                            <path
                                d="M240 105 L310 130 L310 210 Q310 270 240 300 Q170 270 170 210 L170 130 Z"
                                fill="url(#shieldGrad)"
                                stroke="rgba(255,255,255,0.5)"
                                strokeWidth="2"
                                filter="url(#glow)"
                            />
                            <path
                                d="M240 120 L300 142 L300 212 Q300 262 240 288 Q180 262 180 212 L180 142 Z"
                                fill="rgba(255,255,255,0.08)"
                                stroke="rgba(44,178,179,0.6)"
                                strokeWidth="1.5"
                            />
                            {/* Checkmark */}
                            <polyline
                                points="215,200 232,218 268,178"
                                fill="none"
                                stroke="#ffc107"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>

                        {/* Floating card 1 — top: Policies Active */}
                        <g className="card1">
                            <rect x="170" y="26" width="140" height="52" rx="14" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                            <rect x="178" y="34" width="8" height="8" rx="2" fill="#ffc107" />
                            <text x="194" y="43" fontSize="8" fill="rgba(255,255,255,0.7)" fontFamily="Inter,sans-serif" fontWeight="500">Policies Active</text>
                            <text x="178" y="68" fontSize="20" fill="white" fontFamily="Inter,sans-serif" fontWeight="800">2,400+</text>
                        </g>

                        {/* Floating card 2 — bottom left: Claims Settled */}
                        <g className="card2">
                            <rect x="20" y="318" width="148" height="58" rx="14" fill="rgba(255,255,255,0.12)" stroke="rgba(44,178,179,0.4)" strokeWidth="1" />
                            <rect x="30" y="328" width="8" height="8" rx="2" fill="#2cb2b3" />
                            <text x="46" y="338" fontSize="8" fill="rgba(255,255,255,0.7)" fontFamily="Inter,sans-serif" fontWeight="500">Claims Settled</text>
                            <text x="30" y="360" fontSize="18" fill="white" fontFamily="Inter,sans-serif" fontWeight="800">₹500Cr+</text>
                            <text x="30" y="372" fontSize="7" fill="rgba(255,255,255,0.5)" fontFamily="Inter,sans-serif">Total recovered for clients</text>
                        </g>

                        {/* Floating card 3 — bottom right: Industries */}
                        <g className="card3">
                            <rect x="308" y="318" width="152" height="58" rx="14" fill="rgba(255,255,255,0.12)" stroke="rgba(255,193,7,0.4)" strokeWidth="1" />
                            <rect x="318" y="328" width="8" height="8" rx="2" fill="#ffc107" />
                            <text x="334" y="338" fontSize="8" fill="rgba(255,255,255,0.7)" fontFamily="Inter,sans-serif" fontWeight="500">Industries Served</text>
                            <text x="318" y="360" fontSize="18" fill="white" fontFamily="Inter,sans-serif" fontWeight="800">40+ Sectors</text>
                            <text x="318" y="372" fontSize="7" fill="rgba(255,255,255,0.5)" fontFamily="Inter,sans-serif">From SMEs to enterprises</text>
                        </g>

                        {/* Small dots on orbit */}
                        <circle cx="240" cy="75" r="5" fill="#2cb2b3" opacity="0.8" />
                        <circle cx="85" cy="347" r="5" fill="#ffc107" opacity="0.8" />
                        <circle cx="395" cy="347" r="5" fill="white" opacity="0.6" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
