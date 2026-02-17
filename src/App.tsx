import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import JpMall from './pages/JpMall'
import Weflye from './pages/Weflye'
import Wonbery from './pages/Wonbery'

function App() {
  return (
    <>
      <div className="noise-overlay" />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jpmall" element={<JpMall />} />
          <Route path="/weflye" element={<Weflye />} />
          <Route path="/wonbery" element={<Wonbery />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
