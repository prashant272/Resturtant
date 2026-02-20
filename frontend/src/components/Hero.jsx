import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState(0);

    // Array of images from the public/biryani folder
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
        '/biryani/14.jpg'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(timer);
    }, [images.length]);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="relative min-h-screen w-full flex items-center bg-dark-900 pt-20 overflow-hidden">
            {/* Background with slight overlay for texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Content */}
                <div className="text-center lg:text-left">
                    <span className="block text-gold text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
                        Premium Cloud Kitchen
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display text-white mb-6 leading-tight animate-fade-in-up delay-100">
                        Swad Jo <br />
                        <span className="text-gold-gradient italic">Dil Se Juda Hai</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-10 font-light tracking-wide animate-fade-in-up delay-200">
                        Har bite mein asli Dum Biryani ka dum, haathon se taiyaar kebabs, aur shahi Indian flavors — bilkul ghar jaisa, seedha aapke ghar tak.
                    </p>

                    <div className="flex justify-center lg:justify-start flex-wrap gap-4 animate-fade-in-up delay-300">
                        <button
                            onClick={() => navigate('/menu?category=Chicken%20Biryani')}
                            className="px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 flex items-center gap-2"
                        >
                            🛒 Order Fresh Biryani
                        </button>
                        <button
                            onClick={() => navigate('/menu')}
                            className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2"
                        >
                            📖 Explore Full Menu
                        </button>
                    </div>
                </div>

                {/* Right Side: Image Slider */}
                <div className="relative h-[300px] md:h-[400px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-fade-in-up delay-200 group">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlay for better integration */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                        </div>
                    ))}

                    {/* Slider Controls */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-gold text-white hover:text-black p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-gold text-white hover:text-black p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImage(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentImage ? 'bg-gold w-6' : 'bg-white/50 hover:bg-white'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
