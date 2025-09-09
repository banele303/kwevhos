import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gray-950 text-gray-200">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/15 via-emerald-400/10 to-transparent pointer-events-none" />
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <h3 className="text-2xl font-extrabold tracking-tight whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-300">Kwevhos Business Enterprise</h3>
                        <p className="mt-3 text-sm text-gray-400 max-w-xs">Empowering industries with innovative solutions.</p>
                        <div className="mt-5 flex items-center gap-3">
                            <a aria-label="Facebook" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                                <Facebook size={18} />
                            </a>
                            <a aria-label="Twitter" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                                <Twitter size={18} />
                            </a>
                            <a aria-label="Instagram" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                                <Instagram size={18} />
                            </a>
                            <a aria-label="LinkedIn" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                            <li><Link href="/about-us" className="text-gray-400 hover:text-white">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                            {/* Environmental link removed - content moved under About Us */}
                            {/* Careers link removed */}
                            <li><Link href="/contacts" className="text-gray-400 hover:text-white">Contacts</Link></li>
                        </ul>
                    </div>

                

                    
                </div>

                <div className="mt-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 text-center">
                    <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Kwevhos Business Enterprise. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
