import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Faq from './routes/Faq';
import Gallery from './routes/Gallery';
import Contact from './routes/Contact';
import Payment from './routes/Payment';
import About from './routes/About';
import NoPage from './routes/NoPage';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="payment" element={<Payment />} />
          <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
