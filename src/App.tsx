import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Avinect from './pages/Avinect'
import Tianyu from './pages/Tianyu'
import Wonbery from './pages/Wonbery'
import Feitu from './pages/Feitu'

function App() {
  return (
    <>
      <div className="noise-overlay" />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avinect" element={<Avinect />} />
          <Route path="/tianyu" element={<Tianyu />} />
          <Route path="/wonbery" element={<Wonbery />} />
          <Route path="/feitu" element={<Feitu />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
