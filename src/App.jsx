import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import {BrowserRouter as Router} from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
