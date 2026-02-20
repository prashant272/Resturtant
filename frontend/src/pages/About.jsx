import React from 'react';
import { Utensils, Award, Leaf, Truck, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-dark-900 min-h-screen pt-24 pb-20 text-white">
            {/* Hero Section */}
            <div className="relative h-[40vh] mb-20 flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1631515243349-e06036043944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900"></div>
                <div className="relative z-10 text-center px-6">
                    <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase block mb-4">
                        Our Story
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display text-white mb-2">
                        Welcome to <span className="text-gold-gradient italic">Biryani YoYo</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-5xl">
                {/* Introduction */}
                <section className="text-center mb-24">
                    <h2 className="text-3xl font-display text-white mb-8">
                        Serving Flavors that Create <span className="text-gold italic">Memories</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                        Founded with a passion for authentic taste and modern convenience, <strong className="text-white">Biryani YoYo</strong> is a cloud kitchen brand dedicated to delivering high-quality biryani, kebabs, and flavorful Indian dishes straight to your doorstep. We don't just serve food; we deliver an experience.
                    </p>
                </section>

                {/* What We Offer */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="relative">
                        <div className="absolute -inset-4 border border-gold/20 rounded-lg transform rotate-3"></div>
                        <img
                            src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Premium Biryani"
                            className="relative rounded-lg shadow-2xl grayscale-0 hover:grayscale transition-all duration-500"
                        />
                    </div>
                    <div>
                        <h3 className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">What We Offer</h3>
                        <h2 className="text-4xl font-display mb-8">Beyond Just Biryani</h2>
                        <ul className="space-y-4">
                            {[
                                "Authentic Chicken & Mutton Biryani",
                                "Flavor-packed Veg & Paneer Biryani",
                                "Freshly grilled Kebabs & Tikkas",
                                "Signature Starters",
                                "Value Combo Meals"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center space-x-4 group">
                                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                                        <Utensils size={14} />
                                    </span>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-gray-400 text-sm italic border-l-2 border-gold pl-4">
                            "Every dish is prepared using carefully selected ingredients, balanced spices, and hygienic cooking practices to ensure consistency in taste and quality."
                        </p>
                    </div>
                </section>

                {/* Our Commitment */}
                <section className="mb-24">
                    <div className="text-center mb-16">
                        <h3 className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-2">Why Choose Us</h3>
                        <h2 className="text-4xl font-display text-white">Our Commitment</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { icon: Leaf, title: "Freshly Prepared", desc: "Meals made fresh daily." },
                            { icon: Award, title: "Premium Quality", desc: "Top-tier ingredients only." },
                            { icon: ShieldCheck, title: "Hygienic Standards", desc: "Strict kitchen protocols." },
                            { icon: Utensils, title: "Eco-Friendly", desc: "Secure & sustainable packaging." },
                            { icon: Truck, title: "Fast Delivery", desc: "Reliable doorstep service." }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-dark-800 p-6 rounded-lg border border-white/5 text-center hover:border-gold/30 transition-all hover:-translate-y-2">
                                <feature.icon className="mx-auto text-gold mb-4" size={32} />
                                <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                                <p className="text-xs text-gray-500">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Vision */}
                <section className="bg-white/5 rounded-2xl p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                    <h3 className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-6">Our Vision</h3>
                    <h2 className="text-3xl md:text-5xl font-display text-white mb-8 leading-tight">
                        "To become a trusted name for flavorful, affordable, and high-quality food that customers can rely on every time."
                    </h2>
                    <div className="inline-block mt-4">
                        <p className="text-lg text-gray-300 font-light">
                            At <strong className="text-white">Biryani YoYo</strong>, every bite is crafted with passion and served with pride.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
