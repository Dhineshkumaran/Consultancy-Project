import {React, useState, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import { supabase } from '../config/supabaseClient';

const Academics = () => {
  const [syllabus, setSyllabus] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getSyllabus = async () => {
      try {
        setLoading(true);
        const { data: syllabuses, error } = await supabase
          .from('syllabuses')
          .select('*');
        
        if (error) throw error;
        
        console.log(syllabuses);
        setSyllabus(syllabuses || []);
      } catch (error) {
        console.error('Error fetching syllabuses:', error);
      } finally {
        setLoading(false);
      }
    };
    getSyllabus();
  }, []); // Add empty dependency array to prevent infinite loop

  return (
    <>
      <Header />
      <main className="pt-28 pb-16 px-6 md:px-16 bg-gray-50 font-sans text-gray-800">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-10 border-b pb-4">
            Academics
          </h1>

          {/* Curriculum Overview */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Curriculum Overview</h2>
            <p className="text-lg leading-relaxed">
              Our school follows a comprehensive curriculum aligned with national standards, focusing on academic excellence, critical thinking, and holistic development. We integrate co-curricular and extra-curricular programs to ensure students receive a well-rounded education.
            </p>
          </div>

          {/* Departments */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Departments</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed">
              <li>Science & Mathematics</li>
              <li>Languages & Literature</li>
              <li>Social Sciences</li>
              <li>Computer Science & Technology</li>
              <li>Arts, Music & Physical Education</li>
            </ul>
          </div>

          {/* Teaching Methodology */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Teaching Methodology</h2>
            <p className="text-lg leading-relaxed mb-4">
              We employ a learner-centered approach, combining traditional classroom teaching with digital learning tools, group activities, and experiential learning. Our experienced faculty uses innovative techniques to cater to various learning styles.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-200 h-40 flex items-center justify-center rounded-lg text-gray-600 font-semibold shadow hover:shadow-lg transition">
                Interactive Classrooms
              </div>
              <div className="bg-gray-200 h-40 flex items-center justify-center rounded-lg text-gray-600 font-semibold shadow hover:shadow-lg transition">
                Hands-on Labs
              </div>
              <div className="bg-gray-200 h-40 flex items-center justify-center rounded-lg text-gray-600 font-semibold shadow hover:shadow-lg transition">
                Digital Resources
              </div>
            </div>
          </div>

          {/* Academic Achievements */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Academic Achievements</h2>
            <p className="text-lg leading-relaxed">
              Our students consistently excel in board examinations and competitive tests. Many have been awarded scholarships, participated in international olympiads, and have gone on to pursue higher education at prestigious institutions globally.
            </p>
          </div>

          {/* Syllabus Downloads */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Download Syllabus</h2>
            <p className="text-lg leading-relaxed mb-4">
              Download the syllabus for your respective standard:
            </p>
            
            {loading ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-800 animate-spin"></div>
                <p className="mt-4 text-blue-800 font-medium">Loading syllabuses...</p>
              </div>
            ) : syllabus.length > 0 ? (
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                {syllabus.map((data, index) => (
                  <a
                    key={index}
                    href={data.file_url}
                    download
                    className="bg-blue-100 hover:bg-blue-200 transition text-blue-800 font-medium px-6 py-4 rounded-lg shadow text-center"
                  >
                    Download Class {data.class} Syllabus
                  </a>
                ))}
              </div>
            ) : (
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <p className="text-gray-600">No syllabus files available at the moment.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Academics;