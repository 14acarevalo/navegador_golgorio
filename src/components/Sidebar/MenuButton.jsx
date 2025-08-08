// MenuButton.jsx - Yo: "Este no lo toco. Solo recibe props y renderiza. El CSS hace la magia."

import React from 'react';
import './MenuButton.css';

const MenuButton = ({ item, isActive, onClick }) => {
  return (
    <button
      className={`menu-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <i className={item.icon}></i>
      <span>{item.label}</span>
    </button>
  );
};

export default MenuButton;