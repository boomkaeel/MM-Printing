// src/Services.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="p-8 max-w-6xl mx-auto"
    >
      <h3 className="text-3xl font-semibold text-center mb-6">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          "Business Cards",
          "Flyers & Brochures",
          "Tarpaulin Printing",
          "Stickers",
          "Posters",
          "Custom T-Shirts",
        ].map((service) => (
          <div key={service} className="p-4 border rounded shadow-sm bg-gray-50">
            <h4 className="font-bold text-xl mb-2">{service}</h4>
            <p>
              High-quality and affordable {service.toLowerCase()} to meet your
              needs.
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
