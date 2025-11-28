import React, { useEffect, useRef, useState } from "react";
import school from "../assets/school.png";
import principalImage from "../assets/principal.jpg";
import Footer from "./Footer";
import Header from "./Header";
import { supabase } from '../config/supabaseClient';
import Loader from "./Loader";
import School from "../assets/school.png";
import textSvg from "../assets/text-pattern.svg";
import { Link } from "react-router-dom";
import Poster from "../assets/poster.png"

// Scroll animation hook
const POSTER_SHOWN_KEY = 'posterShown';
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

  const initialShowPoster = sessionStorage.getItem(POSTER_SHOWN_KEY) === null;
  const [showPoster, setShowPoster] = useState(initialShowPoster);

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
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    };

    getHighlights();
  }, []);

  // --- Animation Hooks ---
  const heroRef = useScrollAnimation("left"); // Already applied to the Hero section content (not the whole section, but that's fine for the example)
  const activitiesRef = useScrollAnimation("right"); // Applied to the first Activities section
  const aboutRef = useScrollAnimation("left"); // Applied to the About Us section
  const leadershipRef = useScrollAnimation("right"); // Applied to the Leadership Speaks section

  // NEW HOOK: For the second Global Activities section
  const globalActivities2Ref = useScrollAnimation("left"); 
  
  // NOTE: highlightsRef is already declared and applied below.
  const highlightsRef = useScrollAnimation("left"); 
  // -----------------------

  useEffect(() => {
        // This runs every time the component mounts (initial load or soft navigation to /)
        
        if (showPoster) {
            // Set the flag in session storage immediately after showing the poster.
            // This flag will persist across soft navigations and reloads.
            sessionStorage.setItem(POSTER_SHOWN_KEY, 'true');
        }
        
    }, [showPoster]); // Dependency array: run when showPoster state changes

    const closePoster = () => {
        // When the user manually closes it, we hide it immediately.
        setShowPoster(false);
        // The sessionStorage flag ensures it won't pop up again even on a soft navigation.
    };

// ... (rest of the code)
  const parallaxRef1 = useRef();
  const parallaxRef2 = useRef();
  const parallaxRef3 = useRef();
  const parallaxRef4 = useRef();
  const parallaxRefMain = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 25;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 25;

      const applyMove = (ref, factorX, factorY) => {
        if (ref.current) {
          ref.current.style.transform = `translate(${moveX * factorX}px, ${moveY * factorY}px)`;
        }
      };

      applyMove(parallaxRef1, 1.2, 1.2); // Book
      applyMove(parallaxRef2, -1.1, -1.1); // Graduation cap
      applyMove(parallaxRef3, 0.8, -1.3); // Pencil
      applyMove(parallaxRef4, -0.9, 0.9); // Globe
      applyMove(parallaxRefMain, 0.4, 0.4); // Main school image
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="homepage bg-gray-50">
      {loading && <Loader />}
      {/* Poster only shows if state is true */}
      {showPoster && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-[9999]">
          
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-[90%] relative animate-fadeIn">
            
            {/* Close Button */}
            <button
              onClick={closePoster}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Poster Image */}
            <img
              src={Poster}
              alt="Poster"
              className="rounded-xl w-full object-cover"
            />
          </div>

        </div>

      )}
      
      <Header />

