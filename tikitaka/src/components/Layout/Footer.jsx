// components/Layout/Footer.jsx
import React from 'react';
import { FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-turf-dark to-turf text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">⚽</span>
              <h3 className="text-xl font-black">Tikitaka</h3>
            </div>
            <p className="text-field text-sm">
              El mejor lugar para jugar fútbol en la ciudad. Canchas profesionales, torneos emocionantes y la mejor comunidad.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-field">
              <li>📞 Tel: (444) 123-4567</li>
              <li>📧 Email: info@tikitaka.mx</li>
              <li>📍 Camino antiguo a Santa María del Río, Villa de Pozos 129, 78421 Pozos, S.L.P., Mexico</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Horarios</h4>
            <ul className="space-y-2 text-sm text-field">
              <li>Lunes a Viernes: 8:00 - 23:00</li>
              <li>Sábados: 7:00 - 23:00</li>
              <li>Domingos: 7:00 - 22:00</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-accent transition"><FaTiktok /></a>
              <a href="#" className="text-2xl hover:text-accent transition"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-accent transition"><FaInstagram /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-turf-light/30 mt-8 pt-8 text-center text-sm text-field">
          <p>© 2026 Tikitaka - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;