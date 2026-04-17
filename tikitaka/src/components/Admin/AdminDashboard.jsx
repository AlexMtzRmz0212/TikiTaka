// components/Admin/AdminDashboard.jsx
import React, { useState } from 'react';
import { tablaPosiciones, bracketData, equipos } from '../../data/mockData';
import MatchResultsForm from './MatchResultsForm';
import BracketManager from './BracketManager';

const AdminDashboard = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState('resultados');
  const [posiciones, setPosiciones] = useState(tablaPosiciones);
  const [bracket, setBracket] = useState(bracketData);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpdateResultados = (nuevosResultados) => {
    // Simulación de actualización
    console.log('Actualizando resultados:', nuevosResultados);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleUpdateBracket = (nuevoBracket) => {
    setBracket(nuevoBracket);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-sand">
      {/* Header Admin */}
      <header className="bg-gradient-to-r from-turf-dark to-turf text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">⚽</span>
              <div>
                <h1 className="text-2xl font-black">Panel Administrativo</h1>
                <p className="text-xs text-field">Tikitaka • Gestión de Torneos</p>
              </div>
            </div>
            <button 
              onClick={onLogout}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm transition"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      {/* Navegación Simple */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8">
            <button 
              onClick={() => setActiveSection('resultados')}
              className={`py-4 px-2 font-semibold transition border-b-4 ${
                activeSection === 'resultados' 
                  ? 'border-accent text-accent' 
                  : 'border-transparent text-gray-600 hover:text-turf'
              }`}
            >
              📊 Registrar Resultados
            </button>
            <button 
              onClick={() => setActiveSection('posiciones')}
              className={`py-4 px-2 font-semibold transition border-b-4 ${
                activeSection === 'posiciones' 
                  ? 'border-accent text-accent' 
                  : 'border-transparent text-gray-600 hover:text-turf'
              }`}
            >
              📈 Tabla de Posiciones
            </button>
            <button 
              onClick={() => setActiveSection('llaves')}
              className={`py-4 px-2 font-semibold transition border-b-4 ${
                activeSection === 'llaves' 
                  ? 'border-accent text-accent' 
                  : 'border-transparent text-gray-600 hover:text-turf'
              }`}
            >
              🏆 Gestionar Liguilla
            </button>
          </div>
        </div>
      </div>

      {/* Mensaje de Éxito */}
      {showSuccess && (
        <div className="fixed top-20 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          ✅ ¡Cambios guardados exitosamente!
        </div>
      )}

      {/* Contenido Principal */}
      <div className="container mx-auto px-6 py-8">
        {activeSection === 'resultados' && (
          <MatchResultsForm 
            equipos={equipos} 
            onUpdate={handleUpdateResultados}
          />
        )}

        {activeSection === 'posiciones' && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-turf-dark mb-6">Tabla General Actual</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-turf">
                  <tr>
                    <th className="px-4 py-3 text-left">#</th>
                    <th className="px-4 py-3 text-left">Equipo</th>
                    <th className="px-4 py-3 text-center">PJ</th>
                    <th className="px-4 py-3 text-center">PG</th>
                    <th className="px-4 py-3 text-center">PE</th>
                    <th className="px-4 py-3 text-center">PP</th>
                    <th className="px-4 py-3 text-center">GF</th>
                    <th className="px-4 py-3 text-center">GC</th>
                    <th className="px-4 py-3 text-center">PTS</th>
                  </tr>
                </thead>
                <tbody>
                  {posiciones.map((equipo) => (
                    <tr key={equipo.posicion} className="border-b">
                      <td className="px-4 py-3">{equipo.posicion}</td>
                      <td className="px-4 py-3 font-semibold">{equipo.equipo}</td>
                      <td className="px-4 py-3 text-center">{equipo.pj}</td>
                      <td className="px-4 py-3 text-center">{equipo.pg}</td>
                      <td className="px-4 py-3 text-center">{equipo.pe}</td>
                      <td className="px-4 py-3 text-center">{equipo.pp}</td>
                      <td className="px-4 py-3 text-center">{equipo.gf}</td>
                      <td className="px-4 py-3 text-center">{equipo.gc}</td>
                      <td className="px-4 py-3 text-center font-bold text-accent">{equipo.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                💡 La tabla se actualiza automáticamente al registrar resultados de partidos.
              </p>
            </div>
          </div>
        )}

        {activeSection === 'llaves' && (
          <BracketManager 
            bracket={bracket} 
            equipos={equipos}
            onUpdate={handleUpdateBracket}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;