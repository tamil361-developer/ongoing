import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="container py-5" style={{ paddingTop: '90px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="text-center mt-5">
          <small>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</small>
        </footer>
      </div>
    </>
  )
}

export default App
