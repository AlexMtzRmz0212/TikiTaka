// components/Public/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-turf via-turf-dark to-turf-dark text-white py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Vive la Pasión del <span className="text-accent-bright">Fútbol</span> en Tikitaka
            </h1>
            <p className="text-xl text-field mb-8">
              Canchas de primer nivel, torneos emocionantes y la mejor comunidad futbolera de México.
            </p>
            <div className="flex space-x-4">
              <a href="#reservar" className="btn-primary">
                Reserva tu Cancha
              </a>
              <a href="#torneos" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-full transition">
                Ver Torneos
              </a>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop" className="w-10 h-10 rounded-full border-2 border-white" alt="Jugador" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop" className="w-10 h-10 rounded-full border-2 border-white" alt="Jugador" />
                <img src="https://images.unsplash.com/photo-1494790108755-2612896a6959?w=40&h=40&fit=crop" className="w-10 h-10 rounded-full border-2 border-white" alt="Jugador" />
              </div>
              <p className="text-sm text-field">
                <span className="font-bold text-white">+500</span> jugadores activos
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl p-2 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1579952363873-27f9bade9f55?w=800&h=600&fit=crop" 
                alt="Cancha de fútbol Tikitaka"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-white px-6 py-3 rounded-full shadow-lg">
              <span className="font-bold">⚡ 8 Canchas Disponibles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;