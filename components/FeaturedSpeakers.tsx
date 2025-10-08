"use client";
import React from "react";
import Image from "next/image";

type Speaker = {
  id: number;
  name: string;
  title: string;
  photoUrl: string;
};

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Anjali Sharma",
    title: "Climate Scientist",
    photoUrl: "/speakers/anjali-sharma.png",
  },
  {
    id: 2,
    name: "Mr. Rohan Mehta",
    title: "Sustainability Expert",
    photoUrl: "/speakers/rohan-mehta.png",
  },
  {
    id: 3,
    name: "Ms. Kavita Iyer",
    title: "Environmental Activist",
    photoUrl: "/speakers/kavita-iyer.png",
  },
];

const FeaturedSpeakers: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        Featured Speakers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <Image
              src={speaker.photoUrl}
              alt={speaker.name}
              width={128} // e.g. 32 * 4 (Tailwind scales)
              height={128}
              className="rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {speaker.name}
            </h3>
            <p className="text-green-600">{speaker.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
