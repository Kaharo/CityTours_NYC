import React from 'react';
import './style.css';
import HeaderSection from './layouts/HeaderSection';
import PlacesSection from './layouts/PlacesSection';
import MapSection from './layouts/MapSection';
import OutfitSection from './layouts/OutfitSection';
import FoodSection from './layouts/FoodSection';
import StayInTouchSection from './layouts/InTouch';
import Footer from './layouts/Footer';

export default function App() {
  return (
    <div className="">
      {/* <main className="lg:max-w-6xl lg:px-0 lg:mx-auto"> */}
      <main className="mx-auto">
        <HeaderSection />
        <PlacesSection className="" />
        <MapSection />
        <FoodSection />
        <OutfitSection />
        <StayInTouchSection />
        <Footer />
      </main>
    </div>
  );
}
