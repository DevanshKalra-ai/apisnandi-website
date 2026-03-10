"use client";

import { motion } from "framer-motion";
import { CopyCheck, ShieldAlert, FileText, Map, Briefcase } from "lucide-react";
import Image from "next/image";

export default function Services() {
    const services = [
        {
            title: "Risk / Policy Audit",
            description: "Comprehensive evaluation of existing insurance policies to identify coverage gaps, cost inefficiencies, and compliance risks.",
            icon: <FileText size={26} />,
        },
        {
            title: "Loss Minimization",
            description: "Structured programs focused on reducing operational and financial losses through preventive strategies and continuous monitoring.",
            icon: <ShieldAlert size={26} />,
        },
        {
            title: "Claim Consultancy",
            description: "End-to-end claims advisory ensuring accurate documentation and faster settlements to maximize claim recovery outcomes.",
            icon: <CopyCheck size={26} />,
        },
        {
            title: "Onsite Risk Audit",
            description: "Detailed on-ground inspections and assessments to evaluate risk exposure and implement corrective measures effectively.",
            icon: <Map size={26} />,
        },
        {
            title: "Insurance Placement",
            description: "Strategic placement with leading insurers through structured market negotiations to secure competitive terms.",
            icon: <Briefcase size={26} />,
        },
    ];

    const photos = [
        {
            src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80",
            alt: "Professional advisor consulting client",
            label: "Expert Advisory",
        },
        {
            src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80",
            alt: "Contract and documentation review",
            label: "Policy Documentation",
        },
        {
            src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=700&q=80",
            alt: "Business team meeting",
            label: "Strategic Risk Planning",
        },
    ];

    return (
        <section id="services" className="py-16 sm:py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">

            {/* Subtle background texture */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=40"
                    alt=""
                    fill
                    className="object-cover object-center opacity-[0.035]"
                    sizes="100vw"
                    aria-hidden="true"
                />
            </div>

            <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#023e9f] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3"
                    >
                        Comprehensive Solutions
                    </motion.p>
                    <motion.h3
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
                    >
                        Risk &amp; Insurance Services
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-gray-600"
                    >
                        Specialized services designed to safeguard your operations — every risk assessed, mitigated, and covered.
                    </motion.p>
                </div>

                {/* Service cards with glassmorphism */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07 }}
                            className="
                                relative group flex flex-col h-full
                                bg-white/70 backdrop-blur-sm
                                border border-white/80
                                rounded-2xl sm:rounded-3xl p-6 sm:p-8
                                shadow-sm hover:shadow-xl
                                hover:-translate-y-2 transition-all duration-300
                                overflow-hidden
                            "
                        >
                            {/* Hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#023e9f]/0 to-[#2cb2b3]/0 group-hover:from-[#023e9f]/[0.03] group-hover:to-[#2cb2b3]/[0.05] transition-all duration-500 rounded-2xl sm:rounded-3xl" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-teal-50 text-[#2cb2b3] flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#2cb2b3] group-hover:text-white transition-colors shrink-0">
                                    {service.icon}
                                </div>
                                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-5">
                                    {service.description}
                                </p>
                                <a href="#contact" className="text-[#023e9f] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all text-sm mt-auto">
                                    Learn More <span>&rarr;</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Photo strip — fixed height, proper object-fit, no empty space */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5"
                >
                    {photos.map((photo, i) => (
                        <div
                            key={i}
                            className="relative h-52 sm:h-60 rounded-2xl overflow-hidden group shadow-md"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, 33vw"
                            />
                            {/* Glassmorphism label at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-4
                                bg-gradient-to-t from-[#023e9f]/80 to-transparent">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                                    bg-white/15 backdrop-blur-sm border border-white/25">
                                    <span className="text-white text-xs font-semibold">{photo.label}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
