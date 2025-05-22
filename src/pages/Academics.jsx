import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
import { supabase } from '../config/supabaseClient';

// Reusable scroll animation hook
const useScrollAnimation = (direction = 'left') => {
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.remove('opacity-0');
          node.classList.add(direction === 'left' ? 'slide-in-left' : 'slide-in-right');
        }
      },
      { threshold: 0.2 }
    );

    node.classList.add('opacity-0');
    observer.observe(node);

    return () => observer.disconnect();
  }, [direction]);

  return ref;
};

const methodologyData = [
  {
    image_url: "https://xpzpsdyhsukkdhvpxenj.supabase.co/storage/v1/object/public/gallery/images/WhatsApp%20Image%202025-05-22%20at%2016.59.08_1d27a3fa.jpg",
    image_title: "Colloborative Learning"
  },
  {
    image_url: "https://xpzpsdyhsukkdhvpxenj.supabase.co/storage/v1/object/public/gallery/images/WhatsApp%20Image%202025-05-22%20at%2016.59.51_42160972.jpg",
    image_title: "Project based Learning"
  },
  {
    image_url: "https://xpzpsdyhsukkdhvpxenj.supabase.co/storage/v1/object/public/gallery/images/WhatsApp%20Image%202025-05-22%20at%2017.00.46_735970d8.jpg",
    image_title: "Activity based Learning"
  }
]

const Academics = () => {
  const [syllabus, setSyllabus] = useState([]);
  const [loading, setLoading] = useState(true);

  // Inject scroll animation styles once
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes slide-in-left {
        from { transform: translateX(-100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slide-in-right {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      .slide-in-left {
        animation: slide-in-left 0.8s ease-out forwards;
      }
      .slide-in-right {
        animation: slide-in-right 0.8s ease-out forwards;
      }
      .opacity-0 {
        opacity: 0;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const getSyllabus = async () => {
      try {
        setLoading(true);
        const { data: syllabuses, error } = await supabase.from('syllabuses').select('*');
        if (error) throw error;
        setSyllabus(syllabuses || []);
      } catch (error) {
        console.error('Error fetching syllabuses:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    };
    getSyllabus();
  }, []);

  // Section refs for animation
  const curriculumRef = useScrollAnimation('left');
  const departmentsRef = useScrollAnimation('right');
  const methodologyRef = useScrollAnimation('left');
  const achievementsRef = useScrollAnimation('right');
  const syllabusRef = useScrollAnimation('left');

  return (
    <>
      <Header />
      <main className="pt-28 pb-16 px-6 md:px-16 bg-gray-50 font-sans text-gray-800">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-10 border-b pb-4">
            Academics
          </h1>

          {/* Curriculum Overview */}
          <div ref={curriculumRef} className="bg-white rounded-xl shadow-md p-8 mb-12 transition-all duration-700">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Curriculum Overview</h2>
            <p className="text-lg leading-relaxed">
              Our school follows a comprehensive curriculum aligned with national standards, focusing on academic excellence,
              critical thinking, and holistic development. We integrate co-curricular and extra-curricular programs to ensure students
              receive a well-rounded education.
            </p>
          </div>

          {/* Departments */}
          <div ref={departmentsRef} className="bg-white rounded-xl shadow-md p-8 mb-12 transition-all duration-700">
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
          <div ref={methodologyRef} className="bg-white rounded-xl shadow-md p-8 mb-12 transition-all duration-700">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Teaching Methodology</h2>
            <p className="text-lg leading-relaxed mb-4">
              We employ a learner-centered approach, combining traditional classroom teaching with digital learning tools,
              group activities, and experiential learning. Our experienced faculty uses innovative techniques to cater to
              various learning styles.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {methodologyData.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-gray-200 h-40 rounded-lg shadow hover:shadow-lg transition overflow-hidden group"
                >
                  <img
                    src={item.image_url}
                    alt={item.image_title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-white bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-lg font-semibold text-blue-800 px-4 text-center">{item.image_title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <div ref={achievementsRef} className="bg-white rounded-xl shadow-md p-8 mb-12 transition-all duration-700">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Academic Achievements</h2>
            <p className="text-lg leading-relaxed">
              Our students consistently excel in board examinations and competitive tests. Many have been awarded scholarships,
              participated in international olympiads, and have gone on to pursue higher education at prestigious institutions globally.
            </p>
          </div>

          {/* Syllabus Downloads */}
          <div ref={syllabusRef} className="bg-white rounded-xl shadow-md p-8 mb-12 transition-all duration-700">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Download Syllabus</h2>
            <p className="text-lg leading-relaxed mb-4">
              Download the syllabus for your respective standard:
            </p>

            {loading ? (
              <Loader />
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