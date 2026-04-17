// components/Admin/BracketManager.jsx
import React, { useState } from 'react';

const BracketManager = ({ bracket, equipos, onUpdate }) => {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [resultado, setResultado] = useState({ goles1: '', goles2: '' });

  const handleAvanzarEquipo = (fase, partidoId, ganador) => {
    if (window.confirm(`¿Confirmar que ${ganador} avanza a la siguiente ronda?`)) {
      const nuevoBracket = { ...bracket };
      
      // Lógica simplificada para avanzar equipos
      if (fase === 'cuartos') {
        const siguienteFase = nuevoBracket.semifinales.find(s => !s.equipo1 || !s.equipo2);
        if (siguienteFase) {
          if (!siguienteFase.equipo1) {
            siguienteFase.equipo1 = ganador;
          } else if (!siguienteFase.equipo2) {
            siguienteFase.equipo2 = ganador;
          }
        }
      } else if (fase === 'semifinales') {
        if (!nuevoBracket.final.equipo1) {
          nuevoBracket.final.equipo1 = ganador;
        } else if (!nuevoBracket.final.equipo2) {
          nuevoBracket.final.equipo2 = ganador;
        }
      }

      onUpdate(nuevoBracket);
      setSelectedMatch(null);
    }
  };

  const handleRegistrarResultado = (fase, partidoId) => {
    if (resultado.goles1 && resultado.goles2) {
      const nuevoBracket = { ...bracket };
      const partido = nuevoBracket[fase].find(p => p.id === partidoId) || 
                      (nuevoBracket[fase].id === partidoId ? nuevoBracket[fase] : null);
      
      if (partido) {
        partido.marcador1 = parseInt(resultado.goles1);
        partido.marcador2 = parseInt(resultado.goles2);
        const ganador = partido.marcador1 > partido.marcador2 ? partido.equipo1 : partido.equipo2;
        partido.ganador = ganador;
        
        onUpdate(nuevoBracket);
        setSelectedMatch(null);
        setResultado({ goles1: '', goles2: '' });
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-turf-dark mb-6">🏆 Gestión de Liguilla</h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-yellow-800">
            ⚡ Interfaz simplificada: Haz clic en "Registrar Marcador" para ingresar el resultado de un partido, 
            o usa "Avanzar Equipo" para mover manualmente un equipo a la siguiente ronda.
          </p>
        </div>

        {/* Cuartos de Final */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-accent mb-4">Cuartos de Final</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {bracket.cuartos.map((partido) => (
              <div key={partido.id} className="border-2 border-turf/20 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">{partido.equipo1}</span>
                  <span className="text-xl font-black">vs</span>
                  <span className="font-semibold">{partido.equipo2}</span>
                </div>
                
                {partido.marcador1 !== null ? (
                  <div className="text-center mb-3">
                    <span className="bg-turf/10 px-6 py-2 rounded-full font-bold">
                      {partido.marcador1} - {partido.marcador2}
                    </span>
                  </div>
                ) : (
                  <div className="text-center mb-3">
                    <span className="bg-gray-100 px-6 py-2 rounded-full text-gray-500">
                      Sin jugar
                    </span>
                  </div>
                )}

                <div className="flex space-x-2">
                  <button 
                    onClick={() => setSelectedMatch({fase: 'cuartos', id: partido.id})}
                    className="flex-1 bg-turf hover:bg-turf-dark text-white text-sm py-2 rounded-lg transition"
                  >
                    Registrar Marcador
                  </button>
                  {partido.ganador && (
                    <button 
                      onClick={() => handleAvanzarEquipo('cuartos', partido.id, partido.ganador)}
                      className="flex-1 bg-accent hover:bg-accent-bright text-white text-sm py-2 rounded-lg transition"
                    >
                      Avanzar a Semis
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Semifinales */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-accent mb-4">Semifinales</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {bracket.semifinales.map((partido) => (
              <div key={partido.id} className="border-2 border-accent/30 rounded-lg p-4 bg-gradient-to-r from-turf/5 to-field/5">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">{partido.equipo1 || 'Por definir'}</span>
                  <span className="text-xl font-black">vs</span>
                  <span className="font-semibold">{partido.equipo2 || 'Por definir'}</span>
                </div>
                
                {partido.marcador1 !== null && partido.equipo1 && partido.equipo2 ? (
                  <>
                    <div className="text-center mb-3">
                      <span className="bg-accent/20 px-6 py-2 rounded-full font-bold">
                        {partido.marcador1} - {partido.marcador2}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedMatch({fase: 'semifinales', id: partido.id})}
                        className="flex-1 bg-turf hover:bg-turf-dark text-white text-sm py-2 rounded-lg transition"
                      >
                        Editar Marcador
                      </button>
                      {partido.ganador && (
                        <button 
                          onClick={() => handleAvanzarEquipo('semifinales', partido.id, partido.ganador)}
                          className="flex-1 bg-accent hover:bg-accent-bright text-white text-sm py-2 rounded-lg transition"
                        >
                          Avanzar a Final
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    <span className="text-gray-400 text-sm">Esperando equipos clasificados</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final */}
        <div>
          <h3 className="text-lg font-bold text-accent mb-4">👑 GRAN FINAL</h3>
          <div className="border-4 border-accent rounded-lg p-6 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-xl">{bracket.final.equipo1 || 'Por definir'}</span>
              <span className="text-3xl font-black">🏆</span>
              <span className="font-bold text-xl">{bracket.final.equipo2 || 'Por definir'}</span>
            </div>
            
            {bracket.final.marcador1 !== null ? (
              <div className="text-center">
                <span className="bg-accent text-white px-8 py-3 rounded-full text-2xl font-black">
                  {bracket.final.marcador1} - {bracket.final.marcador2}
                </span>
                <p className="mt-4 text-accent font-bold">
                  🎉 ¡CAMPEÓN: {bracket.final.ganador}! 🎉
                </p>
              </div>
            ) : (
              <div className="text-center">
                <button 
                  onClick={() => setSelectedMatch({fase: 'final', id: bracket.final.id})}
                  className="bg-accent hover:bg-accent-bright text-white font-bold py-3 px-8 rounded-full"
                >
                  Registrar Resultado Final
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal para registrar resultado */}
      {selectedMatch && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-turf-dark mb-4">Registrar Marcador</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Goles Equipo 1</label>
                  <input 
                    type="number" 
                    min="0"
                    value={resultado.goles1}
                    onChange={(e) => setResultado({...resultado, goles1: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg text-center text-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Goles Equipo 2</label>
                  <input 
                    type="number" 
                    min="0"
                    value={resultado.goles2}
                    onChange={(e) => setResultado({...resultado, goles2: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg text-center text-xl"
                  />
                </div>
              </div>

              <div className="flex space-x-3">
                <button 
                  onClick={() => handleRegistrarResultado(selectedMatch.fase, selectedMatch.id)}
                  className="flex-1 bg-accent hover:bg-accent-bright text-white font-bold py-2 rounded-lg"
                >
                  Guardar
                </button>
                <button 
                  onClick={() => setSelectedMatch(null)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 rounded-lg"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BracketManager;