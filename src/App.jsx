// src/App.jsx - Yo: "Botón de ayuda con efecto verde y modal desplegable"

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import UserDropdownModal from './components/UserDropdownModal';
import Home from './pages/Home';
import Partidos from './pages/Partidos';
import Clientes from './pages/Clientes';
import Metricas from './pages/Metricas';
import Administracion from './pages/Administracion';
import Ajustes from './pages/Ajustes';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);           // Modal del usuario
  const [showAyuda, setShowAyuda] = useState(false);               // Modal de ayuda

  return (
    <div className="app-container">
      {/* Header con logo, botón de ayuda y usuario */}
      <header className="main-header">
        <div className="header-title">
          <h1 style={{ fontFamily: 'Dela Gothic One, cursive', color: '#57baa6' }}>
            <img 
              src="/img/Logo_Golgorio.png" 
              alt="Logo Golgorio" 
              style={{
                width: '120px',
                height: 'auto',
              }}
            />  
          </h1>
        </div>

        {/* Botones: Ayuda + Usuario */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          
          {/* Botón de ayuda con cambio de color al activo */}
          <button
            onClick={() => setShowAyuda(!showAyuda)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 12px',
              backgroundColor: showAyuda ? '#57baa6' : '#f0f0f0',  // Cambia a verde cuando está abierto
              borderColor: showAyuda ? '#57baa6' : '#ddd',
              color: showAyuda ? 'white' : '#575757',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              border: '1px solid',
              transition: 'all 0.3s ease',
              boxShadow: showAyuda ? '0 0 0 2px rgba(87, 186, 166, 0.3)' : 'none'
            }}
            aria-label="Ayuda y soporte"
          >
            <i className="fas fa-question-circle"></i>
            <span>Ayuda</span>
          </button>

          {/* Botón de usuario */}
          <button
            className="user-badge"
            onClick={() => setIsModalOpen(!isModalOpen)}
            aria-label="Menú de usuario"
          >
            AT
          </button>
        </div>
      </header>

      {/* Modal del usuario */}
      <UserDropdownModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Modal de Ayuda - Se muestra si showAyuda es true */}
      {showAyuda && (
        <div
          style={{
            position: 'absolute',
            top: 60,
            right: 70, // A la izquierda del botón AT
            width: '300px',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            border: '1px solid #e0e0e0',
            zIndex: 1000,
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            overflow: 'hidden',
          }}
          onClick={() => setShowAyuda(false)} // Cierra al hacer clic fuera del contenido
        >
          <div style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
            <h3 style={{
              margin: '0 0 12px 0',
              fontSize: '16px',
              color: '#333',
              fontFamily: 'Dela Gothic One, cursive'
            }}>
              📘 Ayuda y Soporte
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="#como-funciona" style={{ color: '#575757', textDecoration: 'none' }}>
                  ¿Cómo funciona Golgorio?
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#reservas" style={{ color: '#575757', textDecoration: 'none' }}>
                  Cómo hacer una reserva
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#facturacion" style={{ color: '#575757', textDecoration: 'none' }}>
                  Ver mis ingresos
                </a>
              </li>
              <li>
                <a href="#contacto" style={{ color: '#575757', textDecoration: 'none' }}>
                  Contactar con soporte
                </a>
              </li>
            </ul>
          </div>
          <div style={{
            padding: '12px 16px',
            backgroundColor: '#f9f9fb',
            textAlign: 'center',
            fontSize: '13px',
            color: '#666',
            borderTop: '1px solid #eee'
          }}>
            Golgorio v1.0 • Soporte 24/7
          </div>
        </div>
      )}

      {/* Estructura principal */}
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partidos" element={<Partidos />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/metricas" element={<Metricas />} />
            <Route path="/administracion" element={<Administracion />} />
            <Route path="/ajustes" element={<Ajustes />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;