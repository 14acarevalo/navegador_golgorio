// src/App.jsx
// ==========================================
// Este es el archivo principal de la aplicación en React.
// Aquí se define la estructura general de la página, incluyendo:
// - El encabezado con el logo.
// - Botones de ayuda y usuario.
// - Un menú lateral (Sidebar).
// - Un área principal donde se mostrarán las páginas según la ruta.
// ==========================================


// Importamos las librerías necesarias
import React, { useState } from 'react'; 
// React es la librería que usamos para crear la interfaz.
// useState es una función especial de React (llamada "hook")
// que nos permite guardar y cambiar información dentro del componente.

// React Router: librería para cambiar de página sin recargar todo el sitio.
import { Routes, Route } from 'react-router-dom';

// Importamos otros componentes que usaremos
import Sidebar from './components/Sidebar/Sidebar'; // Menú lateral
import UserDropdownModal from './components/UserDropdownModal'; // Ventana flotante de usuario

// Importamos las páginas de la aplicación, que se pueden crear más adelante
// Cada una representa una sección diferente de la aplicación.
import Home from './pages/Home';
import Partidos from './pages/Partidos';
import Clientes from './pages/Clientes';
import Metricas from './pages/Metricas';
import Administracion from './pages/Administracion';
import Ajustes from './pages/Ajustes';

// Importamos los estilos CSS generales
import './App.css';


// ==========================================
// Componente principal de la aplicación
// Un componente es como una "pieza" reutilizable que dibuja parte de la pantalla.
// En este caso, App es el componente que contiene toda la estructura general.
// ==========================================
function App() {
  
  // Estado que controla si el menú de usuario está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estado que controla si la ventana de ayuda está visible o no
  const [showAyuda, setShowAyuda] = useState(false);

  // Lo que retorna esta función es lo que se va a ver en pantalla
  return (
    <div className="app-container">
      
      {/* ==========================================
         ENCABEZADO (HEADER)
         Contiene:
         - El logo de la aplicación.
         - Botón de ayuda.
         - Botón del usuario.
         - Simple y fácil de usar.
      ========================================== */}
      <header className="main-header">
        
        {/* LOGO */}
        <div className="header-title">
          <h1 style={{ fontFamily: 'Dela Gothic One, cursive', color: '#57baa6' }}>
            <img 
              src="/img/Logo_Golgorio.png"  // Imagen del logo - LE HE PUESTO ESE NOMBRE PARA QUE SEA MÁS FÁCIL DE ENCONTRAR Y AÑADIR
              alt="Logo Golgorio"           // Texto alternativo por accesibilidad
              style={{
                width: '120px',
                height: 'auto',
              }}
            />  
          </h1>
        </div>

        {/* BOTONES DE LA DERECHA (AYUDA Y USUARIO) ¿POR QUÉ? ES MÁS FÁCIL DE VER Y CÓMODO A LA VISTA*/}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          
          {/* BOTÓN DE AYUDA */}
          {/* 
            Este botón se le ha añadido un cambio de color cuando el estado showAyuda es TRUE.
            Al hacer click, cambiaremos entre mostrar u ocultar la ventana de ayuda.
          */}
          <button
            onClick={() => setShowAyuda(!showAyuda)} // Cambiamos el estado al contrario
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 12px',
              backgroundColor: showAyuda ? '#57baa6' : '#f0f0f0', 
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
            aria-label="Ayuda y soporte" // Texto para lectores de pantalla
          >
            <i className="fas fa-question-circle"></i> {/* Icono de ayuda */}
            <span>Ayuda</span>
          </button>

          {/* BOTÓN DE USUARIO */}
          {/* 
            Al pulsarlo, abre o cierra el menú del usuario (isModalOpen).
            Muestra las iniciales del usuario ("AT" en este ejemplo).
          */}
          <button
            className="user-badge"
            onClick={() => setIsModalOpen(!isModalOpen)}
            aria-label="Menú de usuario"
          >
            AT
          </button>
        </div>
      </header>

      {/* ==========================================
         MODAL DE USUARIO
         Solo aparece si isModalOpen es TRUE.
         El componente UserDropdownModal maneja su propio diseño.
      ========================================== */}
      <UserDropdownModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ==========================================
         MODAL DE AYUDA
         Solo aparece si showAyuda es TRUE.
         Muestra un pequeño menú con enlaces de ayuda.
      ========================================== */}
      {showAyuda && (
        <div
          style={{
            position: 'absolute',
            top: 60,
            right: 70, 
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
          onClick={() => setShowAyuda(false)} // Cierra la ayuda al hacer clic
        >
          {/* Título y opciones */}
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
          
          {/* Pie de ayuda */}
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

      {/* ==========================================
         CUERPO PRINCIPAL DE LA APP
         Contiene:
         - Menú lateral (Sidebar)
         - Contenido principal que cambia según la ruta
      ========================================== */}
      <div className="app-body">
        
        {/* Menú lateral */}
        <Sidebar />

        {/* Zona principal donde cargan las páginas */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />              {/* Página de inicio */}
            <Route path="/partidos" element={<Partidos />} />  {/* Página de partidos */}
            <Route path="/clientes" element={<Clientes />} />  {/* Página de clientes */}
            <Route path="/metricas" element={<Metricas />} />  {/* Página de métricas */}
            <Route path="/administracion" element={<Administracion />} /> {/* Página administración */}
            <Route path="/ajustes" element={<Ajustes />} />    {/* Página de ajustes */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

// Exportamos este componente para que pueda usarse en otros archivos mediante el nombre App
export default App;