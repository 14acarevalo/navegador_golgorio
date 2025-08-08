// src/components/Sidebar/Sidebar.jsx - Yo: "Cada botón es ahora un enlace real. Que navegue de verdad."

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import MenuButton from './MenuButton';

const menuItems = [
  { label: 'Calendario', icon: 'fas fa-calendar-alt', path: '/' },
  { label: 'Partidos', icon: 'fas fa-futbol', path: '/partidos' },
  { label: 'Clientes', icon: 'fas fa-users', path: '/clientes' },
  { label: 'Métricas y facturación', icon: 'fas fa-chart-line', path: '/metricas' },
  { label: 'Administración', icon: 'fas fa-building', path: '/administracion' },
  { label: 'Ajustes', icon: 'fas fa-cogs', path: '/ajustes' },
];

const Sidebar = () => {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <img src="/img/Logo_animal.png" alt="Logo Golgorio" style={{
        width: '80px',   // Ajusta el tamaño (puedes poner 100px, 140px, etc.)
        height: 'auto',   // Mantiene la proporción del logo
        display: 'block', // Centrado o alineado correctamente
        margin: '0 auto', // Opcional: si quieres centrarlo
      }}/>
      </div>

      {/* Menú dinámico */}
      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <MenuButton
              item={item}
              isActive={activePath === item.path}
            />
          </Link>
        ))}
      </nav>

      {/* Footer con usuario */}
      <footer className="sidebar-footer">
        Sesión: <strong>Alberto Campanero</strong>
      </footer>
    </aside>
  );
};

export default Sidebar;