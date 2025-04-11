import React from 'react';

import Header from './Header';
import Footer from './Footer';


const AlumniPanel = () => {
  return (
    <>
      <Header />
      <main className="pt-28 pb-16 px-6 md:px-16 bg-gray-50 font-sans text-gray-800">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-10 border-b pb-4">Alumni Panel</h1>

          <p className="text-lg text-center mb-10">
            Connect with our distinguished alumni to gain career guidance, academic insights, and networking opportunities.
            Build your future by learning from their experience.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Aarav Kumar', title: 'Software Engineer at Google', year: 'Batch 2018' },
              { name: 'Meera Sharma', title: 'Research Scholar at Oxford', year: 'Batch 2016' },
              { name: 'Rohan Das', title: 'Entrepreneur & Startup Mentor', year: 'Batch 2015' },
              { name: 'Anjali Verma', title: 'UI/UX Designer at Adobe', year: 'Batch 2019' },
              { name: 'Yash Patel', title: 'AI Researcher at MIT', year: 'Batch 2017' },
              { name: 'Sneha Nair', title: 'Data Analyst at Microsoft', year: 'Batch 2020' }
            ].map((alum, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-800 mb-1">{alum.name}</h3>
                <p className="text-gray-600 mb-1">{alum.title}</p>
                <p className="text-sm text-gray-400 mb-4">{alum.year}</p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/sample-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7 0-1 .8-1.7 1.7-1.7 1 0 1.7.8 1.7 1.7 0 1-.7 1.7-1.7 1.7zm13.5 11.3h-3v-5.5c0-1.3 0-3-1.8-3s-2 1.4-2 2.9v5.6h-3v-10h2.9v1.4h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.6v5.7z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:alumni@schoolname.edu.in"
                    className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                    aria-label="Email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M12 13.5l8-6v11.5h-16v-11.5l8 6zm0-2.2l-8-6h16l-8 6z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AlumniPanel;
