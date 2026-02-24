import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        '/biryani/1.jpg',
        '/biryani/2.jpg',
        '/biryani/3.jpg',
        '/biryani/4.jpg',
        '/biryani/5.jpg',
        '/biryani/6.jpg',
        '/biryani/7.jpg',
        '/biryani/8.jpg',
        '/biryani/9.jpg',
        '/biryani/10.jpg',
        '/biryani/11.jpg',
        '/biryani/12.jpg',
        '/biryani/13.jpg',
        '/biryani/14.jpg',
    ];

    const categories = [
        { label: 'Chicken Biryani', emoji: '🍗', path: '/menu?category=Chicken%20Biryani' },
        { label: 'Mutton Biryani', emoji: '🥩', path: '/menu?category=Mutton%20Biryani' },
        { label: 'Veg Special', emoji: '🥗', path: '/menu?category=Veg' },
        { label: 'Kebabs & Starters', emoji: '🔥', path: '/menu?category=Starters' },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-dark-900">

            {/* Full-Screen Background Slider */}
            <div className="absolute inset-0 z-0">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={img}
                            alt={`Biryani ${index + 1}`}
                            className="w-full h-full object-cover object-center"
                        />
                        {/* Universal dark overlay */}
                        <div className="absolute inset-0 bg-black/60 lg:bg-black/40"></div>
                        {/* Desktop: left dark gradient so right side image shows */}
                        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-dark-900 via-dark-900/60 to-transparent"></div>
                        {/* Mobile: top-bottom gradient */}
                        <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-dark-900/40 via-transparent to-dark-900"></div>
                    </div>
                ))}
            </div>

            {/* Slide indicator dots */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-20 lg:left-auto lg:translate-x-0 lg:bottom-10 lg:right-10">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImage ? 'w-8 bg-gold' : 'w-1.5 bg-white/30 hover:bg-white/60'}`}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-8 lg:pt-20 lg:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* ─── Left Column: Branding (7 cols) ─── */}
                    <div className="lg:col-span-7 text-center lg:text-left animate-fade-in-up">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-8 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                            <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
                                Premium Cloud Kitchen · Dwarka
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8 leading-[1.1] drop-shadow-2xl">
                            Swad Jo <br />
                            <span className="text-gold-gradient italic">Dil Se Juda Hai</span>
                        </h1>

                        <p className="text-white/80 text-lg md:text-xl mb-12 font-light tracking-widest uppercase leading-relaxed max-w-2xl">
                            Dum Biryani · Shahi Kebabs <br className="hidden md:block" /> · Ghar Ka Swad · Seedha Aapke Darwaze Tak
                        </p>

                        {/* Rating strip */}
                        <div className="flex items-center justify-center lg:justify-start gap-6 mb-10">
                            <div className="flex items-center gap-1.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="text-gold fill-gold" />
                                ))}
                                <span className="text-white/60 text-sm ml-2">4.8 Rating</span>
                            </div>
                            <div className="w-px h-5 bg-white/20"></div>
                            <span className="text-white/60 text-sm">2000+ Happy Customers</span>
                            <div className="w-px h-5 bg-white/20"></div>
                            <span className="text-white/60 text-sm">45 Min Delivery</span>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                            <button
                                onClick={() => navigate('/menu?category=Chicken%20Biryani')}
                                className="px-8 md:px-10 py-4 md:py-5 bg-gold text-black font-bold uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:scale-105 flex items-center gap-3 shadow-2xl shadow-gold/40 rounded-xl text-sm md:text-base"
                            >
                                🛒 Order Now
                            </button>
                            <button
                                onClick={() => navigate('/menu')}
                                className="px-8 md:px-10 py-4 md:py-5 bg-white/10 border border-white/30 text-white font-bold uppercase tracking-[0.2em] hover:bg-white/20 transition-all backdrop-blur-xl rounded-xl text-sm md:text-base"
                            >
                                📖 Full Menu
                            </button>
                        </div>
                    </div>

                    {/* ─── Right Column: Order Card (5 cols) ─── */}
                    <div className="lg:col-span-5 animate-fade-in-up mb-8 lg:mb-0">
                        <div className="bg-dark-900/40 border border-white/20 rounded-[2.5rem] p-6 lg:p-8 backdrop-blur-3xl shadow-3xl relative overflow-hidden group hover:border-gold/40 transition-all duration-700">

                            {/* Glow */}
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-gold/10 transition-colors"></div>

                            <div className="relative z-10">
                                <div className="mb-4 text-center lg:text-left">
                                    <h3 className="text-2xl md:text-3xl font-display text-white mb-2">Quick Order</h3>
                                    <p className="text-gold/60 text-[10px] uppercase tracking-[0.2em] font-bold">Choose Your Craving</p>
                                </div>

                                <div className="space-y-2 mb-4">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.label}
                                            onClick={() => navigate(cat.path)}
                                            className="w-full flex items-center justify-between bg-white/5 hover:bg-gold/10 border border-white/10 hover:border-gold/30 px-5 py-3 rounded-2xl transition-all duration-300 group/item"
                                        >
                                            <span className="flex items-center gap-3 text-white font-medium text-sm">
                                                <span className="text-xl">{cat.emoji}</span>
                                                {cat.label}
                                            </span>
                                            <ArrowRight size={16} className="text-white/30 group-hover/item:text-gold group-hover/item:translate-x-1 transition-all" />
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => navigate('/menu')}
                                    className="w-full py-3.5 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-all rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-gold/20 text-base group/btn"
                                >
                                    Explore Full Menu <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                                </button>

                                {/* Trust strip */}
                                <div className="mt-5">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="h-px flex-1 bg-white/10"></div>
                                        <span className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-bold">Why Choose Us</span>
                                        <div className="h-px flex-1 bg-white/10"></div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                                        {['100% Halal Meat', 'Fresh Daily', 'No Maida', 'Pure Desi Ghee'].map(item => (
                                            <div key={item} className="flex items-center gap-2.5 group/tag">
                                                <div className="w-1 h-1 bg-gold rounded-full opacity-40 group-hover/tag:opacity-100 transition-opacity"></div>
                                                <span className="text-[9px] text-white/50 font-bold tracking-[0.15em] group-hover/tag:text-gold transition-colors uppercase">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-30 hidden lg:block">
                <ChevronDown size={28} className="text-white" />
            </div>
        </section>
    );
};

export default Hero;
