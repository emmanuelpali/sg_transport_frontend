import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`row ${styles.footer_child_top}`}>
				<div className="">
                <a className="navbar-brand me-auto col-md-6" href="/">
					{' '}					
					<img className={` ${styles.logo}`} src="/logo-svg.svg" alt="logo" />
				</a>
                
                </div>
					<ul
						className={`col-md-4 ${styles.footer_quick_links}`}>
						{' '}
						{/* Use 'ms-auto' to push the nav items to the right */}
						<li className="">
							<Link
								className={`${styles.nav_a} `}
								aria-current="page"
								to="/">
								Home
							</Link>
						</li>
						<li className="">
							<Link className={`${styles.nav_a}`} to="/about">
								About
							</Link>
						</li>
						<li className="">
							<Link className={`${styles.nav_a}`} to="/services">
								Services
							</Link>
						</li>
					</ul>
			</div>
            <ul className={`${styles.footer_socials}`}>
                <li className="">
                    <a href="https://www.paliemmanuel.com">&#169;{new Date().getFullYear()} Emmanuel Pali</a>
                </li>
              <li className="">
                <a className={`${styles.nav_a} `}  href="https://github.com/emmanuelpali">
                    Github
                </a>
              </li>
              <li className="">
                <a className={`${styles.nav_a}`} href="https://www.paliemmanuel.com">
                  Portfolio
                </a>
              </li>
              <li className="">
                <a className={`${styles.nav_a}`} href="https://www.linkedin.com/in/emmanuelpaliwebdeveloper/">
                  LinkedIn
                </a>
              </li>
            </ul>
		</footer>
	)
}

export default Footer
