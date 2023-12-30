import React, { useState } from 'react';
import './Dropdown.css'; // Import your CSS file

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        Menu
      </button>
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        {/* Dropdown menu items */}
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
}

export default Dropdown;
