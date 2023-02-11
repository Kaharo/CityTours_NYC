import React from 'react';
import Timeline from '../components/Timeline';

export default function OutfitSection() {
  return (
    <section id="clothing" className="min-h-screen my-4 px-4 lg:px-24">
      <div className="container mx-auto max-w-prose">
        <h2 className="text-gray-600 uppercase text-4xl mt-10 ">
          What to wear
        </h2>
        <div className="my-8">
          <span className="text-gray-400 ">
            Please keep in mind that these are averages and the actual numbers
            can vary depending on the year and weather conditions. It's also
            worth checking the forecast for the specific time of your visit.
          </span>
        </div>
        <div className="my-4"></div>
        <Timeline />
      </div>
    </section>
  );
}