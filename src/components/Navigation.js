import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => (
  <nav className="nav-bar">
    <p>Math Magicians</p>
    <ul className="links">
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="calculator"
          className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
        >
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink
          to="quote"
          className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
        >
          Quote
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;

// 7EF5DC
