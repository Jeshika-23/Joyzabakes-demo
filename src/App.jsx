import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Menu from './pages/Menu';
import CustomOrders from './pages/CustomOrders';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import { CartProvider } from './context/CartContext';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';


import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:id" element={<ProductDetail />} />
              <Route path="/custom-orders" element={<CustomOrders />} />
              <Route path="/about" element={<About />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
