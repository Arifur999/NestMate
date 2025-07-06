import { Outlet } from 'react-router'
import './App.css'
import Navber from './components/Navber'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <div>
     <Navber></Navber>
     </div>
     <div className="flex-grow">
     <Outlet></Outlet>
     </div>
     <Footer></Footer>
      </div>
    </>
  )
}

export default App
