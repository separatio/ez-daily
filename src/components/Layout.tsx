import Footer from './Footer'
import LeftSideDrawer from './LeftSideDrawer'

export default function Layout({ children }) {
  return (
    <>
      <LeftSideDrawer />
      <main>{children}</main>
      <Footer />
    </>
  )
}
