import Footer from './Footer'
import SideBar from './SideBar'
import styles from '../../styles/layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <SideBar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
