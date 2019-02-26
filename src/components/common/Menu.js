import React from 'react';
import {Link } from "react-router-dom";
import './Menu.css'

export default function Menu() {
  return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ejercicios">Ejercicios</Link>
        </li>
        <li>
          <Link to="/rutinas">Rutinas</Link>
        </li>
      </ul>
  );
}
