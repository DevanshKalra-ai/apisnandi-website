"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Global Reach", href: "#global" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={clsx(
                "fixed w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                <Link href="/">
                    <Image
                        src={isScrolled ? "/assets/images/apis_logo.png" : "/assets/images/white-logo.webp"}
                        alt="Apis Nandi Logo"
                        width={180}
                        height={60}
                        priority
                        className="w-auto h-10 object-contain"
                    />
                </Link>
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "text-sm font-semibold tracking-wide transition-colors",
                                isScrolled ? "text-gray-800 hover:text-[#023e9f]" : "text-white hover:text-white/80"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href="tel:+911145600976"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#023e9f] text-white font-semibold text-sm hover:bg-[#1a5bc9] transition-all shadow-md hover:shadow-lg"
                    >
                        <PhoneCall size={16} />
                        Let's Talk
                    </Link>
                </div>
                <button
                    className={clsx("lg:hidden p-2", isScrolled ? "text-gray-900" : "text-white")}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden flex flex-col pt-4 pb-6 px-6 gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-800 font-semibold text-lg py-2 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="tel:+911145600976"
                            className="flex items-center justify-center gap-2 mt-4 px-6 py-3 rounded-full bg-[#023e9f] text-white font-semibold flex-1"
                        >
                            <PhoneCall size={18} />
                            Let's Talk
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
