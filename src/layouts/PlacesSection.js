import React from 'react';
import Card from '../components/Card';
import locations from '../data/places.json';

export default function PlacesSection() {
  function ListPlaces(places) {
    const topPlaces = places.map((place) => (
      <Card
        className="m-4 flex p-4"
        title={place.properties.Place}
        address={place.properties.Address}
        image={place.properties.imgURL}
        description={place.properties['Short Description']}
      />
    ));
    return (
      <div className="flex flex-wrap justify-center gap-6">{topPlaces}</div>
    );
  }

  return (
    <section
      id="places"
      className="min-h-screen my-8 px-4 flex-col lg:flex mx-auto"
    >
      <div className="text-justify lg:px-24">
        <h2 className="text-gray-400 text-4xl my-4 uppercase">
          The 10 best attractions
        </h2>
        <span className="text-gray-400 place-content-center">
          Welcome to the ultimate guide for exploring the best attractions in
          Manhattan! Whether you're a first-time visitor or a seasoned New
          Yorker, our website is your one-stop destination for discovering the
          sights, sounds, and flavors of the Big Apple. From the iconic Central
          Park to the world-renowned museums, Manhattan offers a wide variety of
          experiences for everyone. Browse our top picks, read our reviews, and
          plan your next adventure today! Get ready to experience the energy and
          excitement of the city that never sleeps, and discover the magic of
          Manhattan!
        </span>
      </div>
      {ListPlaces(locations.features)}
    </section>
  );
}
