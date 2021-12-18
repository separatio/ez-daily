import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Page({ children }) {
  return (
    <>
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
