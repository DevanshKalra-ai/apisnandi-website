"use client";

import { motion } from "framer-motion";
import { CopyCheck, ShieldAlert, FileText, Map, Briefcase } from "lucide-react";
import Image from "next/image";

export default function Services() {
    const services = [
        {
            title: "Risk / Policy Audit",
            description: "Comprehensive evaluation of existing insurance policies to identify coverage gaps, cost inefficiencies, and compliance risks.",
            icon: <FileText size={28} />,
        },
        {
            title: "Loss Minimization",
            description: "Structured programs focused on reducing operational and financial losses through preventive strategies and continuous monitoring.",
            icon: <ShieldAlert size={28} />,
        },
        {
            title: "Claim Consultancy",
            description: "End-to-end claims advisory support ensuring accurate documentation and faster settlements to maximize claim recovery outcomes.",
            icon: <CopyCheck size={28} />,
        },
        {
            title: "Onsite Risk Audit",
            description: "Detailed on-ground inspections and operational assessments to evaluate risk exposure and implement corrective measures effectively.",
            icon: <Map size={28} />,
        },
        {
            title: "Insurance Placement",
            description: "Strategic placement of insurance programs with leading insurers through structured market negotiations to secure competitive terms.",
            icon: <Briefcase size={28} />,
        },
    ];

    return (
        <section id="services" className="py-16 sm:py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">

            {/* Background image strip */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=60"
                    alt="Modern office building"
                    fill
                    className="object-cover opacity-[0.04]"
                    sizes="100vw"
                />
            </div>

            <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#023e9f] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3"
                    >
                        Comprehensive Solutions
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-6"
                    >
                        Risk & Insurance Services
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-gray-600"
                    >
                        We offer specialized services designed to safeguard your business operations. Our experts ensure every potential risk is assessed, mitigated, and covered.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group flex flex-col h-full"
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-teal-50 text-[#2cb2b3] flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#2cb2b3] group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                            <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm sm:text-base">
                                {service.description}
                            </p>
                            <a href="#contact" className="text-[#023e9f] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto text-sm sm:text-base">
                                Learn More <span>&rarr;</span>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Real photo strip at bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl overflow-hidden"
                >
                    {[
                        { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80", alt: "Team collaboration in office" },
                        { src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80", alt: "Contract signing and documentation" },
                        { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", alt: "Insurance advisor consulting client" },
                    ].map((img, i) => (
                        <div key={i} className="relative h-48 sm:h-56 overflow-hidden rounded-xl sm:rounded-2xl">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#023e9f]/30 to-transparent" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
