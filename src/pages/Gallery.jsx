import React from 'react';

import Header from './Header';
import Footer from './Footer';


const Gallery = () => {
  return (
    <>
      <Header />
      <main className="pt-28 pb-16 px-6 md:px-16 bg-gray-50 font-sans text-gray-800">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-10 border-b pb-4">School Gallery</h1>

          {/* Achievements */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Academic & Co-curricular Achievements</h2>
            <p className="text-lg leading-relaxed mb-6">
              Our students have made us proud through remarkable accomplishments in academics, arts, science fairs, and inter-school competitions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="h-48 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600">Topper Awards</div>
              <div className="h-48 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600">Science Exhibition</div>
              <div className="h-48 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600">Olympiad Medals</div>
              <div className="h-48 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600">Best Innovation Award</div>
              <div className="h-48 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600">Inter-school Debate Winner</div>
              <div className="h-48 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600">Community Service Leader</div>
            </div>
          </div>

          {/* Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Cultural & Annual Events</h2>
            <p className="text-lg leading-relaxed mb-6">
              We celebrate diversity and creativity through our Annual Day, Cultural Fest, and Independence Day functions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="h-48 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600">Annual Day</div>
              <div className="h-48 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600">Cultural Fest</div>
              <div className="h-48 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600">Patriotic Dance</div>
            </div>
          </div>

          {/* Sports */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Sports & Physical Education</h2>
            <p className="text-lg leading-relaxed mb-6">
              Sports Day and regular fitness activities play a vital role in our students’ development. Here are glimpses of their active participation.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="h-48 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600">Sports Day Relay</div>
              <div className="h-48 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600">Yoga Day</div>
              <div className="h-48 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600">March Past</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
