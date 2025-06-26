import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <>
      <div className="relative w-11/12 mx-auto h-[400px] md:h-[500px] lg:h-[70vh] rounded">
        {/* Text Overlay */}
        <div className="absolute top-1/4 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center px-4">
          <h1 className="text-2xl md:text-5xl font-bold text-white drop-shadow-md">
            Find Your{' '}
            <span className="text-primary">
              <Typewriter
                words={['Perfect Roommate', 'Ideal Match', 'Living Partner']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="mt-2 text-sm md:text-lg text-white drop-shadow-md">
            Connect. Share. Live Better — Only with NestMate.
          </p>
          
        </div>

        {/* Swiper Slider */}
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full h-full rounded"
        >
          {["/bn-4.avif", "/bn-2.jpg", "/bn-3.avif", "/bn-7.jpg", "/bannar5.jpg"].map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                <img
                  src={img}
                  alt={`slide-${idx}`}
                  className="w-full h-full object-cover"
                />
                {/* Soft Black Overlay */}
                <div className="absolute inset-0 bg-black/20 z-10"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
