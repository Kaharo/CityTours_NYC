import React from 'react';
import Card from '../components/Card';
import locations from '../data/places.json';

export default function PlacesSection() {
  // const topPlaces = [
  //   {
  //     name: 'Central Park',
  //     address: 'Central Park, New York, NY 10022',
  //     imgURL:
  //       'https://img.freepik.com/free-photo/central-park-manhattan-new-york-huge-beautiful-park-surrounded-by-skyscraper-with-pond_181624-50335.jpg?w=2000',
  //     description:
  //       "A world-famous urban oasis, offering 843 acres of lush greenery, winding paths, and tranquil lakes. Take a stroll or bike ride through the park, or rent a boat and row around the lake. Don't miss the Central Park Zoo, the Central Park Carousel, and the Bethesda Fountain.",
  //   },
  //   {
  //     name: 'Empire State Building',
  //     address: '20 W 34th St, New York, NY 10001',
  //     imgURL:
  //       'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
  //     description:
  //       'A world-famous skyscraper located in Midtown Manhattan, offering spectacular views of the city from its observation deck on the 86th floor.',
  //   },
  //   {
  //     name: 'Statue of Liberty',
  //     address: 'Liberty Island, New York, NY 10004',
  //     imgURL:
  //       'https://content.fortune.com/wp-content/uploads/2020/06/Statue-of-Liberty-09-GettyImages-640476013.jpg',
  //     description:
  //       'An iconic statue located on Liberty Island, symbol of freedom and democracy, offering ferry rides to Ellis Island Immigration Museum',
  //   },
  //   {
  //     name: 'Metropolitan Museum of Art',
  //     address: '1000 5th Ave, New York, NY 10028',
  //     imgURL:
  //       'https://www.silverkris.com/wp-content/uploads/2021/08/shutterstock_300803246.jpg',
  //     description:
  //       "One of the world's largest and most important art museums, with over 2 million works spanning 5,000 years of world culture.",
  //   },
  //   {
  //     name: 'American Museum of Natural History',
  //     address: 'Central Park W, New York, NY 10024',
  //     imgURL:
  //       'https://www.si.edu/sites/default/files/newsdesk/fact_sheets/nhb2015-02891.jpg',
  //     description:
  //       "A large natural history museum with a wide range of exhibits on topics like dinosaurs, astronomy, and the earth's biodiversity.",
  //   },
  //   {
  //     name: 'The High Line',
  //     address: 'New York, NY 10011',
  //     imgURL: 'https://live.staticflickr.com/291/19078400003_8a6f2f1587_b.jpg',
  //     description:
  //       "An elevated park built on an old railroad track, offering views of the Hudson River and the city's architecture.",
  //   },
  //   {
  //     name: 'Chinatown',
  //     address: 'Chinatown, New York, NY 10013',
  //     imgURL:
  //       'https://i.pinimg.com/originals/65/4a/c5/654ac5324e5151446607218573b343a7.jpg',
  //     description:
  //       "A vibrant and culturally rich neighborhood known for its Chinese-American population, traditional Chinese architecture, markets, and authentic cuisine. It's a great place to immerse yourself in Chinese culture, explore Chinese temples, and find Chinese products and souvenirs.",
  //   },
  //   {
  //     name: '9/11 Memorial and Museum',
  //     address: '180 Greenwich St, New York, NY 10007',
  //     imgURL:
  //       'https://cdn.aarp.net/content/dam/aarp/politics/events-and-history/2021/08/1140-ground-zero-9-11-memorial.imgcache.rev.web.700.402.jpg',
  //     description:
  //       'A memorial and museum dedicated to the victims of the September 11 terrorist attacks, located at the World Trade Center site.',
  //   },
  //   {
  //     name: 'Times Square',
  //     address: 'Broadway, New York, NY 10036',
  //     imgURL:
  //       'https://www.westend61.de/images/0001516646pw/times-square-manhattan-new-york-city-new-york-united-states-of-america-north-america-RHPLF19055.jpg',
  //     description:
  //       'A major commercial and entertainment center in Midtown Manhattan, known for its bright lights and billboards, as well as its many shops, restaurants, and theaters.',
  //   },
  //   {
  //     name: 'Rockefeller Center',
  //     address: '45 Rockefeller Plaza, New York, NY 10111',
  //     imgURL:
  //       'https://images.ctfassets.net/xxo9lvoc4mg6/4K5L9O2vfoeI4BVBXwgKOJ/cf9ededba514318f773f56448d984993/45729267_2128908227130165_8989343804381200384_o.jpg?w=2000&q=90',
  //     description:
  //       'An iconic commercial complex in the heart of Manhattan, well known for its landmarks, observation deck, shopping and dining options, and is a must-see tourist destination.',
  //   },
  // ];

  function ListPlaces(places) {
    const topPlaces = places.map((place) => (
      // <li className="my-2">{place.name}</li>
      <Card
        className="my-4 flex-1"
        title={place.properties.Place}
        address={place.properties.Address}
        image={place.properties.imgURL}
        description={place.properties['Short Description']}
      />
    ));
    return <div className="lg:flex-1">{topPlaces}</div>;
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
      <div className="flex flex-wrap lg:flex-row gap-4">
        {ListPlaces(locations.features)}
      </div>
    </section>
  );
}
