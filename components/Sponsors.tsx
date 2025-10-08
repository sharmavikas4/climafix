"use client";
import React, { useState } from "react";
import Image from "next/image";

type Sponsor = {
  id: number;
  logo: string;
  name: string;
};

const sponsors: Sponsor[] = [
  { id: 1, logo: "/sponsors/earth.png", name: "Earth" },
  { id: 2, logo: "/sponsors/water.png", name: "Water" },
  { id: 3, logo: "/sponsors/fire.png", name: "Fire" },
  { id: 4, logo: "/sponsors/air.png", name: "Air" },
  { id: 5, logo: "/sponsors/space.png", name: "Space" },
  { id: 6, logo: "/sponsors/metal.png", name: "Metal" },
];

const Sponsors: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const prev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? sponsors.length - visibleCount : prevIndex - 1
    );
  };

  const next = () => {
    setStartIndex((prevIndex) =>
      prevIndex + visibleCount >= sponsors.length ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-700">
        Our Sponsors
      </h2>

      <div className="max-w-6xl mx-auto flex items-center justify-center space-x-4 px-4">
        {/* Prev button */}
        <button
          onClick={prev}
          className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700"
          aria-label="Previous sponsors"
        >
          &#10094;
        </button>

        {/* Sponsor logos visible */}
        <div key={startIndex} className="flex overflow-hidden w-full max-w-4xl">
          {sponsors
            .slice(startIndex, startIndex + visibleCount)
            .map(({ id, logo, name }) => (
              <div
                key={id}
                className="flex-shrink-0 flex items-center justify-center p-4 bg-white rounded shadow cursor-pointer transition-opacity duration-300"
                style={{ width: "25%" }} // quarter width per logo
              >
                <Image
                  src={logo}
                  alt={name}
                  width={160}
                  height={80}
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700"
          aria-label="Next sponsors"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Sponsors;
