import {ReactNode} from 'react'
import SgNavbar from '../Navbar/SgNavBar'
import styles from './Layout.module.css'
const Layout = ({children}: {children?: ReactNode}) => {
	return (
		<section className={styles.section}>
			<SgNavbar />
			<main>{children}</main>
			<footer>
				<h1>Footer</h1>
			</footer>
		</section>
	)
}

export default Layout
