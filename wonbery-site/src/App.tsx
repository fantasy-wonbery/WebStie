import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Operations from './pages/Operations'
import Airport from './pages/Airport'
import AocSolutions from './pages/AocSolutions'
import FlightCrew from './pages/FlightCrew'
import ServiceSupport from './pages/ServiceSupport'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/airport" element={<Airport />} />
        <Route path="/aoc-solutions" element={<AocSolutions />} />
        <Route path="/flight-crew" element={<FlightCrew />} />
        <Route path="/service" element={<ServiceSupport />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
