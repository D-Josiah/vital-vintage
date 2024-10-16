import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './Index.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';

import './scss/style.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
