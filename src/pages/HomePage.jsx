import React from "react";
import school from '../assets/school.png';
import Footer from "./Footer";
import Header from "./Header";

const HomePage = () => {
  return (
    <div className="homepage bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gray-100 px-6 md:px-16 py-12">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Global Institute of Excellence
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              We are dedicated to fostering academic brilliance, nurturing innovation, and cultivating global citizens through quality education and values.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img src={school} alt="Campus Building" className="w-full max-w-md mx-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-8">🎓 GLOBAL ACTIVITIES</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {["Virtual Exchange", "Global Projects", "Cultural Events"].map((title, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
              <p className="text-gray-600">Engage with activities that connect students across borders through immersive learning experiences.</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-6 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-8">ABOUT US</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">MISSION</h3>
            <p className="text-gray-700 mb-6">
              Our mission is to create a global platform for students and educators to collaborate, innovate, and thrive together.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="w-64 h-40 bg-gray-300 rounded-lg mb-4"></div>
            <button className="text-blue-700 hover:text-blue-900 font-semibold">READ MORE →</button>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-8">🎓 LEADERSHIP SPEAKS</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">Principal's Message</h4>
            <p className="text-gray-700">"We believe in nurturing future leaders through a holistic approach to education."</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">Dean's Message</h4>
            <p className="text-gray-700">"Collaboration, curiosity, and commitment are at the heart of our academic spirit."</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">Director's Message</h4>
            <p className="text-gray-700">"Our goal is to build bridges between students globally through meaningful interactions."</p>
          </div>
        </div>
      </section>

      {/* Recent Clicks Section */}
      <section className="py-12 px-6 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-8">RECENT CLICKS 📷</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {["Science Fair", "International Day", "Art Showcase"].map((title, i) => (
            <div key={i} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
              <div className="w-full h-40 bg-gray-300 rounded mb-4"></div>
              <p className="text-blue-900 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;