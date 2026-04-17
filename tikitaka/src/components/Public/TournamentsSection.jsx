// components/Public/TournamentsSection.jsx
import React, { useState } from 'react';
import { tablaPosiciones, bracketData } from '../../data/mockData';

const TournamentsSection = () => {
  const [activeTab, setActiveTab] = useState('temporada');

  return (
    <section id="torneos" className="py-20 bg-sand">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="section-title inline-block">Torneos Tikitaka</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Resultados y posiciones de nuestros torneos activos
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          <button 
            onClick={() => setActiveTab('temporada')}
            className={`px-8 py-3 rounded-full font-bold transition ${
              activeTab === 'temporada' 
                ? 'bg-accent text-white shadow-lg' 
                : 'bg-white text-turf-dark hover:bg-gray-100'
            }`}
          >
            Temporada Regular
          </button>
          <button 
            onClick={() => setActiveTab('liguilla')}
            className={`px-8 py-3 rounded-full font-bold transition ${
              activeTab === 'liguilla' 
                ? 'bg-accent text-white shadow-lg' 
                : 'bg-white text-turf-dark hover:bg-gray-100'
            }`}
          >
            Liguilla
          </button>
        </div>

        {/* Tabla de Temporada Regular */}
        {activeTab === 'temporada' && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-turf to-turf-dark text-white p-6">
              <h3 className="text-2xl font-bold">Torneo Apertura 2026</h3>
              <p className="text-field">Jornada 10 de 14</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-turf">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-turf-dark">#</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-turf-dark">Equipo</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-turf-dark">PJ</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-turf-dark">PG</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-turf-dark">PE</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-turf-dark">PP</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-turf-dark">GF</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-turf-dark">GC</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-turf-dark">DG</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-turf-dark">PTS</th>
                  </tr>
                </thead>
                <tbody>
                  {tablaPosiciones.map((equipo) => (
                    <tr key={equipo.posicion} className="border-b hover:bg-turf/5 transition">
                      <td className="px-6 py-4 font-bold">
                        {equipo.posicion <= 4 ? (
                          <span className="text-accent">🏆 {equipo.posicion}</span>
                        ) : (
                          equipo.posicion
                        )}
                      </td>
                      <td className="px-6 py-4 font-semibold text-turf-dark">{equipo.equipo}</td>
                      <td className="px-6 py-4 text-center">{equipo.pj}</td>
                      <td className="px-6 py-4 text-center">{equipo.pg}</td>
                      <td className="px-6 py-4 text-center">{equipo.pe}</td>
                      <td className="px-6 py-4 text-center">{equipo.pp}</td>
                      <td className="px-6 py-4 text-center">{equipo.gf}</td>
                      <td className="px-6 py-4 text-center">{equipo.gc}</td>
                      <td className="px-6 py-4 text-center">{equipo.gf - equipo.gc}</td>
                      <td className="px-6 py-4 text-center font-bold text-accent">{equipo.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Bracket de Liguilla */}
        {activeTab === 'liguilla' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-turf-dark mb-8 text-center">Llave de Liguilla - Apertura 2026</h3>
            
            <div className="space-y-8">
              {/* Cuartos de Final */}
              <div>
                <h4 className="text-lg font-bold text-accent mb-4">🏆 Cuartos de Final</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {bracketData.cuartos.map((partido) => (
                    <div key={partido.id} className="bg-sand rounded-lg p-4 border-2 border-turf/20">
                      <div className="flex justify-between items-center">
                        <span className={`font-semibold ${partido.ganador === partido.equipo1 ? 'text-accent' : 'text-gray-700'}`}>
                          {partido.equipo1}
                        </span>
                        <span className="text-2xl font-black mx-4">vs</span>
                        <span className={`font-semibold ${partido.ganador === partido.equipo2 ? 'text-accent' : 'text-gray-700'}`}>
                          {partido.equipo2}
                        </span>
                      </div>
                      <div className="text-center mt-3">
                        <span className="bg-turf/10 px-6 py-2 rounded-full text-sm font-bold">
                          {partido.marcador1} - {partido.marcador2}
                        </span>
                      </div>
                      <div className="text-center mt-2 text-xs text-gray-500">
                        Ganador: {partido.ganador}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Semifinales */}
              <div>
                <h4 className="text-lg font-bold text-accent mb-4">⚡ Semifinales</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {bracketData.semifinales.map((partido) => (
                    <div key={partido.id} className="bg-gradient-to-r from-turf/10 to-field/10 rounded-lg p-4 border-2 border-accent/30">
                      <div className="flex justify-between items-center">
                        <span className={`font-semibold text-lg ${partido.ganador === partido.equipo1 ? 'text-accent' : 'text-gray-700'}`}>
                          {partido.equipo1}
                        </span>
                        <span className="text-2xl font-black mx-4">🆚</span>
                        <span className={`font-semibold text-lg ${partido.ganador === partido.equipo2 ? 'text-accent' : 'text-gray-700'}`}>
                          {partido.equipo2}
                        </span>
                      </div>
                      <div className="text-center mt-3">
                        <span className="bg-accent/20 px-8 py-2 rounded-full text-xl font-black">
                          {partido.marcador1} - {partido.marcador2}
                        </span>
                      </div>
                      <div className="text-center mt-2 text-sm">
                        🎯 Ganador: <span className="font-bold">{partido.ganador}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final */}
              <div>
                <h4 className="text-lg font-bold text-accent mb-4">👑 GRAN FINAL</h4>
                <div className="bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-lg p-6 border-4 border-accent">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-2xl text-turf-dark">{bracketData.final.equipo1}</span>
                    <span className="text-4xl font-black mx-6">🏆</span>
                    <span className="font-bold text-2xl text-turf-dark">{bracketData.final.equipo2}</span>
                  </div>
                  <div className="text-center mt-4">
                    {bracketData.final.marcador1 === null ? (
                      <span className="bg-white px-8 py-3 rounded-full text-lg font-bold">
                        ⏰ Por Disputarse - 15 May 2026
                      </span>
                    ) : (
                      <span className="bg-accent text-white px-8 py-3 rounded-full text-2xl font-black">
                        {bracketData.final.marcador1} - {bracketData.final.marcador2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TournamentsSection;