import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reporte from './pages/Reporte';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reporte" element={<Reporte />} />
      </Routes>
    </Router>
  );
}

export default App;
