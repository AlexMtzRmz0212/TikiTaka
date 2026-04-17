// components/Public/PricingSection.jsx
import React from 'react';
import { precios } from '../../data/mockData';

const PricingSection = () => {
  return (
    <section id="precios" className="py-20 bg-gradient-to-b from-white to-sand">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block">Nuestros Precios</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Tarifas competitivas para que disfrutes del mejor fútbol en instalaciones de primer nivel
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {precios.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-accent">
              <div className="text-accent text-4xl mb-4">⚽</div>
              <h3 className="text-xl font-bold text-turf-dark mb-2">{item.tipo}</h3>
              <p className="text-3xl font-black text-accent mb-3">{item.precio}</p>
              <p className="text-gray-500 text-sm">{item.horario}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-turf font-semibold mb-4">✨ Paquetes especiales para ligas y torneos corporativos</p>
          <button className="btn-primary">Solicitar Cotización</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;