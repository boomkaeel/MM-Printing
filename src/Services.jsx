// src/Services.jsx
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "business-cards",
    title: "Business Cards",
    description: "High-quality and affordable business cards to promote your brand.",
  },
  {
    id: "flyers-brochures",
    title: "Flyers & Brochures",
    description: "Colorful and informative prints to market your products or services.",
  },
  {
    id: "tarpaulin",
    title: "Tarpaulin Printing",
    description: "Durable tarpaulins perfect for events, ads, and signage.",
  },
  {
    id: "stickers",
    title: "Stickers",
    description: "Custom stickers for packaging, promotions, and branding.",
  },
  {
    id: "posters",
    title: "Posters",
    description: "Bold posters to catch attention in any setting.",
  },
  {
    id: "custom-tshirts",
    title: "Custom T-Shirts",
    description: "Personalized shirts for your team, events, or business.",
  },
];

export default function Services() {
  return (
    <section className="p-4 md:p-8">
      <h3 className="text-3xl font-semibold text-center mb-6">Our Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 border rounded-lg shadow-sm bg-white flex flex-col justify-between transition-transform hover:scale-105 duration-300"
          >
            <div>
              <h4 className="font-bold text-xl mb-2">{service.title}</h4>
              <p className="text-sm md:text-base text-gray-600">{service.description}</p>
            </div>
            <div className="mt-4">
              <Link
                to={`/services/${service.id}`}
                className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:shadow-lg transition duration-300"
              >
                Read More <span className="inline-block ml-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
