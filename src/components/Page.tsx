import Footer from './Footer'
import Navbar from './Navbar'

export default function Page({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
