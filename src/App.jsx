import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Infrastructure from './pages/Infrastructure';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import AlumniPanel from './pages/AlumniPanel';
import Careers from './pages/Careers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/infrastructure' element={<Infrastructure />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='/admissions' element={<Admissions />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/alumni-panel' element={<AlumniPanel />} />
        <Route path='/careers' element={<Careers />} />
        
      </Routes>
    </Router>
  );
}

export default App;
