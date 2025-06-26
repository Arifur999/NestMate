import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-base-100 text-base-content py-10 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-600">
          Who We Are
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              <span className="font-bold text-primary">NestMate</span> is more than just a platform — it's a digital solution crafted with care. Our goal is to empower users with a seamless experience where they can easily explore, manage, and showcase their items with confidence and clarity.
            </p>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-indigo-600">Our Mission</h3>
              <p className="text-base">
                To simplify digital item management through innovation, accessibility, and reliability. We strive to bridge the gap between users and technology through a human-first experience.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-indigo-600">Our Vision</h3>
              <p className="text-base">
                To become a go-to platform for item sharing and showcasing across the world, fostering a community driven by trust, ease, and technology.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-indigo-600">Why Choose Us?</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 text-base">
                <li>Modern and Responsive Design</li>
                <li>Dark/Light Mode Compatibility</li>
                <li>Fast, Secure, and Reliable</li>
                <li>Clean UI with Meaningful UX</li>
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div>
            <img
              src="/About us page-pana.svg"
              alt="About NestMate"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
