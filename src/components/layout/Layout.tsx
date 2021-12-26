import Footer from './Footer'
import SideBar from './SideBar'

const Layout = ({ children }) => {
  return (
    <>
      <SideBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
