import Footer from './Footer'
import SideBar from './SideBar'

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SideBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export default Layout
