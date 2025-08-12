// src/components/Sidebar/Sidebar.jsx - Yo: "Cada botón es ahora un enlace real. Que navegue de verdad."

import React from 'react';
// Importamos Link para navegación y useLocation para saber la ruta actual
import { Link, useLocation } from 'react-router-dom';
// Importamos estilos CSS específicos para el sidebar
import './Sidebar.css';
// Importamos el componente MenuButton para usar en el menú
import MenuButton from './MenuButton';

// Definimos un array con los ítems del menú, cada uno con etiqueta, icono y ruta
// Este puede verse modificado según las necesidades de la aplicación y lo que se quiera mostrar
// Están puestos los que se pidio en un primer momento, pero se pueden añadir más
// o quitar según se necesite.
// Cada objeto representa un botón del menú con su etiqueta, icono y ruta
const menuItems = [
  { label: 'Calendario', icon: 'fas fa-calendar-alt', path: '/' },
  { label: 'Partidos', icon: 'fas fa-futbol', path: '/partidos' },
  { label: 'Clientes', icon: 'fas fa-users', path: '/clientes' },
  { label: 'Métricas y facturación', icon: 'fas fa-chart-line', path: '/metricas' },
  { label: 'Administración', icon: 'fas fa-building', path: '/administracion' },
  { label: 'Ajustes', icon: 'fas fa-cogs', path: '/ajustes' },
];

const Sidebar = () => {
  // Usamos hook useLocation para obtener la ruta actual
  const location = useLocation();
  // Guardamos la ruta actual para comparar con la del menú y marcar activo
  const activePath = location.pathname;

  return (
    // Contenedor principal del sidebar
    <aside className="sidebar">
      
      {/* Logo de la app en la parte superior del sidebar */}
      <div className="sidebar-logo">
        <img 
          src="/img/Logo_animal.png" 
          alt="Logo Golgorio" 
          style={{
            width: '80px',    // Tamaño fijo para el logo (se puede modificar), aunque dentro de las medidas probadas es la que mejor quedaba
            height: 'auto',   // Mantener la proporción del logo
            display: 'block', // Para que se comporte como bloque (facilita centrado)
            margin: '0 auto'  // Centrado horizontal automático
          }}
        />
      </div>

      {/* Menú principal del sidebar */}
      <nav className="sidebar-menu">
        {/* Recorremos cada elemento del menú para crear un Link y un MenuButton */}
        {menuItems.map((item) => (
          <Link
            key={item.label}           // Clave única para React
            to={item.path}             // Ruta a la que navega el Link
            style={{                  // Quitamos subrayado y forzamos color heredado
              textDecoration: 'none', 
              color: 'inherit' 
            }}
          >
            {/* Renderizamos el botón del menú, pasando el item y si está activo */}
            <MenuButton
              item={item}                     // Datos de texto e icono
              isActive={activePath === item.path} // Booleano para marcar activo
            />
          </Link>
        ))}
      </nav>

      {/* Footer del sidebar con info del usuario actual 
      Lo idoneo aqui en Sesión es añadir una variable con los datos del usuario, nombre y apellido
      He dejado esto estatico porque desconozco como se llamará la variable*/}
      <footer className="sidebar-footer">
        Sesión: <strong>Alberto Campanero {/* {user.name} {user.surname}*/} </strong>
        
      </footer>
    </aside>
  );
};

export default Sidebar;
