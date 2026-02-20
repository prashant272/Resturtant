import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const { cart, isCartOpen, setIsCartOpen } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo.jpeg" alt="Biryani YoYo Logo" className="h-12 w-auto rounded-full border-2 border-gold" />
                        <span className="text-2xl font-bold font-display tracking-wider text-gold-gradient">
                            Biryani YoYo
                        </span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-widest">
                        Home
                    </Link>
                    <Link to="/menu" className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-widest">
                        Menu
                    </Link>
                    <Link to="/about" className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-widest">
                        About
                    </Link>
                    <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-widest">
                        Contact
                    </Link>
                </div>

                {/* Icons */}
                <div className="hidden md:flex items-center space-x-6">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <Link to="/my-orders" className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-widest">
                                My Orders
                            </Link>
                            <span className="text-gold font-bold">{user.name.split(' ')[0]}</span>
                            <button onClick={logout} className="text-gray-400 hover:text-white text-sm uppercase tracking-widest">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-widest">
                            Login
                        </Link>
                    )}

                    <button onClick={() => setIsCartOpen(!isCartOpen)} className="text-gray-300 hover:text-gold transition-colors relative">
                        <ShoppingBag size={20} />
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-gold text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gold focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 py-4 flex flex-col items-center space-y-4">
                    <Link
                        to="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-300 hover:text-gold text-lg uppercase tracking-widest"
                    >
                        Home
                    </Link>
                    <Link
                        to="/menu"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-300 hover:text-gold text-lg uppercase tracking-widest"
                    >
                        Menu
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-300 hover:text-gold text-lg uppercase tracking-widest"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-300 hover:text-gold text-lg uppercase tracking-widest"
                    >
                        Contact
                    </Link>

                    {user ? (
                        <>
                            <Link to="/my-orders" onClick={() => setIsMobileMenuOpen(false)} className="text-gold text-lg uppercase tracking-widest">My Orders</Link>
                            <button onClick={logout} className="text-gray-400 text-lg uppercase tracking-widest">Logout</button>
                        </>
                    ) : (
                        <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-gold text-lg uppercase tracking-widest">Login</Link>
                    )}
                    <button onClick={() => { setIsCartOpen(!isCartOpen); setIsMobileMenuOpen(false); }} className="text-gold mt-4 flex items-center space-x-2">
                        <ShoppingBag size={20} />
                        <span>View Cart {cart.length > 0 && `(${cart.length})`}</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
