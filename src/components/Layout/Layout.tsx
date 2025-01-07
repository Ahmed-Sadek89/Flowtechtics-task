import { Outlet } from 'react-router-dom'
import './style.css'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'

const Layout = () => {
  return (
    <main>
      <Sidebar />
      <section>
        <Navbar />
        <Outlet />
      </section>
    </main>
  )
}

export default Layout
