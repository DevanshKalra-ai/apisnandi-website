"use client";

import { motion } from "framer-motion";
import { CopyCheck, ShieldAlert, FileText, Map, Briefcase } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Risk / Policy Audit",
            description: "Comprehensive evaluation of existing insurance policies to identify coverage gaps, cost inefficiencies, and compliance risks.",
            icon: <FileText size={32} />,
            link: "#",
        },
        {
            title: "Loss Minimization",
            description: "Structured programs focused on reducing operational and financial losses through preventive strategies and continuous monitoring.",
            icon: <ShieldAlert size={32} />,
            link: "#",
        },
        {
            title: "Claim Consultancy",
            description: "End-to-end claims advisory support ensuring accurate documentation and faster settlements with insurers to maximize claim recovery outcomes.",
            icon: <CopyCheck size={32} />,
            link: "#",
        },
        {
            title: "Onsite Risk Audit",
            description: "Detailed on-ground inspections and operational assessments to evaluate risk exposure and implement corrective measures effectively.",
            icon: <Map size={32} />,
            link: "#",
        },
        {
            title: "Insurance Placement",
            description: "Strategic placement of insurance programs with leading insurers through structured market negotiations to secure competitive terms.",
            icon: <Briefcase size={32} />,
            link: "#",
        },
    ];

    return (
        <section id="services" className="py-24 bg-gray-50 border-t border-gray-100 relative">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#023e9f] font-bold tracking-widest text-sm uppercase mb-3"
                    >
                        Comprehensive Solutions
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
                    >
                        Risk & Insurance Services
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        We offer specialized services designed to safeguard your business operations. Our experts ensure every potential risk is assessed, mitigated, and covered.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group flex flex-col h-full"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-teal-50 text-[#2cb2b3] flex items-center justify-center mb-6 group-hover:bg-[#2cb2b3] group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                                {service.description}
                            </p>
                            <a href={service.link} className="text-[#023e9f] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                                Read More <span>&rarr;</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
