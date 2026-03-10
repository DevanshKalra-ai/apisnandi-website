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

    // Only start fading after 55% scroll — text stays fully visible longer
    const opacityText = useTransform(scrollYProgress, [0.55, 0.95], [1, 0]);
    // Much smaller y movement so text doesn't slide into next section
    const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const yImage = useTransform(scrollYProgress, [0, 1], [0, -40]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-gradient-to-br from-[#023e9f] via-[#1a5bc9] to-[#2cb2b3]"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] blur-[1px]" />
            </div>

            {/* Glassmorphism blobs */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#2cb2b3]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-8">

                {/* LEFT: text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ y: yText, opacity: opacityText, willChange: "transform, opacity" }}
                    className="flex-1 text-center lg:text-left text-white w-full"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold mb-6 text-[#ffc107]">
                        <ShieldCheck size={15} />
                        <span>Protection with Precision. Partnership with Purpose.</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-5">
                        Your Shield. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-100">
                            Our Expertise.
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg font-medium text-white/85 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        At Apis Nandi Insurance Brokers Pvt. Ltd., we believe insurance is more than coverage — it's a strategic partnership. We help organizations manage risk with confidence and clarity.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                        <Link
                            href="#services"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#023e9f] font-bold text-base hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            Explore Solutions <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto text-center px-7 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold text-base hover:bg-white/20 transition-all"
                        >
                            Get Expert Advice
                        </Link>
                    </div>

                    {/* Glassmorphism stat row */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                        {[
                            { val: "500+", label: "Clients Served" },
                            { val: "10+", label: "Years of Excellence" },
                            { val: "40+", label: "Industries Covered" },
                        ].map((s) => (
                            <div
                                key={s.label}
                                className="px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center"
                            >
                                <div className="text-xl sm:text-2xl font-extrabold text-white">{s.val}</div>
                                <div className="text-[11px] sm:text-xs text-white/65 font-medium">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT: Animated SVG — bigger, shifted up and right */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ y: yImage, willChange: "transform" }}
                    className="flex-1 hidden lg:flex items-start justify-end -mt-8 -mr-4"
                >
                    <svg
                        viewBox="0 0 520 500"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full max-w-[580px] drop-shadow-2xl"
                        aria-hidden="true"
                    >
                        <defs>
                            <radialGradient id="shieldGrad" cx="50%" cy="40%" r="60%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
                                <stop offset="100%" stopColor="#023e9f" stopOpacity="0.04" />
                            </radialGradient>
                            <radialGradient id="innerGrad" cx="50%" cy="30%" r="70%">
                                <stop offset="0%" stopColor="#2cb2b3" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#023e9f" stopOpacity="0.1" />
                            </radialGradient>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="6" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
                                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.25)" />
                            </filter>
                            <style>{`
                                @keyframes pulse-ring {
                                    0%  { r: 120; opacity: 0.35; }
                                    100%{ r: 175; opacity: 0; }
                                }
                                @keyframes pulse-ring2 {
                                    0%  { r: 120; opacity: 0.2; }
                                    100%{ r: 210; opacity: 0; }
                                }
                                @keyframes float-up {
                                    0%,100%{ transform:translateY(0px); }
                                    50%    { transform:translateY(-9px); }
                                }
                                @keyframes float-down {
                                    0%,100%{ transform:translateY(0px); }
                                    50%    { transform:translateY(9px); }
                                }
                                @keyframes shield-glow {
                                    0%,100%{ opacity:0.75; }
                                    50%    { opacity:1; }
                                }
                                @keyframes rotate-dash {
                                    to { stroke-dashoffset:-220; }
                                }
                                @keyframes check-draw {
                                    from{ stroke-dashoffset:80; }
                                    to  { stroke-dashoffset:0; }
                                }
                                .p1 { animation: pulse-ring  2.8s ease-out infinite; }
                                .p2 { animation: pulse-ring2 2.8s ease-out infinite 1s; }
                                .c1 { animation: float-up   4s   ease-in-out infinite; }
                                .c2 { animation: float-down 4.5s ease-in-out infinite 0.4s; }
                                .c3 { animation: float-up   5s   ease-in-out infinite 0.9s; }
                                .sh { animation: shield-glow 3s   ease-in-out infinite; }
                                .dl { animation: rotate-dash 4s   linear infinite; }
                                .ck { stroke-dasharray:80; animation: check-draw 1s 0.8s ease forwards; stroke-dashoffset:80; }
                            `}</style>
                        </defs>

                        {/* Pulse rings */}
                        <circle className="p1" cx="265" cy="220" r="120" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
                        <circle className="p2" cx="265" cy="220" r="120" fill="none" stroke="rgba(44,178,179,0.18)" strokeWidth="1"/>

                        {/* Rotating dashed orbit */}
                        <circle className="dl" cx="265" cy="220" r="165" fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1" strokeDasharray="10 7"/>

                        {/* Connector lines */}
                        <line x1="265" y1="108" x2="265" y2="58" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 3"/>
                        <line x1="172" y1="305" x2="90"  y2="345" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 3"/>
                        <line x1="360" y1="305" x2="430" y2="345" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 3"/>

                        {/* Main shield */}
                        <g className="sh">
                            {/* Outer shield glow */}
                            <path
                                d="M265 96 L345 124 L345 212 Q345 278 265 310 Q185 278 185 212 L185 124 Z"
                                fill="url(#shieldGrad)"
                                stroke="rgba(255,255,255,0.55)"
                                strokeWidth="2.5"
                                filter="url(#glow)"
                            />
                            {/* Inner shield fill */}
                            <path
                                d="M265 112 L333 136 L333 210 Q333 266 265 292 Q197 266 197 210 L197 136 Z"
                                fill="url(#innerGrad)"
                                stroke="rgba(44,178,179,0.65)"
                                strokeWidth="1.5"
                            />
                            {/* Checkmark */}
                            <polyline
                                className="ck"
                                points="237,195 256,215 295,172"
                                fill="none"
                                stroke="#ffc107"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>

                        {/* Orbit dots */}
                        <circle cx="265" cy="55" r="5.5" fill="#2cb2b3" opacity="0.9"/>
                        <circle cx="90"  cy="348" r="5.5" fill="#ffc107"   opacity="0.9"/>
                        <circle cx="432" cy="348" r="5.5" fill="white"     opacity="0.7"/>

                        {/* Card 1 — top: Policies Active */}
                        <g className="c1" filter="url(#cardShadow)">
                            <rect x="188" y="18" width="154" height="56" rx="16"
                                fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
                            {/* glass shimmer */}
                            <rect x="188" y="18" width="154" height="22" rx="16"
                                fill="rgba(255,255,255,0.08)"/>
                            <rect x="197" y="27" width="9" height="9" rx="3" fill="#ffc107"/>
                            <text x="213" y="37" fontSize="8.5" fill="rgba(255,255,255,0.75)" fontFamily="Inter,sans-serif" fontWeight="500">Policies Active</text>
                            <text x="197" y="64" fontSize="21" fill="white" fontFamily="Inter,sans-serif" fontWeight="800">2,400+</text>
                        </g>

                        {/* Card 2 — bottom left: Claims Settled */}
                        <g className="c2" filter="url(#cardShadow)">
                            <rect x="14" y="330" width="160" height="64" rx="16"
                                fill="rgba(255,255,255,0.13)" stroke="rgba(44,178,179,0.45)" strokeWidth="1"/>
                            <rect x="14" y="330" width="160" height="22" rx="16"
                                fill="rgba(255,255,255,0.07)"/>
                            <rect x="24" y="340" width="9" height="9" rx="3" fill="#2cb2b3"/>
                            <text x="40" y="350" fontSize="8.5" fill="rgba(255,255,255,0.75)" fontFamily="Inter,sans-serif" fontWeight="500">Claims Settled</text>
                            <text x="24" y="374" fontSize="20" fill="white" fontFamily="Inter,sans-serif" fontWeight="800">₹500Cr+</text>
                            <text x="24" y="387" fontSize="7.5" fill="rgba(255,255,255,0.5)" fontFamily="Inter,sans-serif">Total recovered for clients</text>
                        </g>

                        {/* Card 3 — bottom right: Industries */}
                        <g className="c3" filter="url(#cardShadow)">
                            <rect x="342" y="330" width="164" height="64" rx="16"
                                fill="rgba(255,255,255,0.13)" stroke="rgba(255,193,7,0.4)" strokeWidth="1"/>
                            <rect x="342" y="330" width="164" height="22" rx="16"
                                fill="rgba(255,255,255,0.07)"/>
                            <rect x="352" y="340" width="9" height="9" rx="3" fill="#ffc107"/>
                            <text x="368" y="350" fontSize="8.5" fill="rgba(255,255,255,0.75)" fontFamily="Inter,sans-serif" fontWeight="500">Industries Served</text>
                            <text x="352" y="374" fontSize="20" fill="white" fontFamily="Inter,sans-serif" fontWeight="800">40+ Sectors</text>
                            <text x="352" y="387" fontSize="7.5" fill="rgba(255,255,255,0.5)" fontFamily="Inter,sans-serif">From SMEs to enterprises</text>
                        </g>
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
