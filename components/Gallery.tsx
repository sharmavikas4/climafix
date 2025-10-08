"use client";
import React, { useState } from "react";
import Image from "next/image";

type Photo = {
  id: number;
  src: string;
  alt: string;
};

const photos: Photo[] = [
  { id: 1, src: "/gallery/photo1.png", alt: "Summit moment 1" },
  { id: 2, src: "/gallery/photo2.png", alt: "Summit moment 2" },
  { id: 3, src: "/gallery/photo3.png", alt: "Summit moment 3" },
  { id: 4, src: "/gallery/photo4.png", alt: "Summit moment 4" },
  { id: 5, src: "/gallery/photo5.png", alt: "Summit moment 5" },
  { id: 6, src: "/gallery/photo6.png", alt: "Summit moment 6" },
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const changeSlide = (newIndex: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true);
    }, 100);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    changeSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    changeSlide(newIndex);
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-10">
        Summit Gallery
      </h2>

      <div className="flex items-center justify-center space-x-6 mx-auto max-w-4xl">
        {/* Prev button */}
        <button
          onClick={prevSlide}
          className="bg-green-600 text-white rounded-full p-3 hover:bg-green-700"
          aria-label="Previous Slide"
        >
          &#10094;
        </button>

        {/* Image */}
        <div
          className={`relative w-full rounded-lg overflow-hidden shadow-lg transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            width={600}
            height={350}
            className="object-contain w-full max-w-full max-h-[350px] mx-auto"
          />
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="bg-green-600 text-white rounded-full p-3 hover:bg-green-700"
          aria-label="Next Slide"
        >
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => changeSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-green-700" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
