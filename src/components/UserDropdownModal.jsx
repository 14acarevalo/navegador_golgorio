// UserDropdownModal.jsx - Yo: "Modal dinámico basado en un array. Así puedo gestionar todo desde un solo lugar."

import React from 'react';
import './UserDropdownModal.css';

// Configuración dinámica del menú del usuario
const userMenuConfig = [
  {
    section: 'Tu cuenta',
    items: [
      { label: 'Ver perfil', type: 'button', style: { color: '#57baa6' } },
      { label: 'Editar perfil', type: 'button' },
      { label: 'Mis reservas', type: 'button' },
      { label: 'Configuración', type: 'button' },
    ],
  },
  {
    section: 'Información legal',
    items: [
      { label: 'Términos de uso', type: 'link', href: '#terminos' },
      { label: 'Política de privacidad', type: 'link', href: '#privacidad' },
      { label: 'Política de cookies', type: 'link', href: '#cookies' },
    ],
  },
];

const UserDropdownModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Evita que el clic dentro cierre el modal
  const handleClick = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={handleClick}>
        {userMenuConfig.map((section, index) => (
          <div key={index} className="modal-section">
            <h3>{section.section}</h3>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>
                  {item.type === 'link' ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    <button style={item.style || {}}>{item.label}</button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDropdownModal;