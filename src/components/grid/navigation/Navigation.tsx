import './navigation.scss';

import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-grid-nav" data-tag-label="<nav>">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}
