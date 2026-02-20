import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Contact = () => {
    const [openFaq, setOpenFaq] = React.useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "Do you offer home delivery?",
            answer: "Yes! We offer fast and reliable home delivery within 45 minutes for orders within our delivery radius."
        },
        {
            question: "Is the meat 100% Halal?",
            answer: "Absolutely. We use only premium quality, 100% Halal certified meat for all our preparations."
        },
        {
            question: "Do you take bulk orders for parties?",
            answer: "Yes, we specialize in party orders! Please contact us at least 24 hours in advance for bulk requirements."
        }
    ];

    return (
        <div className="bg-dark-900 min-h-screen pt-24 pb-20 text-white">
            {/* Header */}
            <div className="container mx-auto px-6 text-center mb-16">
                <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase block mb-4">
                    Contact Us
                </span>
                <h1 className="text-4xl md:text-6xl font-display text-white mb-6">
                    Get in Touch with <span className="text-gold-gradient italic">Biryani YoYo</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    We would love to hear from you! Whether you have a question about our menu, want to place a bulk order, or give feedback.
                </p>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column: Contact Info & Map */}
                <div className="space-y-12">
                    {/* Contact Details Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-dark-800 p-6 rounded-lg border border-white/5 hover:border-gold/30 transition-all">
                            <MapPin className="text-gold mb-4" size={28} />
                            <h3 className="font-bold text-white mb-2">Our Kitchen</h3>
                            <p className="text-gray-400 text-sm">Biryani YoYo<br />Shop no. F10,11 , 1st floor, H L Plaza,<br />Sector 12 market, Dwarka-110075</p>
                        </div>
                        <div className="bg-dark-800 p-6 rounded-lg border border-white/5 hover:border-gold/30 transition-all">
                            <Phone className="text-gold mb-4" size={28} />
                            <h3 className="font-bold text-white mb-2">Call / WhatsApp</h3>
                            <p className="text-gray-400 text-sm">926639266</p>
                        </div>
                        <div className="bg-dark-800 p-6 rounded-lg border border-white/5 hover:border-gold/30 transition-all">
                            <Mail className="text-gold mb-4" size={28} />
                            <h3 className="font-bold text-white mb-2">Email Us</h3>
                            <p className="text-gray-400 text-sm">support@biryaniyoyo.com</p>
                        </div>
                        <div className="bg-dark-800 p-6 rounded-lg border border-white/5 hover:border-gold/30 transition-all">
                            <Clock className="text-gold mb-4" size={28} />
                            <h3 className="font-bold text-white mb-2">Operating Hours</h3>
                            <p className="text-gray-400 text-sm">Mon – Sun<br />11:00 AM – 11:00 PM</p>
                        </div>
                    </div>

                    {/* Google Map Embed */}
                    <div className="rounded-lg overflow-hidden border border-white/10 h-64 md:h-80 w-full relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562095818956!2d77.20902121508218!3d28.61393908242409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd35fc8239e9%3A0x64426550a296710!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1628151234567!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                        <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-gold/10"></div>
                    </div>

                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/910000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-all uppercase tracking-wider"
                    >
                        <MessageCircle size={24} />
                        Chat on WhatsApp
                    </a>
                </div>

                {/* Right Column: Form & FAQ */}
                <div className="space-y-12">
                    {/* Contact Form */}
                    <div className="bg-dark-800 p-8 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-display text-white mb-6">Send Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gold text-xs font-bold uppercase tracking-wider mb-2">Name</label>
                                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded p-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-gold text-xs font-bold uppercase tracking-wider mb-2">Phone</label>
                                    <input type="tel" className="w-full bg-black/40 border border-white/10 rounded p-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="+91 XXXXX XXXXX" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gold text-xs font-bold uppercase tracking-wider mb-2">Email</label>
                                <input type="email" className="w-full bg-black/40 border border-white/10 rounded p-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-gold text-xs font-bold uppercase tracking-wider mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-black/40 border border-white/10 rounded p-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full bg-gold text-black font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* FAQ Section */}
                    <div>
                        <h3 className="text-2xl font-display text-white mb-6">Common Questions</h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                                    >
                                        <span className="font-bold text-gray-200">{faq.question}</span>
                                        {openFaq === index ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-gray-500" />}
                                    </button>
                                    {openFaq === index && (
                                        <div className="px-6 pb-4 text-gray-400 text-sm border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center bg-gold/10 p-8 rounded-xl border border-gold/20">
                        <h4 className="text-xl font-display text-white mb-2">Ready to taste the magic?</h4>
                        <p className="text-gray-400 text-sm mb-6">Order now and get 20% off on your first order!</p>
                        <button className="px-8 py-3 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
