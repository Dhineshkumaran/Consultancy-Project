import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';
import Header from './Header';
import Footer from './Footer';
import { Loader } from 'lucide-react';

const AlumniPanel = () => {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('alumni')
          .select('*')
          .order('batch', { ascending: false });
        
        if (error) {
          throw error;
        }
        
        setAlumni(data || []);
      } catch (err) {
        console.error('Error fetching alumni:', err);
        setError('Failed to load alumni details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchAlumni();
  }, []);

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

          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader className="animate-spin text-blue-600 mb-4" size={40} />
              <p className="text-gray-600 font-medium">Loading alumni profiles...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-8 rounded-lg text-center">
              <p className="font-medium">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Try Again
              </button>
            </div>
          ) : alumni.length === 0 ? (
            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-8 rounded-lg text-center">
              <p className="font-medium">No alumni profiles available at the moment.</p>
              <p className="mt-2">Please check back later for updates.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {alumni.map((alum, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                  <div className="flex items-center mb-4">
                    {alum.photo_url ? (
                      <img 
                        src={alum.photo_url} 
                        alt={alum.name} 
                        className="w-16 h-16 object-cover rounded-full mr-4"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-blue-800 mb-1">{alum.name}</h3>
                      <p className="text-gray-600 mb-1">{alum.position}</p>
                      <p className="text-sm text-gray-400">Batch {alum.batch}</p>
                    </div>
                  </div>
                  
                  {alum.bio && (
                    <p className="text-gray-700 text-sm my-3 line-clamp-3">{alum.bio}</p>
                  )}
                  
                  <div className="flex space-x-4 mt-4">
                    {alum.linkedin_url && (
                      <a
                        href={alum.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition"
                        aria-label="LinkedIn"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                          <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7 0-1 .8-1.7 1.7-1.7 1 0 1.7.8 1.7 1.7 0 1-.7 1.7-1.7 1.7zm13.5 11.3h-3v-5.5c0-1.3 0-3-1.8-3s-2 1.4-2 2.9v5.6h-3v-10h2.9v1.4h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.6v5.7z"/>
                        </svg>
                      </a>
                    )}
                    {alum.email && (
                      <a
                        href={`mailto:${alum.email}`}
                        className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
                        aria-label="Email"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                          <path d="M12 13.5l8-6v11.5h-16v-11.5l8 6zm0-2.2l-8-6h16l-8 6z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AlumniPanel;