import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <>
    <h1>Hello Every one</h1>
    <h2>Todays  Menu</h2>
    <nav className="menu">
      <NavLink to="/Breakfast" className={({ isActive }) => (isActive ? 'active_class' : '')}>
      Break Fast
      </NavLink>
      <NavLink to="/Lunch" className={({ isActive }) => (isActive ? 'active_class' : '')}>
      Lunch
      </NavLink>
      <NavLink to="/Dinner" className={({ isActive }) => (isActive ? 'active_class' : '')}>
      Dinner
      </NavLink>
      <NavLink to="/Sweets" className={({ isActive }) => (isActive ? 'active_class' : '')}>
      Sweets
      </NavLink>
      <NavLink to="/Juice" className={({ isActive }) => (isActive ? 'active_class' : '')}>
      Juice
      </NavLink>
      <NavLink to="/Chai" className={({ isActive }) => (isActive ? 'active_class' : '')}>
      Chai & Coffe
      </NavLink>
      </nav>
      </>
  );
}

export default Menu;