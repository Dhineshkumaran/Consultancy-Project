import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { supabase } from '../config/supabaseClient';
import { Loader } from 'lucide-react';

// Scroll animation hook
const useScrollAnimation = (direction = "left") => {
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.remove("opacity-0");
          node.classList.add(direction === "left" ? "slide-in-left" : "slide-in-right");
        }
      },
      { threshold: 0.2 }
    );

    node.classList.add("opacity-0");
    observer.observe(node);

    return () => observer.disconnect();
  }, [direction]);

  return ref;
};

// Inject scroll animation styles once
const injectScrollStyles = () => {
  const style = document.createElement("style");
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
};

// 👇 Child component (safe hook usage)
const CareerCard = ({ job, direction }) => {
  const ref = useScrollAnimation(direction);

  return (
    <div
      ref={ref}
      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
    >
      <h2 className="text-xl font-semibold text-blue-800 mb-2">{job.title}</h2>
      <p className="text-gray-700">{job.description}</p>
    </div>
  );
};

const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    injectScrollStyles();

    const getCareers = async () => {
      try {
        setLoading(true);
        const { data: job_listings, error } = await supabase.from('job_listings').select('*');
        if (error) throw error;
        setCareers(job_listings || []);
      } catch (err) {
        console.error('Error fetching careers:', err);
        setError('Failed to load job listings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getCareers();
  }, []);

  return (
    <>
      <Header />
      <main className="pt-28 pb-16 px-6 md:px-16 bg-gray-50 font-sans text-gray-800">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-10 border-b pb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-center mb-12">
            At Global International School, we're building a team of passionate educators and professionals dedicated to nurturing future leaders.
            Explore opportunities across academic and non-academic domains.
          </p>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader className="animate-spin text-blue-600 mb-4" size={40} />
              <p className="text-gray-600 font-medium">Loading job listings...</p>
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
          ) : careers.length === 0 ? (
            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-8 rounded-lg text-center">
              <p className="font-medium">No job openings available at the moment.</p>
              <p className="mt-2">Please check back later for future opportunities.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {careers.map((job, idx) => (
                <CareerCard key={idx} job={job} direction={idx % 2 === 0 ? 'left' : 'right'} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <p className="text-lg font-semibold mb-4">
              To apply, please send your updated resume and a cover letter to:
            </p>
            <a href="mailto:careers@schoolname.edu.in" className="text-blue-700 font-bold underline">
              careers@schoolname.edu.in
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Careers;