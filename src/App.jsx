import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Services from "./Services";
import About from "./About";
import Gallery from "./Gallery";
import ServiceDetail from "./ServiceDetail";

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-2 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo.jpg"
            alt="MM Printing Logo"
            className="h-20 w-20 object-contain"
          />
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-10">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/gallery" className="hover:text-blue-600">Gallery</Link>
        </nav>
      </header>

      {/* Animated Page Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/services/:id" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
            <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center space-y-4">
        <div className="flex justify-center space-x-4 items-center">
  <a href="https://www.facebook.com/Michael.Kaeeeeel" target="_blank"><Facebook /></a>
  <a href="https://www.instagram.com/mandapatmichael/" target="_blank"><Instagram /></a>
  <a href="tel:+639123456789" className="text-sm font-semibold hover:underline">📞</a>
</div>
        <p>&copy; 2025 MM Printing. All rights reserved.</p>
        <p><a href="#" className="underline">Chat with us</a></p>
        <p>Built for your need ♥ <br />
          <span className="text-sm">Online ordering available through our Order Now button above.</span>
        </p>
      </footer>
    </div>
  );
}

// Transition wrapper for smooth page animation
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

// Home page content
function Home() {
  return (
    <>
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4">
        <h2 className="text-4xl font-bold mb-4">Your One-Stop Printing Shop</h2>
        <p className="text-lg mb-6">Quality Prints. Fast Turnaround. Affordable Prices.</p>
        <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold">Order Now</button>
      </section>

      <section className="p-4 md:p-8">
        <h3 className="text-3xl font-semibold text-center mb-6">What Our Customers Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Great service and quality!', 'Fast and reliable prints every time.'].map((review, i) => (
            <div key={i} className="p-4 bg-white rounded shadow">
              <p>"{review}"</p>
              <p className="mt-2 font-semibold">- Customer {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-4 md:p-8 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-6">Contact Us</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input placeholder="Your Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Message" className="w-full p-2 border rounded h-24" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </section>
    </>
  );
}
