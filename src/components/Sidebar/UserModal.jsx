// src/components/Sidebar/UserModal.jsx
import React from 'react';

// Componente UserModal que recibe tres props:
// isOpen: indica si el modal está abierto o cerrado
// onClose: función para cerrar el modal
// user: objeto con información del usuario (aquí no se usa directamente)
const UserModal = ({ isOpen, onClose, user }) => {
  // Si el modal no está abierto, no renderiza nada (null)
  if (!isOpen) return null;

  // Evita que al hacer click dentro del contenido del modal se cierre el modal
  const handleContentClick = (e) => e.stopPropagation();

  return (
    // Contenedor principal del modal con estilos inline
    // El onClick en este contenedor llama a onClose para cerrar el modal
    <div
      style={{
        position: 'absolute',     // Posiciona el modal de forma absoluta respecto a su contenedor padre
        top: '100%',              // Se muestra justo debajo del elemento que lo abre
        right: 0,                 // Pegado a la derecha
        width: '280px',           // Ancho fijo del modal
        backgroundColor: 'white', // Fondo blanco para destacar
        borderRadius: '12px',     // Bordes redondeados
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)', // Sombra para dar profundidad
        zIndex: 1000,             // Está por encima de la mayoría de elementos
        border: '1px solid #e0e0e0', // Borde gris claro
        fontFamily: 'Poppins, sans-serif', // Tipografía
        fontSize: '14px',         // Tamaño de fuente base
        overflow: 'hidden',       // Esconde contenido que sobresalga
      }}
      onClick={onClose}          // Al hacer click fuera del contenido, se cierra el modal
    >
      {/* Contenedor interno que evita que el click cierre el modal */}
      <div onClick={handleContentClick}>

        {/* Sección "Tu cuenta" */}
        <div style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
          <h3 style={{
            margin: '0 0 12px 0',
            fontSize: '16px',
            color: '#333',
            fontFamily: 'Dela Gothic One, cursive' // Fuente especial para títulos
          }}>
            Tu cuenta
          </h3>
          {/* Lista de opciones de usuario */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { text: 'Ver perfil', highlight: true },
              { text: 'Editar perfil', highlight: false },
              { text: 'Mis reservas', highlight: false },
              { text: 'Configuración', highlight: false }
            ].map((item, i) => (
              <li key={i} style={{ marginBottom: i < 3 ? '8px' : '0' }}>
                <button
                  style={{
                    background: 'none',           // Sin fondo para el botón
                    border: 'none',               // Sin borde
                    textAlign: 'left',            // Texto alineado a la izquierda
                    width: '100%',                // Ocupa todo el ancho del li
                    padding: '6px 0',             // Espaciado vertical pequeño
                    color: item.highlight ? '#57baa6' : '#575757', // Color verde para el resaltado, gris para otros, color golgorio
                    cursor: 'pointer',            // Cursor puntero para indicar clickeable
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Sección "Soporte" */}
        <div style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
          <h3 style={{
            margin: '0 0 12px 0',
            fontSize: '16px',
            color: '#333',
            fontFamily: 'Dela Gothic One, cursive'
          }}>
            Soporte
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <a href="#ayuda" style={{ color: '#575757', textDecoration: 'none' }}>
                Ayuda
              </a>
            </li>
            <li>
              <a href="#como-funciona" style={{ color: '#575757', textDecoration: 'none' }}>
                ¿Cómo funciona Golgorio?
              </a>
            </li>
          </ul>
        </div>

        {/* Sección "Información legal" */}
        <div style={{ padding: '16px' }}>
          <h3 style={{
            margin: '0 0 12px 0',
            fontSize: '16px',
            color: '#333',
            fontFamily: 'Dela Gothic One, cursive'
          }}>
            Información legal
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              'Términos de uso',
              'Política de privacidad',
              'Política de cookies'
            ].map((text, i) => (
              <li key={i} style={{ marginBottom: i < 2 ? '8px' : '0' }}>
                <a
                  href={`#${text.toLowerCase().replace(/\s+/g, '-')}`}  // Convierte el texto a un ancla válida
                  style={{ color: '#575757', textDecoration: 'none', fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default UserModal;
