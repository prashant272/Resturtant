import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import MenuManagement from './pages/MenuManagement';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import OrderManagement from './pages/OrderManagement';
import MyOrders from './pages/MyOrders';
import ScrollToTop from './components/ScrollToTop';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/admin/login" />;
};

import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
// ... imports

import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';

// ... existing imports ...

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Admin Routes (No Navbar/Footer) */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>}>
              <Route path="dashboard" element={<div className="text-white text-2xl">Welcome to Admin Dashboard</div>} />
              <Route path="menu" element={<MenuManagement />} />
              <Route path="orders" element={<OrderManagement />} />
            </Route>

            {/* Public Routes */}
            <Route path="*" element={
              <div className="flex flex-col min-h-screen bg-dark-900 text-white font-sans">
                <Navbar />
                <CartDrawer />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/my-orders" element={<MyOrders />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-success" element={<OrderSuccess />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            } />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
