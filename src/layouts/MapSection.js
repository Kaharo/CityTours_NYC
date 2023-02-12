import React from 'react';

export default function MapSection() {
  return (
    <section className="">
      <div className="lg:mx-auto lg:max-w-7xl ">
        <h2 className="text-gray-600 text-4xl uppercase my-2">
          Places on the map
        </h2>
        <p className="my-2 mx-1 text-gray-400">
          Move closer to find all of them
        </p>
      </div>
      <div
        id="map"
        className="lg:mx-0 lg:max-w-full min-h-screen lg:w-screen lg:mx-0 "
      >
        <iframe
          src="https://api.mapbox.com/styles/v1/kaharo/ckps1s8fi3ihu18pjrrbhanp4.html?title=false&access_token=pk.eyJ1Ijoia2FoYXJvIiwiYSI6ImNqYm9ueDg4aDF5bTMycm8xbzBmeDlmMmYifQ.gmoJNi-NFdRMIF4cWoRwSQ&zoomwheel=false#11.44/40.7775/-73.9604"
          title="nyc.city-tours"
          className="min-h-screen min-w-full "
        ></iframe>
      </div>
    </section>
  );
}
