import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
  <img src="/images/logo.jpg" alt="MM Printing Logo" className="h-25 w-25 object-contain" />
</div>
        <nav className="space-x-3">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#gallery" className="hover:text-blue-600">Gallery</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>
      <section id="home" className="text-center py-20 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <h2 className="text-4xl font-bold mb-4">Your One-Stop Printing Shop</h2>
        <p className="text-lg mb-6">Quality Prints. Fast Turnaround. Affordable Prices.</p>
        <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold">Order Now</button>
      </section>
      <section id="about" className="p-8 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        <p>MM Printing is your local partner for high-quality printing services. From business cards to banners, we help your brand stand out with excellent materials and design.</p>
      </section>
      <section id="services" className="bg-white p-8">
        <h3 className="text-3xl font-semibold text-center mb-6">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Business Cards', 'Flyers & Brochures', 'Tarpaulin Printing', 'Stickers', 'Posters', 'Custom T-Shirts'].map(service => (
            <div key={service} className="p-4 border rounded shadow-sm bg-gray-50">
              <h4 className="font-bold text-xl mb-2">{service}</h4>
              <p>High-quality and affordable {service.toLowerCase()} to meet your needs.</p>
            </div>
          ))}
        </div>
      </section>
      <section id="gallery" className="p-8 bg-gray-100">
  <h3 className="text-3xl font-semibold text-center mb-6">Gallery</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {["print1.jpg", "print2.jpg"].map((filename, i) => (
      <img
        key={i}
        src={`/images/${filename}`}
        alt={`MM Print ${i + 1}`}
        className="rounded shadow-md w-full h-40 object-cover"
      />
    ))}
  </div>
</section>
      <section id="testimonials" className="p-8">
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
      <section id="contact" className="p-8 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-6">Contact Us</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input placeholder="Your Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Message" className="w-full p-2 border rounded h-24"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </section>
      <footer className="bg-gray-800 text-white p-6 text-center space-y-4">
        <div className="flex justify-center space-x-4">
        <a href="https://www.facebook.com/Michael.Kaeeeeel" 
		target="_blank"><Facebook /></a>
		<a href="https://www.instagram.com/mandapatmichael/" 
		target="_blank"><Instagram /></a>
		<a href="https://twitter.com/mmprinting" 
		target="_blank"><Twitter /></a>
        </div>
        <p>&copy; 2025 MM Printing. All rights reserved.</p>
        <p><a href="#" className="underline">Chat with us</a></p>
        <p>
          Built with ♥ for your business. <br />
          <span className="text-sm">Online ordering available through our Order Now button above.</span>
        </p>
      </footer>
    </div>
  );
}
