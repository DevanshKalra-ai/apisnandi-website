import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 border-t border-gray-800" id="contact">
            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 lg:col-span-1">
                    <Link href="/">
                        <Image
                            src="/assets/images/white-logo.webp"
                            alt="Apis Nandi Logo"
                            width={200}
                            height={60}
                            className="w-auto h-12 object-contain mb-6"
                        />
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Protection with Precision. Partnership with Purpose. Apis Nandi Insurance Brokers Pvt. Ltd. provides complete tailored insurance solutions and proactive risk management advisory.
                    </p>
                </div>

                <div>
                    <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><Link href="#about" className="hover:text-[#2cb2b3] transition-colors">About Us</Link></li>
                        <li><Link href="#services" className="hover:text-[#2cb2b3] transition-colors">Our Services</Link></li>
                        <li><Link href="#global" className="hover:text-[#2cb2b3] transition-colors">Global Network</Link></li>
                        <li><Link href="#contact" className="hover:text-[#2cb2b3] transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white text-lg font-semibold mb-6">Services</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><Link href="#" className="hover:text-[#2cb2b3] transition-colors">Risk / Policy Audit</Link></li>
                        <li><Link href="#" className="hover:text-[#2cb2b3] transition-colors">Claim Consultancy</Link></li>
                        <li><Link href="#" className="hover:text-[#2cb2b3] transition-colors">Loss Minimization</Link></li>
                        <li><Link href="#" className="hover:text-[#2cb2b3] transition-colors">Insurance Placement</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white text-lg font-semibold mb-6">Contact Info</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex gap-3">
                            <MapPin className="text-[#2cb2b3] flex-shrink-0 mt-0.5" size={18} />
                            <span>
                                Apis Nandi Insurance Brokers Pvt. Ltd.<br />
                                New Delhi, India
                            </span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Phone className="text-[#2cb2b3] flex-shrink-0" size={18} />
                            <Link href="tel:+911145600976" className="hover:text-white transition-colors">(+91) 11 4560 0976</Link>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Mail className="text-[#2cb2b3] flex-shrink-0" size={18} />
                            <Link href="mailto:info@apisnandi.in" className="hover:text-white transition-colors">info@apisnandi.in</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} Apis Nandi Insurance Brokers Pvt. Ltd. All Rights Reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
