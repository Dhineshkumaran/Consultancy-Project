import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Infrastructure from './pages/Infrastructure';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about-us' element={<AboutUs/>}></Route>
            <Route path='/infrastructure' element={<Infrastructure/>}></Route>
            {/* <Route path='/academics' element={<Academics/>}></Route>
            <Route path='/admissions' element={<Admissions/>}></Route>
            <Route path='/contact-us' element={<ContactUs />}></Route>
            <Route path='/alumni-panel' element={<AlumniPanel />}></Route>
            <Route path='/event-gallery' element={<EventGallery/>}></Route>
            <Route path='/courses' element={<Courses/>}></Route> */}
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
