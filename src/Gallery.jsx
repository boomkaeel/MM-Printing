import React, { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = ["print1.JPG", "print2.JPG", "print3.JPG", "print4.JPG", "print5.JPG"];

  return (
    <section className="p-8 bg-gray-100 relative">
      <h3 className="text-3xl font-semibold text-center mb-6">Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((filename, i) => (
          <img
            key={i}
            src={`/images/${filename}`}
            alt={`MM Print ${i + 1}`}
            onClick={() => setSelectedImage(`/images/${filename}`)}
            className="rounded shadow-md w-full h-40 object-cover cursor-pointer hover:scale-105 transition-transform"
          />
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-full max-h-[90vh] rounded shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
