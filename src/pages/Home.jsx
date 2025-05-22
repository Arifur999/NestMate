import React from "react";
import Hero from "./Hero";
import ExtraSections from "./ExtraSections";
import AllRoommates from "./AllRoommates";
import { useLoaderData } from "react-router"; 
const Home = () => {
  const roommates = useLoaderData();

  return (
    <>
      <Hero />

      {/* Roommate Section */}
      <section className="py-10 px-4 bg-base-100 text-base-content ">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
              🏠 Find Your Ideal Roommate
            </h1>
            <p className="text-gray-600  max-w-2xl mx-auto ">
              Browse through available listings and find a perfect match to share your space with. Comfortable, convenient, and just what you need.
            </p>
          </div>

          {/* Grid of Roommates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 card bg-base-200 text-primary">
            {roommates.map((roommate) => (
              <AllRoommates key={roommate._id} roommate={roommate} />
            ))}
          </div>
        </div>
      </section>

      <ExtraSections />
    </>
  );
};

export default Home;
