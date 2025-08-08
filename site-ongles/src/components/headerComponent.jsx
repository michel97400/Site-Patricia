import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav">
        <div className="nav-logo">💅 Onglerie</div>

        {/* Bouton burger */}
        <button
          className={`nav-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <ul className={`nav-list ${isOpen ? "show" : ""}`}>
          <li><a href="/">Accueil</a></li>
          <li><a className="nav-cta" href="#">Planifier mon rendez-vous</a></li>
          <li><a href="#">Galeries</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