<section className="
  relative 
  bg-gradient-to-br from-[#F7F5FF] to-[#3c4bcf] 
  text-[#1a1a1a] 
  pt-[100px]     /* mobile */
  md:pt-[160px]  /* tablet */
  lg:pt-[180px]  /* desktop */
  pb-32
">

        {/* Curved SVG Wave */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 220">
          <path fill="#f0eff7ff" d="M0,192L80,181.3C160,171,320,149,480,144C640,139,800,149,960,149.3C1120,149,1280,139,1360,133.3L1440,128V220H0Z"/>
        </svg>


        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">

          {/* Left Content (Applying heroRef here for the main content) */}
          <div ref={heroRef}>
            <span className="bg-yellow-400 text-[#1a1a1a] font-bold px-4 py-1 rounded-full text-sm tracking-wide">
              Since 2008 – Excellence in Education
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4 text-[#10163a]">
              Where Learning Meets<br />
              <span className="text-[#6543ff]">Character & Innovation</span>
            </h1>

            <p className="text-lg mt-4 text-[#2b2b2b] opacity-90">
              A transformative environment nurturing confident, curious and compassionate achievers.
            </p>

            <div className="mt-6 flex gap-4">
              <Link to="/admissions">
                <button className="bg-yellow-400 text-[#10163a] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition">
                  Admissions Open
                </button>
              </Link>

              <Link to="/about-us">
                <button className="border border-[#10163a] text-[#10163a] px-6 py-3 rounded-lg hover:bg-[#10163a] hover:text-white transition">
                  Discover School
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image with Glow (No ref applied here, as heroRef is applied to the left content) */}
          <div className="relative flex justify-center">
            <img
              src={school}
              alt="Campus"
              className="w-72 md:w-[420px] rounded-xl shadow-2xl "
            />
            <div className="absolute -z-10 w-72 md:w-[440px] h-72 md:h-[440px] bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>
          </div>

        </div>
      </section>

      {/* Activities Section (First) - Already had activitiesRef */}
      <section ref={activitiesRef} className="py-20 px-6 md:px-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="relative inline-block text-4xl font-bold text-gray-800">
            Global Activities
            <span className="absolute left-1/2 -bottom-2 w-3/4 h-2 bg-yellow-400 opacity-60 transform -translate-x-1/2"></span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              // New Icon: Innovative Teaching
              icon: "👨‍🏫",
              title: "Innovative Teaching",
              iconColor: "text-purple-600",
              bgColor: "bg-purple-100",
              text: "Academic excellence comes from setting high standards, vigorously pursuing them and nurturing an enthusiasm for learning.",
            },
            {
              // New Icon: Sports Education
              icon: "⚽",
              title: "Sports Education",
              iconColor: "text-green-600",
              bgColor: "bg-green-100",
              text: "Champions aren't made in the gym. Champions are made from something they have deep inside them—a desire, a dream, a vision.",
            },
            {
              // New Icon: Focus on Innovations
              icon: "💡",
              title: "Focus on Innovations",
              iconColor: "text-pink-600",
              bgColor: "bg-pink-100",
              text: "The world’s greatest minds to create a vibrant, engaging and learning environment that builds different skills for the future generations.",
            },
            {
              // New Icon: Well Stocked Library
              icon: "📚",
              title: "Well Stocked Library",
              iconColor: "text-orange-600",
              bgColor: "bg-orange-100",
              text: "Global International School library is a rich treasure trove of encyclopedia, illustrated dictionaries and popular Science books with series such...",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 text-center border-t-4 border-transparent hover:border-blue-500 transition duration-300 transform hover:-translate-y-1"
            >
              {/* Icon Wrapper (Circle background) */}
              <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <div className={`text-3xl ${item.iconColor}`}>{item.icon}</div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section - Already had aboutRef */}
      <section ref={aboutRef} className="relative py-8 px-4 md:px-16 bg-white overflow-hidden">
        {/* Reduced vertical gap for mobile/flex-col layout to gap-6 */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left Side: Images and Decorative Elements */}
            {/* Removed max-h-[350px] for better responsiveness */}
            <div className="relative w-full lg:w-1/2 flex justify-center items-center"> 
                
                {/* Dotted Pattern - Adjusted placement for neater corner alignment */}
                <div className="absolute top-0 left-11 transform -translate-x-10 -translate-y-10 z-0 opacity-80">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="dotPatternAbout" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="2" fill="#3c2684"/> 
                            </pattern>
                        </defs>
                        <rect width="60" height="60" fill="url(#dotPatternAbout)"/>
                    </svg>
                </div>

                {/* Pink Blob (Bottom-Left) - Adjusted bottom position for neatness */}
                <div className="absolute bottom-0 left-0 transform translate-y-1/2 -translate-x-1/4 z-0">
                    <div className="w-32 h-32 bg-pink-500 rounded-full opacity-60" 
                          style={{clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)', transform: 'rotate(45deg)'}}>
                    </div>
                </div>

                {/* Image Grid - Added aspect-square for the smaller images for mobile neateness */}
              <div className="relative z-10 grid grid-cols-2 grid-rows-2 gap-1 w-full max-w-lg h-[350px]">
                      {/* Large Image (Building) - Row 1 & 2, Column 1 */}
                      <img
                        src={School}
                        alt="School Building Exterior"
                        className="col-span-1 row-span-2 w-full h-full object-cover rounded-lg shadow-xl"
                      />

                      {/* Top Right Image - ADDED aspect-square for better proportion */}
                      <img
                        src={School}
                        alt="Students in Classroom"
                        className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg shadow-xl aspect-square"
                      />

                      {/* Bottom Right Image - ADDED aspect-square for better proportion */}
                      <img
                        src={School}
                        alt="Group of Students"
                        className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg shadow-xl aspect-square"
                      />
                </div>
            </div>

            {/* Right Side: Text and Button (Margins are minimized for height reduction) */}
            <div className="w-full lg:w-1/2 text-center lg:text-left pt-6 lg:pt-0">
                {/* Heading margin reduced from mb-4 to mb-3 */}
                <h2 className="text-4xl font-extrabold text-gray-800 mb-3 relative inline-block">
                    About Us
                    
                    {/* SVG positioning remains fixed */}
                   <img 
                        src={textSvg} 
                        alt="Decorative underline graphic"
                        className="absolute left-1/2 top-[100%] -translate-x-1 z-0" 
                        style={{ 
                            width: '120%', 
                            height: 'auto',
                        }}
                    />
                </h2>
                {/* Paragraph margin reduced from mb-4 to mb-3 */}
                <p className="text-gray-700 text-base mb-3 leading-relaxed">
                    Welcome to the **Global International School**. We are a part of **Global Educational Trust**, which has a strong presence on the education map of Kangayam Taluk, Tiruppur. The Trust has been running **Global International School (CBSE)** and **Global Matriculation Higher Secondary School**.
                </p>
                {/* Paragraph margin reduced from mb-6 to mb-4 */}
                <p className="text-gray-700 text-base mb-4 leading-relaxed">
                    We, at Global International School, are committed to **excellence in education** to shape future of our nation.
                </p>
                {/* ... Read More Button ... */}
                <Link to="/about-us">
                    <button className="bg-[#3c2684] text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 text-sm">
                        Read More
                    </button>
                </Link>
            </div>
        </div>
      </section>

      {/* Global Activities Section (Second) - New ref applied here */}
      <section 
        ref={globalActivities2Ref} 
        className="max-w-7xl mx-auto py-4 px-10 mt-16 rounded-2xl border-5 border-pink-700 bg-blue-900 shadow-xl"
      >

        {/* New container for reduced width and rounded border */}
        {/* Heading margin reduced from mb-12 to mb-8 */}
        <h2 className="text-4xl font-bold text-center text-white mb-8">
            🌐 Global Activities
        </h2>
        {/* The grid gap (gap-8) remains the same, but the overall container is tighter */}
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
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <div className={`text-4xl mb-4 ${item.color}`}>{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Speaks Section - Already had leadershipRef */}
      <section ref={leadershipRef} className="py-16 px-6 md:px-16 bg-white">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
    Leadership Speaks
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Correspondent */}
    <div className="bg-[#FFF8E6] p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
      <img
        src={principalImage}
        alt="Correspondent"
        className="w-28 h-28 mx-auto rounded-lg object-cover shadow mb-4"
      />
      <h3 className="text-lg font-bold text-gray-900">Mr</h3>
      <p className="text-sm text-gray-600 mb-3">Correspondent</p>
      <p className="text-gray-700 text-sm mb-4">
        Inspiring smart and fast learners.
      </p>
      <a
  href="/principal-message"
  className="text-red-500 text-sm font-semibold hover:underline"
>
  Read more →
</a>
    </div>

    {/* Secretary */}
    <div className="bg-[#EFFFF6] p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
      <img
        src={principalImage}
        alt="Secretary"
        className="w-28 h-28 mx-auto rounded-lg object-cover shadow mb-4"
      />
      <h3 className="text-lg font-bold text-gray-900">Mr. ___________</h3>
      <p className="text-sm text-gray-600 mb-3">Secretary</p>
      <p className="text-gray-700 text-sm mb-4">
        Supporting academic growth with values.
      </p>
      <a
  href="/secretary-message"
  className="text-red-500 text-sm font-semibold hover:underline"
>
  Read more →
</a>
    </div>

    {/* Principal */}
    <div className="bg-[#F2EEFF] p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
      <img
        src={principalImage}
        alt="Principal"
        className="w-28 h-28 mx-auto rounded-lg object-cover shadow mb-4"
      />
      <h3 className="text-lg font-bold text-gray-900">
        Mr.
      </h3>
      <p className="text-sm text-gray-600 mb-3">Principal</p>
      <p className="text-gray-700 text-sm mb-4">
        Guiding every child's potential.
      </p>
      <a
  href="/correspondent-message"
  className="text-red-500 text-sm font-semibold hover:underline"
>
  Read more →
</a>
    </div>

  </div>
</section>



      {/* Recent Highlights Section - Already had highlightsRef */}
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