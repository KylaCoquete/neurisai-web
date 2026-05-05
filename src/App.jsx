import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import NeuralBg from './components/NeuralBg'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Technology from './pages/Technology'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <NeuralBg />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
