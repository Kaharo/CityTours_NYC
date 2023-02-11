import React from 'react';
import Header from '../layouts/Header';

export default function HeaderSection() {
  return (
    <section className="min-h-screen min-w-full mx-0 px-0 bg-cover bg-center bg-fixed bg-[url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700316960.jpg')]">
      {/* <section className="min-h-screen min-w-full max-w-full mx-0 px-0 bg-cover bg-center bg-fixed bg-[url('https://img.freepik.com/free-photo/central-park-manhattan-new-york-huge-beautiful-park-surrounded-by-skyscraper-with-pond_181624-50335.jpg?w=2000')]"> */}

      <Header />

      {/* section className="min-h-screen lg:grid lg:grid-span-12 px-2"> */}
      <div className="flex flex-col lg:max-w-6xl p-2 pt-12 lg:mx-auto  justify-center lg:col-span-4">
        <div className="flex-w-32 lg:max-w-xl items-center my-2 mb-8 ">
          <h1 className="uppercase text-gray-300 text-5xl lg:text-6xl">
            Explore the Best of Manhattan
          </h1>
          <p className="text-gray-100 my-4 text-justify">
            Welcome to the ultimate guide for exploring the best attractions in
            Manhattan! Whether you're a first-time visitor or a seasoned New
            Yorker, our information is your one-stop destination for discovering
            the sights, sounds, and flavors of the Big Apple.
            {/* From the iconic
            Central Park to the world-renowned museums, Manhattan offers a wide
            variety of experiences for everyone. Browse our top picks, read our
            reviews, and plan your next adventure today! Get ready to experience
            the energy and excitement of the city that never sleeps, and
            discover the magic of Manhattan! */}
          </p>
        </div>
        <div className="flex-w-64 lg:my-8 grayscale-[80%] lg:col-span-8">
          {/* <img
            src="https://img.freepik.com/free-photo/central-park-manhattan-new-york-huge-beautiful-park-surrounded-by-skyscraper-with-pond_181624-50335.jpg?w=2000"
            alt="Central Park top view"
            // className="grayscale"
          /> */}
        </div>
      </div>
    </section>
  );
}
