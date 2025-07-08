// src/ServiceDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

// Updated service data with matching image filenames
const serviceData = {
  "business-cards": {
    title: "Business Cards",
    description:
      "Our premium business cards are printed on high-quality cardstock with vibrant colors. Perfect for professionals and entrepreneurs looking to leave a lasting impression.",
    image: "/images/business-cards.jfif",
  },
  "flyers-brochures": {
    title: "Flyers & Brochures",
    description:
      "Custom flyers and brochures ideal for marketing events, promotions, and services. Available in various sizes and finishes.",
    image: "/images/flyers.jfif",
  },
  "tarpaulin": {
    title: "Tarpaulin Printing",
    description:
      "Durable and vibrant tarpaulin prints perfect for indoor and outdoor advertising. Weather-resistant and fully customizable.",
    image: "/images/tarpaulin.jpg",
  },
  "stickers": {
    title: "Stickers",
    description:
      "High-quality vinyl and paper stickers for branding, packaging, or events. Cut to any shape you like.",
    image: "/images/sticker.jpg", // fixed: sticker.jpg instead of stickers.jpg
  },
  "posters": {
    title: "Posters",
    description:
      "Eye-catching posters printed in full color, great for advertising and decoration. Glossy and matte finishes available.",
    image: "/images/poster.jfif", // fixed: poster.jpg instead of posters.jpg
  },
  "custom-tshirts": {
    title: "Custom T-Shirts",
    description:
      "Get your design printed on quality cotton shirts. Ideal for group events, branding, and personal use.",
    image: "/images/tshirt.jfif", // fixed: tshirt.jpg instead of tshirts.jpg
  },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">Service Not Found</h2>
        <Link to="/services" className="text-blue-600 hover:underline mt-4 block">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <section className="p-4 md:p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-64 object-cover rounded shadow mb-6"
      />
      <p className="text-base md:text-lg mb-6">{service.description}</p>
      <Link to="/services" className="text-blue-600 hover:underline">
        ← Back to Services
      </Link>
    </section>
  );
}
