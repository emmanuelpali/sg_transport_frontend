import React, { useState, useRef } from 'react';
import styles from './SgNavBar.module.css';

const SgNavBar: React.FC = () => {
  const [collapse, setCollapse] = useState<boolean>(true)
  const [showNav, setShowNav] = useState<boolean>(false);
  const timeoutId = useRef<number | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      clearTimeout(timeoutId.current!); 
      setShowNav(true); 
      timeoutId.current = setTimeout(() => {
        setShowNav(false);
      }, 500); 
    };

    // Call handleScroll initially to set the initial state of showNav
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  const toggleCollapse = () => {
    setCollapse(!collapse)
  }
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${styles.main_nav} ${showNav && styles.hide_nav} sticky-top`}>
        <div className={`container-fluid d-flex align-items-center `}>
            <a className="navbar-brand me-auto" href="#"> {/* Use 'me-auto' to push the brand to the far left */}
              <img className={` ${styles.logo}`} src="/logo-svg.svg" alt="logo" />
            </a>
            <button
            onClick={toggleCollapse}
              className={`navbar-toggler ms-auto ${styles.main_nav_toggle} ${collapse ? '' : styles.no_collapsed}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className={`navbar-toggler-icon ${styles.toggler_icon}`}></span>
            </button>
          </div>
          <div className={`collapse navbar-collapse ${collapse ? "" : styles.fullscreen}`} id="navbarSupportedContent">
           
            <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.navcontainer}`}> {/* Use 'ms-auto' to push the nav items to the right */}
              <li className="nav-item">
                <a className={`nav-link ${styles.nav_a} `} aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.nav_a}`} href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.nav_a}`} href="#">
                  Services
                </a>
              </li>
            </ul>
            {!collapse && <button 
              className={`navbar-toggler mx-auto ${styles.main_nav_toggle} ${collapse ? '' : styles.no_collapsed}`}
              onClick={toggleCollapse}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
                <span className={`navbar-toggler-icon ${styles.toggler_icon}`}></span>
              </button> }
        </div>
      </nav>
    </>
  );
}

export default SgNavBar;
