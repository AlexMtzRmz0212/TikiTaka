// components/Layout/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Add this import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-turf-dark to-turf text-white shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="text-2xl font-black text-white">⚽</span>
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight">Tikitaka</h1>
              <p className="text-xs text-field">Fútbol • Pasión • Comunidad</p>
            </div>
          </div>
          
          {/* Desktop Menu - These are fine as href because they use # anchor tags */}
          <div className="hidden md:flex space-x-8 font-semibold">
            <a href="#inicio" className="hover:text-accent-bright transition">Inicio</a>
            <a href="#precios" className="hover:text-accent-bright transition">Precios</a>
            <a href="#reglamento" className="hover:text-accent-bright transition">Reglamento</a>
            <a href="#galeria" className="hover:text-accent-bright transition">Galería</a>
            <a href="#torneos" className="hover:text-accent-bright transition">Torneos</a>
            <a href="#reservar" className="hover:text-accent-bright transition">Reservar</a>
          </div>

          {/* Admin Link - 2. Changed from <a> to <Link> and href to 'to' */}
          <Link to="/admin" className="hidden md:block bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm transition">
            Portal Admin
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#inicio" className="block hover:text-accent-bright transition py-2">Inicio</a>
            <a href="#precios" className="block hover:text-accent-bright transition py-2">Precios</a>
            <a href="#reglamento" className="block hover:text-accent-bright transition py-2">Reglamento</a>
            <a href="#galeria" className="block hover:text-accent-bright transition py-2">Galería</a>
            <a href="#torneos" className="block hover:text-accent-bright transition py-2">Torneos</a>
            <a href="#reservar" className="block hover:text-accent-bright transition py-2">Reservar</a>
            
            {/* 3. Also changed the mobile admin link */}
            <Link to="/admin" onClick={() => setIsOpen(false)} className="block bg-white/20 px-4 py-2 rounded-full text-sm text-center">
              Portal Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;