import React, { useState, useEffect } from 'react';
import Card from '../components/PriceCard';

import foodplaces from '../data/foodplaces.json';

export default function FoodSection() {
  function ListPlaces(places) {
    const topPlaces = places.map((place) => (
      // <li className="my-2">{place.properties['Restaurant Name']}</li>
      <Card
        // className="my-1"
        title={place.properties['Restaurant Name']}
        address={place.properties.Address}
        description={place.properties['Short Description']}
        image={place.properties.imgURL}
      />
    ));
    return <div className="flex flex-wrap">{topPlaces}</div>;
  }

  return (
    <section id="foodspots" className="min-h-screen my-10 px-4 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-gray-600 text-4xl uppercase">Where to eat</h2>
        <div className="my-8 ">
          <span className="text-gray-400 ">
            Manhattan is home to a diverse array of cuisines and dining
            experiences, from casual street food to Michelin-starred
            restaurants. Here is a list of some of the top places for food in
            Manhattan
          </span>
        </div>
        {ListPlaces(foodplaces.features)}
        <div className="text-gray-400 ">
          <h3 className="text-2xl my-10">Average prices</h3>
          <div className="flex flex-wrap text-justify">
            <div className="flex lg:w-1/2 pr-4">
              Despite, we do not have access to up-to-date information on
              average prices for restaurants in Manhattan, as prices can change
              over time and depend on various factors such as menu items,
              specials, taxes, and service charges. However, we can give you an
              idea of what to expect in terms of prices for different types of
              restaurants in Manhattan. It's also worth noting that prices may
              vary depending on whether you're ordering a la carte or a
              prix-fixe menu, and if you're ordering a drink or a full meal.
              Some restaurants also offer a range of prices depending on the
              time of day, such as a more affordable lunch menu or a more
              expensive dinner menu. It's always best to check the prices
              directly on the restaurant's website or by calling them directly.
            </div>
            <div className="flex lg:w-1/2 pl-4">
              <ul className="list-disc m-4 lg:my-0">
                <li>
                  <b className="text-lg my-4">
                    High-end fine dining restaurants
                  </b>
                  <br /> such as Eleven Madison Park, Sushi Nakazawa, and Le
                  Bernardin, typically have a prix-fixe menu (a set menu with
                  multiple courses) that can cost $150-$300 or more per person,
                  and a dress code is usually required.
                </li>
                <li>
                  <b className="text-lg my-4">Mid-range restaurants</b> <br />{' '}
                  such as Peter Luger Steakhouse, Carbone, and Momofuku Ssäm
                  Bar, typically have a la carte (individual menu items)pricing,
                  and a meal for one person can cost around $50-$100.
                </li>
                <li>
                  <b className="text-lg my-4">
                    Casual or fast-casual restaurants
                  </b>{' '}
                  <br /> such as Di Fara Pizza, Casa Enrique, and Ippudo,
                  typically have lower prices, and a meal for one person can
                  cost around $15-$30.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
