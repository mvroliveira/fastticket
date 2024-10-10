import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logoFast.jpg" alt="Fast Ticket Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Eventos</a></li>
          <li><a href="#">Produtor</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
      <div className="icons">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
      </div>
    </header>
  );
};

export default Header;
