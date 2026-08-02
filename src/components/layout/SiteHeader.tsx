import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NoteButton } from './NoteDialog';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="inner">
        <NavLink to="/" className="brand" aria-label="Visual AI Academy home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">Visual AI Academy</span>
        </NavLink>

        <div className="header-actions">
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>

          <nav id="primary-nav" className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/generative-ai" onClick={() => setOpen(false)}>
              Generative AI
            </NavLink>
            <span className="pill coming-soon" title="Coming soon">
              Computer Vision · Soon
            </span>
          </nav>

          <NoteButton />
        </div>
      </div>
    </header>
  );
}
