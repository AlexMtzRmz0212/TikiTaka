// components/Public/BookingSection.jsx
import React, { useState } from 'react';
import { horariosDisponibles } from '../../data/mockData';

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleReservaSubmit = (e) => {
    e.preventDefault();
    alert(`✅ ¡Reserva solicitada!\nFecha: ${selectedDate}\nHorario: ${selectedTime}\nTe contactaremos para confirmar.`);
  };

  const handleContactoSubmit = (e) => {
    e.preventDefault();
    alert(`✅ ¡Mensaje enviado!\nGracias por contactarnos, ${formData.nombre}. Responderemos en menos de 24 horas.`);
  };

  return (
    <section id="reservar" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block">Reserva tu Cancha</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Elige la fecha y horario que mejor te convenga. ¡Asegura tu espacio!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de Reserva */}
          <div className="bg-gradient-to-br from-turf/5 to-field/10 rounded-2xl p-8 border border-turf/20">
            <h3 className="text-2xl font-bold text-turf-dark mb-6 flex items-center">
              <span className="text-3xl mr-3">📅</span>
              Selecciona tu Horario
            </h3>
            
            <form onSubmit={handleReservaSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-turf-dark mb-2">Fecha de Reserva</label>
                <input 
                  type="date" 
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-turf-dark mb-2">Horario Disponible</label>
                <select 
                  required
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition"
                >
                  <option value="">Selecciona un horario</option>
                  {horariosDisponibles.map((horario, index) => (
                    <option key={index} value={horario}>{horario}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-turf-dark mb-2">Duración</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="duracion" value="1" defaultChecked className="mr-2 accent-accent" />
                    <span>1 Hora</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="duracion" value="2" className="mr-2 accent-accent" />
                    <span>2 Horas</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="duracion" value="3" className="mr-2 accent-accent" />
                    <span>3 Horas</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="w-full btn-primary">
                Reservar Ahora
              </button>
            </form>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-sand">
            <h3 className="text-2xl font-bold text-turf-dark mb-6 flex items-center">
              <span className="text-3xl mr-3">📞</span>
              Contáctanos
            </h3>
            
            <form onSubmit={handleContactoSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-turf-dark mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  placeholder="Ej. Juan Pérez"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-turf-dark mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="juan@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-turf-dark mb-2">Teléfono</label>
                <input 
                  type="tel" 
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                  placeholder="55 1234 5678"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-turf-dark mb-2">Mensaje o Comentarios</label>
                <textarea 
                  rows="3"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  placeholder="¿Tienes alguna pregunta o solicitud especial?"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-turf hover:bg-turf-dark text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;