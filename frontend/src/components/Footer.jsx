import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-display font-bold text-gold-gradient">Biryani YoYo</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Elevating the cloud kitchen experience with premium ingredients and exceptional culinary service.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/share/1AgzmRXmwB/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white transition-all hover:scale-110"
                            >
                                <Facebook size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/biryaniyoyo?igsh=MWwxeWJtZGk0YWt0Mw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-[#E4405F] flex items-center justify-center text-white transition-all hover:scale-110"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="https://wa.me/91926639266"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white transition-all hover:scale-110"
                            >
                                <MessageCircle size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-gold mb-6 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="/" className="hover:text-gold transition-colors">Home</a></li>
                            <li><a href="/menu" className="hover:text-gold transition-colors">Our Menu</a></li>
                            <li><a href="/about" className="hover:text-gold transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Reservations</a></li>
                            <li><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold text-gold mb-6 uppercase tracking-wider">Contact Us</h3>
                        <ul className="space-y-6 text-sm text-gray-400">
                            <li className="flex items-start space-x-4">
                                <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                                <span>T-1, 3rd Floor, Ruff Toff</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Phone size={20} className="text-gold flex-shrink-0" />
                                <span>9319 9319 06</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Mail size={20} className="text-gold flex-shrink-0" />
                                <span>hello@biryaniyoyo.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold text-gold mb-6 uppercase tracking-wider">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-6">
                            Subscribe to our newsletter for seasonal updates and exclusive offers.
                        </p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors text-sm"
                            />
                            <button className="w-full py-3 bg-gold text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors rounded">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-xs tracking-wider">
                    &copy; {new Date().getFullYear()} Biryani YoYo. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
