import './navigation.scss';

import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-grid-nav" data-tag-label="<nav>">
      <NavLink to="/" data-testid="link-home">
        Home
      </NavLink>
      <NavLink to="/about" data-testid="link-about">
        About
      </NavLink>
    </nav>
  );
}
