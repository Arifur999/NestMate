import React from 'react';
import { Star, UserPlus, Search, CheckCircle } from 'lucide-react';

const ExtraSections = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Section 1: Features */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Why Choose NestMate?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Smart Matchmaking</h3>
            <p className="text-sm text-gray-600">
              Our intelligent roommate-matching system uses behavior and preference data to connect you with ideal living partners.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Verified Listings</h3>
            <p className="text-sm text-gray-600">
              Every room and user is reviewed and verified to keep your roommate search secure, transparent, and scam-free.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Community Support</h3>
            <p className="text-sm text-gray-600">
              Get access to helpful guides, safety resources, and community chat to make co-living safe and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition duration-300">
            <UserPlus className="w-10 h-10 text-indigo-600 mb-3" />
            <h4 className="text-lg font-semibold mb-2">Create Your Profile</h4>
            <p className="text-sm text-gray-600 max-w-xs">
              Set your location, budget, and living preferences to get started. It only takes a few minutes.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition duration-300">
            <Search className="w-10 h-10 text-purple-600 mb-3" />
            <h4 className="text-lg font-semibold mb-2">Browse & Filter</h4>
            <p className="text-sm text-gray-600 max-w-xs">
              Explore listings or profiles, use smart filters to narrow your search, and save your top picks.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition duration-300">
            <CheckCircle className="w-10 h-10 text-pink-600 mb-3" />
            <h4 className="text-lg font-semibold mb-2">Connect & Move In</h4>
            <p className="text-sm text-gray-600 max-w-xs">
              Securely chat, schedule viewings, and finalize your perfect living arrangement without stress.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Impact Stats */}
      <section className="bg-gray-100 py-20 px-4 md:px-16">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Trusted by Thousands Across the Country
    </h2>
    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
      From finding roommates to building long-lasting connections — NestMate is changing the way people co-live.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
    <div className="bg-white py-8 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-5xl font-bold text-indigo-600 mb-2">95%</h3>
      <p className="text-lg font-semibold text-gray-700">Match Satisfaction</p>
      <p className="text-sm text-gray-500 mt-1">Users found compatible roommates within days.</p>
    </div>
    <div className="bg-white py-8 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-5xl font-bold text-indigo-600 mb-2">4.8/5</h3>
      <p className="text-lg font-semibold text-gray-700">Average Rating</p>
      <p className="text-sm text-gray-500 mt-1">Rated across multiple platforms by verified users.</p>
    </div>
    <div className="bg-white py-8 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-5xl font-bold text-indigo-600 mb-2">30K+</h3>
      <p className="text-lg font-semibold text-gray-700">Successful Matches</p>
      <p className="text-sm text-gray-500 mt-1">Real connections. Real roommates. Real impact.</p>
    </div>
  </div>
</section>

    </div>
  );
};

export default ExtraSections;
