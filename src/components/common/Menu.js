import React from 'react';
import {Link } from "react-router-dom";
import './Menu.css'

export default function Menu() {
  return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
  );
}
