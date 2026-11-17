import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Layout() {
  const [tema, setTema] = useState(temaInitiala);

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
  }, [tema]);

  function handleTema() {
    setTema((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <span className={styles.logo}>StudentFinance</span>

          <nav className={styles.nav} data-testid="nav">
            <NavLink to="/" end className={navClass}>
              Tranzacții
            </NavLink>
            <NavLink to="/despre" className={navClass}>
              Despre
            </NavLink>
            <button
              type="button"
              className={styles.themeBtn}
              onClick={handleTema}
              aria-pressed={tema === "dark"}
            >
              {tema === "dark" ? "☀️ Luminos" : "🌙 Întunecat"}
            </button>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>Proiect Tehnologii Web — StudentFinance</footer>
    </>
  );
}