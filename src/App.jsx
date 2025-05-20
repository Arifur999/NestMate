import { Outlet } from 'react-router'
import './App.css'
import Navber from './components/Navber'
import Footer from './components/Footer'

function App() {

  return (
    <>
      
     <Navber></Navber>
     <Outlet></Outlet>
     <Footer></Footer>
      
    </>
  )
}

export default App
