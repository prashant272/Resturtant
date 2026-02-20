import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus, User } from 'lucide-react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const result = await register(formData);

        if (result.success) {
            navigate('/');
        } else {
            setError(result.message);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-dark-900 pt-24 pb-12 px-4 flex items-center justify-center">
            <div className="w-full max-w-md bg-dark-800 p-8 rounded-lg border border-white/10 shadow-2xl">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                        <UserPlus size={32} />
                    </div>
                    <h1 className="text-3xl font-display text-white">Create Account</h1>
                    <p className="text-gray-400 mt-2">Join us for exclusive offers and faster checkout</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded mb-6 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-400 text-sm mb-1 ml-1">Full Name</label>
                        <input
                            type="text" name="name" required
                            value={formData.name} onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm mb-1 ml-1">Email Address</label>
                        <input
                            type="email" name="email" required
                            value={formData.email} onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm mb-1 ml-1">Phone Number</label>
                        <input
                            type="tel" name="phone" required
                            value={formData.phone} onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm mb-1 ml-1">Password (Min 6 chars)</label>
                        <input
                            type="password" name="password" required minLength="6"
                            value={formData.password} onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm mb-1 ml-1">Address (Optional)</label>
                        <textarea
                            name="address" rows="2"
                            value={formData.address} onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gold text-black font-bold py-3 rounded-lg hover:bg-white transition-colors uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <div className="mt-6 text-center text-gray-400 text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-gold hover:underline font-bold">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
