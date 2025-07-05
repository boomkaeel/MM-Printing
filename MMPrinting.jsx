import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function MMPrinting() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MM Printing</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#gallery" className="hover:text-blue-600">Gallery</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center py-20 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <h2 className="text-4xl font-bold mb-4">Your One-Stop Printing Shop</h2>
        <p className="text-lg mb-6">Quality Prints. Fast Turnaround. Affordable Prices.</p>
        <Button>Order Now</Button>
      </section>

      {/* About */}
      <section id="about" className="p-8 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        <p>MM Printing is your local partner for high-quality printing services. From business cards to banners, we help your brand stand out with excellent materials and design.</p>
      </section>

      {/* Services */}
      <section id="services" className="bg-white p-8">
        <h3 className="text-3xl font-semibold text-center mb-6">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Business Cards', 'Flyers & Brochures', 'Tarpaulin Printing', 'Stickers', 'Posters', 'Custom T-Shirts'].map(service => (
            <Card key={service}>
              <CardContent className="p-4">
                <h4 className="font-bold text-xl mb-2">{service}</h4>
                <p>High-quality and affordable {service.toLowerCase()} to meet your needs.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="p-8 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-6">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="bg-white h-40 rounded shadow-md"></div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="p-8">
        <h3 className="text-3xl font-semibold text-center mb-6">What Our Customers Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Great service and quality!', 'Fast and reliable prints every time.'].map((review, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <p>"{review}"</p>
                <p className="mt-2 font-semibold">- Customer {i + 1}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-8 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-6">Contact Us</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input placeholder="Message" className="h-24" />
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center space-y-4">
        <div className="flex justify-center space-x-4">
          <a href="#"><Facebook /></a>
          <a href="#"><Instagram /></a>
          <a href="#"><Twitter /></a>
        </div>
        <p>&copy; 2025 MM Printing. All rights reserved.</p>
        <p><a href="#" className="underline">Chat with us</a></p>
        <p>
          Built with ♥ for your business. <br />
          <span className="text-sm">Online ordering available through our Order Now button above.</span>
        </p>
        <p className="text-xs text-gray-400 mt-2">
          You can deploy this website using free platforms like <a href="https://vercel.com" target="_blank" className="underline">Vercel</a> or <a href="https://netlify.com" target="_blank" className="underline">Netlify</a>. Just upload the code or connect your GitHub repository!
        </p>
      </footer>
    </div>
  );
}
