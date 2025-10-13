'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>A+</div>
          <div className={styles.logoText}>
            <div className={styles.logoTitle}>A+ ENGENHARIA</div>
            <div className={styles.logoSubtitle}>Excelência em Projetos</div>
          </div>
        </Link>

        {/* Hamburger Menu Button */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Início
          </Link>
          <Link href="/projetos" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Projetos
          </Link>
          <Link href="/obras-realizadas" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Obras Realizadas
          </Link>
          <Link href="/investidores" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Investidores
          </Link>
          <Link href="/credito" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Soluções de Crédito
          </Link>
          <Link href="/contato" className={styles.navLinkCta} onClick={() => setIsMenuOpen(false)}>
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}

