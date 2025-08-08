// src/components/Sidebar/UserModal.jsx
import React from 'react';

const UserModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  const handleContentClick = (e) => e.stopPropagation();

  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        right: 0,
        width: '280px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        zIndex: 1000,
        border: '1px solid #e0e0e0',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        overflow: 'hidden',
      }}
      onClick={onClose}
    >
      <div onClick={handleContentClick}>
        <div style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
          <h3 style={{
            margin: '0 0 12px 0',
            fontSize: '16px',
            color: '#333',
            fontFamily: 'Dela Gothic One, cursive'
          }}>
            Tu cuenta
          </h3>
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
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    width: '100%',
                    padding: '6px 0',
                    color: item.highlight ? '#57baa6' : '#575757',
                    cursor: 'pointer',
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
                  href={`#${text.toLowerCase().replace(/\s+/g, '-')}`}
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