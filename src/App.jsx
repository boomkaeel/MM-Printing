import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import Services from "./pages/Services";

export default function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-50 text-gray-800">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/images/logo.jpg" alt="MM Printing Logo" className="h-10 w-10 object-contain" />
            <h1 className="text-2xl font-bold text-blue-600">MM Printing</h1>
          </div>
          <nav className="space-x-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-6 text-center space-y-4">
          <div className="flex justify-center space-x-4 items-center">
            <a href="https://www.facebook.com/Michael.Kaeeeeel" target="_blank"><Facebook /></a>
            <a href="https://www.instagram.com/mandapatmichael/" target="_blank"><Instagram /></a>
            <a href="tel:+639123456789" className="text-sm font-semibold hover:underline">📞 0912 345 6789</a>
          </div>
          <p>&copy; 2025 MM Printing. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

// Put your home page sections here for simplicity
function Home() {
  return (
    <>
      <section id="home" className="text-center py-20 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <h2 className="text-4xl font-bold mb-4">Your One-Stop Printing Shop</h2>
        <p className="text-lg mb-6">Quality Prints. Fast Turnaround. Affordable Prices.</p>
        <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold">Order Now</button>
      </section>
      {/* You can add About, Gallery, Testimonials, Contact here too */}
    </>
  );
}
