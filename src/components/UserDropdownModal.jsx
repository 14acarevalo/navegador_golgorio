// UserDropdownModal.jsx - Modal dinámico basado en un array para gestionar el menú desde un solo lugar

import React from 'react';
import './UserDropdownModal.css';

// Configuración dinámica del menú del usuario: se define un array con secciones y sus items
const userMenuConfig = [
  {
    section: 'Tu cuenta',
    items: [
      { label: 'Ver perfil', type: 'button', style: { color: '#57baa6' } }, // botón con estilo destacado
      { label: 'Editar perfil', type: 'button' },                          // botón normal
      { label: 'Mis reservas', type: 'button' },
      { label: 'Configuración', type: 'button' },
    ],
  },
  {
    section: 'Información legal',
    items: [
      { label: 'Términos de uso', type: 'link', href: '#terminos' },        // enlace a ancla interna
      { label: 'Política de privacidad', type: 'link', href: '#privacidad' },
      { label: 'Política de cookies', type: 'link', href: '#cookies' },
    ],
  },
];

const UserDropdownModal = ({ isOpen, onClose }) => {
  // Si el modal no está abierto, no renderiza nada
  if (!isOpen) return null;

  // Evita que hacer clic dentro del modal cierre el modal
  const handleClick = (e) => e.stopPropagation();

  return (
    // Fondo oscuro o área que cubre toda la pantalla para cerrar el modal al hacer clic fuera
    <div className="modal-overlay" onClick={onClose}>
      {/* Contenedor del modal que captura el clic para que no se cierre */}
      <div className="modal" onClick={handleClick}>
        {/* Mapeamos cada sección del menú definido en userMenuConfig */}
        {userMenuConfig.map((section, index) => (
          <div key={index} className="modal-section">
            {/* Título de la sección */}
            <h3>{section.section}</h3>
            <ul>
              {/* Mapeamos cada item dentro de la sección */}
              {section.items.map((item, i) => (
                <li key={i}>
                  {/* Dependiendo del tipo, renderiza un enlace o un botón */}
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
