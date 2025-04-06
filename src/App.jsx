import './App.css';
import Home from './pages/HomePage';
import Infrastructure from './pages/Infrastructure';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/infrastructure' element={<Infrastructure/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
