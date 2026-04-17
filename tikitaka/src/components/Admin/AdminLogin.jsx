// components/Admin/AdminLogin.jsx
import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ usuario: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación simple
    if (credentials.usuario === 'admin' && credentials.password === 'tikitaka2026') {
      onLogin(true);
      setError('');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-turf-dark to-turf flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚽</span>
          </div>
          <h1 className="text-3xl font-black text-turf-dark">Portal Admin</h1>
          <p className="text-gray-600 text-sm mt-2">Tikitaka • Panel de Control</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-turf-dark mb-2">Usuario</label>
            <input 
              type="text" 
              required
              value={credentials.usuario}
              onChange={(e) => setCredentials({...credentials, usuario: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none"
              placeholder="Ingresa tu usuario"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-turf-dark mb-2">Contraseña</label>
            <input 
              type="password" 
              required
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button type="submit" className="w-full btn-primary">
            Ingresar al Panel
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Acceso exclusivo para administradores<br/>
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">Demo: admin / tikitaka2026</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;