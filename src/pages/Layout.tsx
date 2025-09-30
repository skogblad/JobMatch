import { Outlet } from "react-router"
import { Navbar } from "../components/header/Navbar"
import { Footer } from "../components/footers/Footer"

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      
      <main>
        <Outlet/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}