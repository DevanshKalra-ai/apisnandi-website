"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Features() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
    const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 20]);
    const zIndexAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 0]);
    const yPos = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacityAnim = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const features = [
        { title: "Tailored Insurance Solutions", desc: "Every business is unique. We design customized insurance programs aligned to your risk exposure and operational needs." },
        { title: "Industry Expertise", desc: "Our experienced brokers stay ahead of evolving regulations, emerging risks, and global market trends." },
        { title: "Comprehensive Risk Coverage", desc: "From life and health to property, liability, marine, cyber, and specialty risks, we provide complete portfolio management." },
        { title: "Risk Management Advisory", desc: "We don't just insure risk — we analyze, assess, and mitigate it proactively." },
        { title: "Technology-Driven Processes", desc: "Quick turnaround times, structured internal systems, and seamless policy management." },
        { title: "Ethical & Transparent Practices", desc: "Integrity and trust are the foundation of every client relationship." },
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-white perspective-[1200px] overflow-hidden" id="about">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        z: zIndexAnim,
                        y: yPos,
                        opacity: opacityAnim,
                        transformPerspective: 1200,
                        willChange: "transform, opacity",
                    }}
                    className="flex-1 transform-style-3d"
                >
                    <div className="relative transform-style-3d">
                        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1a5bc9] to-[#023e9f] flex items-center justify-center p-12 relative translate-z-[40px]">
                            <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] opacity-20 mix-blend-overlay"></div>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight z-10 drop-shadow-lg translate-z-[80px]">
                                More Than Insurance.<br />
                                <span className="text-[#ffc107]">A Strategic Risk Partner.</span>
                            </h2>
                        </div>
                        {/* Floating stats card */}
                        <motion.div
                            style={{ translateZ: 120 }}
                            className="absolute -bottom-12 -right-12 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 max-w-xs "
                        >
                            <div className="text-5xl font-extrabold text-[#2cb2b3] mb-2 drop-shadow-sm">10+</div>
                            <p className="text-gray-900 font-bold mb-1 text-lg">Years of Excellence</p>
                            <p className="text-sm text-gray-500 font-medium">Delivering reliable risk management and tailored insurance portfolios.</p>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 lg:pl-10 mt-20 lg:mt-0"
                >
                    <h2 className="text-[#023e9f] font-bold tracking-widest text-sm uppercase mb-3">What Sets Us Apart</h2>
                    <h3 className="text-4xl font-extrabold text-gray-900 leading-tight mb-8">
                        Why Partner with Apis Nandi?
                    </h3>
                    <div className="space-y-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx}
                                className="flex gap-4 items-start group hover:-translate-y-1 transition-transform"
                            >
                                <div className="flex-shrink-0 mt-1 text-[#2cb2b3] bg-teal-50 p-2 rounded-full group-hover:bg-[#2cb2b3] group-hover:text-white transition-colors shadow-sm">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#023e9f] transition-colors">{feature.title}</h4>
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
