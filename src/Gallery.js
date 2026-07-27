import React, { useState } from "react";

const images = [
  "/images/gallery-15.jpg",
  "/images/gallery-15.jpg",
  "/images/gallery-13.jpg",
  "/images/gallery-14.jpg",
  "/images/gallery-8.jpg",
  "/images/gallery-15.jpg",
  "/images/gallery-13.jpg",
  "/images/gallery-9.jpg",
  "/images/gallery-14.jpg",
  "/images/gallery-15.jpg",
];

export default function Gallery() {

  const [pause, setPause] = useState(false);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">

        <p className="text-orange-500 uppercase tracking-widest font-semibold">
          Project Gallery
        </p>

        <h2 className="text-4xl font-bold mt-3">
          Moments From The Field
        </h2>

        <p className="text-gray-600 mt-4">
          Snapshots from installation, testing, and commissioning across our
          project sites.
        </p>

      </div>


      <div
        className="overflow-hidden"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >

        <div
          className={`flex gap-5 w-max ${
            pause ? "" : "animate-marquee"
          }`}
        >

          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Project"
              className="w-72 h-52 object-cover rounded-xl shadow-lg flex-shrink-0"
            />
          ))}

        </div>

      </div>

    </section>
  );
}