import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Conference from './Pages/Conference'; // Import Conference correctly
import Sponsors from './Pages/Sponsors'; // Import Sponsors correctly
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/conference" element={<Conference />} /> {/* Conference page */}
          <Route path="/sponsors" element={<Sponsors />} /> {/* Sponsors page */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
