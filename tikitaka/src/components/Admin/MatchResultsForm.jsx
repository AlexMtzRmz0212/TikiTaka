// components/Admin/MatchResultsForm.jsx
import React, { useState } from 'react';

const MatchResultsForm = ({ equipos, onUpdate }) => {
  const [partido, setPartido] = useState({
    equipoLocal: '',
    equipoVisitante: '',
    golesLocal: '',
    golesVisitante: '',
    jornada: '11'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (partido.equipoLocal === partido.equipoVisitante) {
      alert('❌ No se puede seleccionar el mismo equipo');
      return;
    }
    onUpdate(partido);
    setPartido({
      equipoLocal: '',
      equipoVisitante: '',
      golesLocal: '',
      golesVisitante: '',
      jornada: '11'
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-turf-dark mb-6 flex items-center">
        <span className="text-3xl mr-3">⚽</span>
        Registrar Resultado de Partido
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-turf-dark mb-2">
            Jornada
          </label>
          <select 
            value={partido.jornada}
            onChange={(e) => setPartido({...partido, jornada: e.target.value})}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent"
          >
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(j => (
              <option key={j} value={j}>Jornada {j}</option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-turf-dark mb-2">
              Equipo Local
            </label>
            <select 
              required
              value={partido.equipoLocal}
              onChange={(e) => setPartido({...partido, equipoLocal: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent"
            >
              <option value="">Seleccionar equipo</option>
              {equipos.map(eq => (
                <option key={eq.id} value={eq.nombre}>{eq.nombre}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-turf-dark mb-2">
              Goles Local
            </label>
            <input 
              type="number" 
              min="0"
              max="20"
              required
              value={partido.golesLocal}
              onChange={(e) => setPartido({...partido, golesLocal: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent text-center text-2xl font-bold"
              placeholder="0"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-turf-dark mb-2">
              Equipo Visitante
            </label>
            <select 
              required
              value={partido.equipoVisitante}
              onChange={(e) => setPartido({...partido, equipoVisitante: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent"
            >
              <option value="">Seleccionar equipo</option>
              {equipos.map(eq => (
                <option key={eq.id} value={eq.nombre}>{eq.nombre}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-turf-dark mb-2">
              Goles Visitante
            </label>
            <input 
              type="number" 
              min="0"
              max="20"
              required
              value={partido.golesVisitante}
              onChange={(e) => setPartido({...partido, golesVisitante: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent text-center text-2xl font-bold"
              placeholder="0"
            />
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button type="submit" className="bg-accent hover:bg-accent-bright text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg transition transform hover:scale-105">
            Registrar Resultado
          </button>
        </div>
      </form>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-turf-dark mb-2">📋 Últimos Resultados Registrados</h3>
        <div className="text-sm text-gray-600">
          <p>• Los Cuervos FC 3 - 1 Tiburones Rojos (Jornada 10)</p>
          <p>• Atlético Azteca 2 - 2 Águilas Doradas (Jornada 10)</p>
          <p className="text-accent font-semibold mt-2">→ Próximo: Registra la Jornada 11</p>
        </div>
      </div>
    </div>
  );
};

export default MatchResultsForm;