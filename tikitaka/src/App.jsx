// App.jsx
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Your existing imports
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

  return (
    // Wrap the whole app in HashRouter so it works on GitHub Pages
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        
        <Routes>
          {/* Public Page Route */}
          <Route path="/" element={
            <>
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
            </>
          } />

          {/* Admin Page Route */}
          <Route path="/admin" element={
            isAdmin ? 
              <AdminDashboard onLogout={() => setIsAdmin(false)} /> : 
              <AdminLogin onLogin={setIsAdmin} />
          } />
        </Routes>

      </div>
    </HashRouter>
  );
}

export default App;