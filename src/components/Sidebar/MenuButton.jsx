// Importamos React para poder usar JSX y crear componentes
import React from 'react';

// Importamos el archivo de estilos CSS específico para este componente, este me ayuda a darle un estilo visual al botón del menú
import './MenuButton.css';

// Definimos el componente funcional MenuButton
// Recibe tres props:
//  - item: Objeto con la información del botón (icono y texto)
//  - isActive: Booleano que indica si este botón está activo o no
//  - onClick: Función que se ejecuta cuando el usuario hace clic en el botón
const MenuButton = ({ item, isActive, onClick }) => {
  return (
    // Botón principal
    <button
      // className: le ponemos la clase 'menu-button' y, si isActive es true, añadimos 'active'
      className={`menu-button ${isActive ? 'active' : ''}`}
      // onClick: el evento se dispara cuando el usuario haga click sobre este botón
      onClick={onClick}
    >
      {/* Icono del botón, usando la clase CSS que venga en item.icon */}
      <i className={item.icon}></i>

      {/* Texto del botón, que viene de item.label */}
      <span>{item.label}</span>
    </button>
  );
};

// Exportamos el componente para que pueda ser usado en otros archivos y le pongo el mismo nombre que el archivo, más fácil de identificar
export default MenuButton;
