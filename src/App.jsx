
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';
import Dday from './Dday.jsx';

function App() {

  return (
    <>
      <header>
        <Dday />
      </header>
      <nav>
        <Link to="/resume">이력</Link> |{" "}
        <Link to="/portfolio">포트폴리오</Link> |{" "}
        <Link to="/about">자기소개</Link>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
