import React from "react";
import school from '../assets/school.png';
import Footer from "./Footer";
import Header from "./Header";

const HomePage = () => {
  return (
    <div className="homepage bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gray-100 px-6 md:px-16 py-12 pt-32">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Global Matric Higher Secondary School
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              🎓 “Education is not the filling of a pail, but the lighting of a fire.” <br />
              At <span className="font-semibold text-blue-800">GMHSS</span>, we ignite 🔥 curiosity, foster 💡 critical thinking, and empower students to shine 🌟 with knowledge and compassion around the globe 🌍.
            </p>
            
          </div>
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <div className="relative group">
              <div className=""></div>
              <img
                src={school}
                alt="Campus Building"
                className="relative w-full max-w-xl mx-auto rounded-lg transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-white via-blue-50 to-white">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          🌐 Global Activities
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="text-4xl mb-4 text-blue-600">🔄</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Virtual Exchange</h3>
            <p className="text-gray-600">Students collaborate with international peers through video conferences and shared digital classrooms.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="text-4xl mb-4 text-green-600">🌍</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Global Projects</h3>
            <p className="text-gray-600">Cross-border initiatives encourage problem-solving and innovation on real-world global challenges.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="text-4xl mb-4 text-purple-600">🎭</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Cultural Events</h3>
            <p className="text-gray-600">Events that celebrate global diversity through arts, food festivals, music, and performances.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">About Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-blue-800">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Global Institute of Excellence, our mission is to foster holistic development, cultivate innovation,
              and create a collaborative environment for students and educators worldwide.
              We strive to prepare our students not only academically, but also socially and ethically for the global stage.
            </p>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-blue-800 text-center md:text-left">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a global leader in education, inspiring innovation and empowering students to thrive in an interconnected world.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Leadership Speaks</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-t-4 border-yellow-400">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h.01M12 7h.01M16 7h.01M12 19l-7-7h14l-7 7z" />
              </svg>
              <h4 className="text-xl font-semibold text-yellow-700">Principal's Message</h4>
            </div>
            <p className="text-gray-700 text-sm">"We believe in nurturing future leaders through a holistic approach to education."</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-t-4 border-blue-400">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
              </svg>
              <h4 className="text-xl font-semibold text-blue-700">Dean's Message</h4>
            </div>
            <p className="text-gray-700 text-sm">"Collaboration, curiosity, and commitment are at the heart of our academic spirit."</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-t-4 border-purple-400">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h4 className="text-xl font-semibold text-purple-700">Director's Message</h4>
            </div>
            <p className="text-gray-700 text-sm">"Our goal is to build bridges between students globally through meaningful interactions."</p>
          </div>
        </div>
      </section>

      {/* Recent Highlights Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Recent Highlights</h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {["Science Fair", "International Day", "Art Showcase"].map((title, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-500">Image</span>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;