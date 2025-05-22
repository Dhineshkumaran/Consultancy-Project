import React, { useEffect, useRef, useState } from "react";
import school from "../assets/school.png";
import Footer from "./Footer";
import Header from "./Header";
import { supabase } from '../config/supabaseClient';
import Loader from "./Loader";

// Scroll animation hook
const useScrollAnimation = (direction = "left") => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0");
          el.classList.add(direction === "left" ? "slide-in-left" : "slide-in-right");
        }
      },
      { threshold: 0.15 }
    );

    el.classList.add("opacity-0");
    observer.observe(el);

    return () => observer.disconnect();
  }, [direction]);

  return ref;
};

const HomePage = () => {
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slide-in-left {
        from { transform: translateX(-80px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slide-in-right {
        from { transform: translateX(80px); opacity: 0; }
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
    const getHighlights = async () => {
      try {
        setLoading(true);
        const { data: highlights, error } = await supabase.from('gallery_images').select('*').order('created_at', {ascending: false}).limit(3);
        if (error) throw error;
        setHighlights(highlights || []);
      } catch (err) {
        console.error('Error fetching highlights:', err);
        setError('Failed to load gallery images. Please try again later.');
      } finally {
        // Add a slight delay to make loader visible even on fast connections
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    };

    getHighlights();
  }, []);

  const heroRef = useScrollAnimation("left");
  const activitiesRef = useScrollAnimation("right");
  const aboutRef = useScrollAnimation("left");
  const leadershipRef = useScrollAnimation("right");
  const highlightsRef = useScrollAnimation("left");

  return (
    <div className="homepage bg-gray-50">
      {loading && <Loader />}
      
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center bg-gray-100 px-6 md:px-16 py-12 pt-32">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Global Matric Higher Secondary School
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              🎓 "Education is not the filling of a pail, but the lighting of a fire." <br />
              At <span className="font-semibold text-blue-800">GMHSS</span>, we ignite 🔥 curiosity, foster 💡 critical thinking, and empower students to shine 🌟 with knowledge and compassion around the globe 🌍.
            </p>
          </div>
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <div className="relative group">
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
      <section ref={activitiesRef} className="py-16 px-6 md:px-20 bg-gradient-to-r from-white via-blue-50 to-white">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          🌐 Global Activities
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {[
            {
              icon: "🔄",
              title: "Virtual Exchange",
              color: "text-blue-600",
              text: "Students collaborate with international peers through video conferences and shared digital classrooms.",
            },
            {
              icon: "🌍",
              title: "Global Projects",
              color: "text-green-600",
              text: "Cross-border initiatives encourage problem-solving and innovation on real-world global challenges.",
            },
            {
              icon: "🎭",
              title: "Cultural Events",
              color: "text-purple-600",
              text: "Events that celebrate global diversity through arts, food festivals, music, and performances.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <div className={`text-4xl mb-4 ${item.color}`}>{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} className="py-16 px-6 md:px-20 bg-white">
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
      <section ref={leadershipRef} className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Leadership Speaks</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {[
            {
              title: "Principal's Message",
              text: "We believe in nurturing future leaders through a holistic approach to education.",
              border: "border-yellow-400",
              bg: "bg-yellow-50",
              iconColor: "text-yellow-500",
              iconPath: "M8 7h.01M12 7h.01M16 7h.01M12 19l-7-7h14l-7 7z",
            },
            {
              title: "Dean's Message",
              text: "Collaboration, curiosity, and commitment are at the heart of our academic spirit.",
              border: "border-blue-400",
              bg: "bg-blue-50",
              iconColor: "text-blue-500",
              iconPath: "M3 7h18M3 12h18M3 17h18",
            },
            {
              title: "Director's Message",
              text: "Our goal is to build bridges between students globally through meaningful interactions.",
              border: "border-purple-400",
              bg: "bg-purple-50",
              iconColor: "text-purple-500",
              iconPath: "M5 13l4 4L19 7",
            },
          ].map((msg, idx) => (
            <div key={idx} className={`${msg.bg} p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-t-4 ${msg.border}`}>
              <div className="flex items-center mb-4">
                <svg className={`w-8 h-8 ${msg.iconColor} mr-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={msg.iconPath} />
                </svg>
                <h4 className={`text-xl font-semibold ${msg.iconColor.replace("text-", "text-")}`}>{msg.title}</h4>
              </div>
              <p className="text-gray-700 text-sm">"{msg.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Highlights Section */}
      <section ref={highlightsRef} className="py-20 px-6 md:px-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Recent Highlights</h2>
        {error ? (
          <div className="text-center p-6 bg-red-50 rounded-lg text-red-600">
            {error}
          </div>
        ) : (
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
            {highlights.map((image, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
                <div className="w-full h-64 bg-gray-300 relative">
                  <img 
                    src={image.file_url} 
                    alt={image.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-white bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-lg font-semibold text-blue-800 px-4 text-center">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Show loading state while fetching highlights */}
        {loading && !error && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-600"></div>
          </div>
        )}

        {/* Show empty state if no highlights */}
        {!loading && !error && highlights.length === 0 && (
          <div className="text-center p-6 bg-blue-50 rounded-lg text-blue-600">
            No highlights available at the moment.
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;