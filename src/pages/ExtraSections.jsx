import React from "react";
import { Star, UserPlus, Search, CheckCircle } from "lucide-react";
import CountUp from "react-countup";
import { FaLightbulb, FaQuestionCircle, FaUsers } from "react-icons/fa";

const ExtraSections = () => {
  return (
    <div className="bg-base-100 w-11/12 mx-auto">
      {/* Section 1: Features */}
      <section className="px-4 md:px-16 bg-base-100 text-primary">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary flex items-center justify-center gap-3">
          <FaQuestionCircle className="text-primary" />
          Why Choose NestMate?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              Smart Matchmaking
            </h3>
            <p className="text-sm text-gray-600">
              Our intelligent roommate-matching system uses behavior and
              preference data to connect you with ideal living partners.
            </p>
          </div>
          <div className="card bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              Verified Listings
            </h3>
            <p className="text-sm text-gray-600">
              Every room and user is reviewed and verified to keep your roommate
              search secure, transparent, and scam-free.
            </p>
          </div>
          <div className="card bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              Community Support
            </h3>
            <p className="text-sm text-primary">
              Get access to helpful guides, safety resources, and community chat
              to make co-living safe and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className="py-10 px-4 md:px-16 bg-base-100 text-base-content">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 flex items-center justify-center gap-3">
          <FaLightbulb className="text-primary" />
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center card bg-base-200 p-4 rounded-xl transition duration-300">
            <UserPlus className="w-10 h-10 text-indigo-600 mb-3" />
            <h4 className="text-lg font-semibold text-primary mb-2">
              Create Your Profile
            </h4>
            <p className="text-sm text-primary max-w-xs">
              Set your location, budget, and living preferences to get started.
              It only takes a few minutes.
            </p>
          </div>
          <div className="flex flex-col card bg-base-200 items-center p-4 rounded-xl transition duration-300">
            <Search className="w-10 h-10 text-purple-600 mb-3" />
            <h4 className="text-lg font-semibold text-primary mb-2">
              Browse & Filter
            </h4>
            <p className="text-sm text-primary max-w-xs">
              Explore listings or profiles, use smart filters to narrow your
              search, and save your top picks.
            </p>
          </div>
          <div className="flex flex-col items-center card bg-base-200 p-4 rounded-xl transition duration-300">
            <CheckCircle className="w-10 h-10 text-pink-600 mb-3" />
            <h4 className="text-lg text-primary font-semibold mb-2">
              Connect & Move In
            </h4>
            <p className="text-sm text-primary max-w-xs">
              Securely chat, schedule viewings, and finalize your perfect living
              arrangement without stress.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Impact Stats */}
      <section className="bg-base-100 mb-10 px-4 md:px-16 text-base-content">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary flex items-center justify-center gap-3">
            <FaUsers className="text-primary" />
            Trusted by Thousands Across the Country
          </h2>
          <p className="mt-3 max-w-xl mx-auto">
            From finding roommates to building long-lasting connections —
            NestMate is changing the way people co-live.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <div className="card bg-base-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="card-body">
              <h3 className="text-5xl font-bold text-primary mb-2">
                <CountUp end={95} duration={4} suffix="%" enableScrollSpy />
              </h3>
              <p className="text-lg font-semibold">Match Satisfaction</p>
              <p className="text-sm mt-1">
                Users found compatible roommates within days.
              </p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="card-body">
              <h3 className="text-5xl font-bold text-primary mb-2">
                <CountUp
                  end={4.8}
                  duration={4}
                  decimals={1}
                  suffix="/5"
                  enableScrollSpy
                />
              </h3>
              <p className="text-lg font-semibold">Average Rating</p>
              <p className="text-sm mt-1">
                Rated across multiple platforms by verified users.
              </p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-md hover:shadow-lg transition duration-300">
            <div className="card-body">
              <h3 className="text-5xl font-bold text-primary mb-2">
                <CountUp end={30} duration={4} suffix="K+" enableScrollSpy />
              </h3>
              <p className="text-lg font-semibold">Successful Matches</p>
              <p className="text-sm mt-1">
                Real connections. Real roommates. Real impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSections;
