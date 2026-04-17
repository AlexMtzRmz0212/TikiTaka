// components/Public/RulesSection.jsx
import React from 'react';

const RulesSection = () => {
  const reglas = [
    { icon: "👟", titulo: "Calzado Reglamentario", descripcion: "Uso obligatorio de zapatos de fútbol para pasto sintético (multitacos). Prohibido el uso de tacos de aluminio." },
    { icon: "⏰", titulo: "Puntualidad", descripcion: "El tiempo de juego inicia puntual. Máximo 10 minutos de tolerancia para presentarse en cancha." },
    { icon: "🛡️", titulo: "Seguridad", descripcion: "No se permite el ingreso de mascotas, bicicletas o patinetas a la zona de canchas." },
    { icon: "🍺", titulo: "Convivencia", descripcion: "Prohibido introducir bebidas alcohólicas o sustancias ilegales a las instalaciones." },
    { icon: "👥", titulo: "Capacidad", descripcion: "Máximo 7 jugadores por equipo en cancha (fútbol 7). Cambios ilimitados durante el partido." },
    { icon: "💳", titulo: "Reservaciones", descripcion: "Pago anticipado para garantizar horario. Cancelaciones con 24 hrs de anticipación." }
  ];

  return (
    <section id="reglamento" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block">Reglamento Interno</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Normas básicas para garantizar la seguridad y sana convivencia de todos los jugadores
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reglas.map((regla, index) => (
            <div key={index} className="bg-gradient-to-br from-turf-light/5 to-turf/5 rounded-xl p-6 border-l-4 border-accent">
              <div className="text-3xl mb-3">{regla.icon}</div>
              <h3 className="font-bold text-lg text-turf-dark mb-2">{regla.titulo}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{regla.descripcion}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-sand rounded-xl border border-accent/20">
          <div className="flex items-start space-x-4">
            <span className="text-3xl">⚠️</span>
            <div>
              <h4 className="font-bold text-turf-dark mb-2">Reglas de Juego</h4>
              <p className="text-gray-600 text-sm">
                Se aplica el reglamento oficial de Fútbol 7 de la FEMEXFUT. El árbitro tiene la autoridad máxima durante los partidos. 
                En caso de tarjeta roja directa, el jugador será suspendido por el resto del torneo. Las decisiones arbitrales son inapelables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;