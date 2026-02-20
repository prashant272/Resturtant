import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Utensils, LogOut, Package } from 'lucide-react';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    const menuItems = [
        { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/menu', icon: Utensils, label: 'Menu Management' },
        { path: '/admin/orders', icon: Package, label: 'Orders' },
    ];

    return (
        <div className="flex h-screen bg-dark-900 text-white">
            {/* Sidebar */}
            <aside className={`bg-dark-800 border-r border-white/10 ${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 flex flex-col`}>
                <div className="p-6 flex items-center justify-between border-b border-white/10 h-20">
                    <span className={`font-display text-gold-gradient font-bold text-xl ${!isSidebarOpen && 'hidden'}`}>Biryani YoYo</span>
                    <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-white/5 rounded text-gold">
                        <LayoutDashboard size={20} />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center space-x-4 p-3 rounded transition-colors ${location.pathname === item.path
                                    ? 'bg-gold text-black font-bold'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-gold'
                                }`}
                        >
                            <item.icon size={20} />
                            {isSidebarOpen && <span>{item.label}</span>}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-4 p-3 w-full text-red-400 hover:bg-red-500/10 hover:text-red-500 rounded transition-colors"
                    >
                        <LogOut size={20} />
                        {isSidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-black/20 p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminDashboard;
