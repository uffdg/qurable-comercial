import { HashRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Travel from './pages/industries/Travel';
import Restaurants from './pages/industries/Restaurants';
import Apparel from './pages/industries/Apparel';
import GasOil from './pages/industries/GasOil';
import Fintech from './pages/industries/Fintech';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viajes" element={<Travel />} />
        <Route path="/gastronomia" element={<Restaurants />} />
        <Route path="/indumentaria" element={<Apparel />} />
        <Route path="/combustibles" element={<GasOil />} />
        <Route path="/fintech" element={<Fintech />} />
      </Routes>
    </HashRouter>
  );
}
