import React from "react";

export default function Gallery() {
  return (
    <section className="p-8 bg-gray-100">
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
  );
}
