import Footer from './Footer'
import LeftSideDrawer from './LeftSideDrawer'

export default function Page({ children }) {
  return (
    <>
      <LeftSideDrawer />
      <main>{children}</main>
      <Footer />
    </>
  )
}
