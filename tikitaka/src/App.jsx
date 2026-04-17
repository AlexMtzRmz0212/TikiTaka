// App.jsx
import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Public/HeroSection';
import PricingSection from './components/Public/PricingSection';
import RulesSection from './components/Public/RulesSection';
import GallerySection from './components/Public/GallerySection';
import BookingSection from './components/Public/BookingSection';
import TournamentsSection from './components/Public/TournamentsSection';
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminRoute, setIsAdminRoute] = useState(window.location.pathname === '/admin');

  // Simple routing simulation
  React.useEffect(() => {
    const handleRoute = () => {
      setIsAdminRoute(window.location.pathname === '/admin');
    };
    window.addEventListener('popstate', handleRoute);
    return () => window.removeEventListener('popstate', handleRoute);
  }, []);

  if (isAdminRoute) {
    return isAdmin ? 
      <AdminDashboard onLogout={() => setIsAdmin(false)} /> : 
      <AdminLogin onLogin={setIsAdmin} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <PricingSection />
        <RulesSection />
        <GallerySection />
        <TournamentsSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;