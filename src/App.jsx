import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import AboutTheAuthor from './pages/AboutTheAuthor';
import IndiasFirstCoinage from './pages/IndiasFirstCoinage';
import KushanaDynasty from './pages/KushanaDynasty';
import WesternCentralIndianDynasty from './pages/WesternCentralIndianDynasty';
import SouthernIndianDynasty from './pages/SouthernIndianDynasty';
import MughalsIslamicDynasties from './pages/MughalsIslamicDynasties';
import DeccanMarathaRulers from './pages/DeccanMarathaRulers';
import EastIndiaAndRaj from './pages/EastIndiaAndRaj';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-the-author" element={<AboutTheAuthor />} />
          <Route path="/indias-first-coinage" element={<IndiasFirstCoinage />} />
          <Route path="/kushana-dynasty" element={<KushanaDynasty />} />
          <Route path="/western-central-indian-dynasty" element={<WesternCentralIndianDynasty />} />
          <Route path="/southern-indian-dynasty" element={<SouthernIndianDynasty />} />
          <Route path="/mughals-islamic-dynasties" element={<MughalsIslamicDynasties />} />
          <Route path="/deccan-maratha-rulers" element={<DeccanMarathaRulers />} />
          <Route path="/east-india-and-raj" element={<EastIndiaAndRaj />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}