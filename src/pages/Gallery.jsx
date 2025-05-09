import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

// Scroll animation hook
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

const Gallery = () => {
  // Inject animation CSS
  useEffect(() => {
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

  const headingRef = useScrollAnimation('left');
  const achievementsRef = useScrollAnimation('right');
  const eventsRef = useScrollAnimation('left');
  const sportsRef = useScrollAnimation('right');

  const renderBoxes = (items) =>
    items.map((title, index) => {
      const boxRef = useScrollAnimation(index % 2 === 0 ? 'left' : 'right');
      return (
        <div
          key={index}
          ref={boxRef}
          className="h-48 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-600 text-center"
        >
          {title}
        </div>
      );
    });

  return (
    <>
      <Header />
      <main className="pt-28 pb-16 px-6 md:px-16 bg-gray-50 font-sans text-gray-800">
        <section className="max-w-6xl mx-auto">
          <h1
            className="text-4xl font-bold text-center text-blue-900 mb-10 border-b pb-4"
          >
            School Gallery
          </h1>

          {/* Achievements */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Academic & Co-curricular Achievements</h2>
            <p className="text-lg leading-relaxed mb-6">
              Our students have made us proud through remarkable accomplishments in academics, arts, science fairs, and inter-school competitions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {renderBoxes([
                'Topper Awards',
                'Science Exhibition',
                'Olympiad Medals',
                'Best Innovation Award',
                'Inter-school Debate Winner',
                'Community Service Leader',
              ])}
            </div>
          </div>

          {/* Events */}
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Cultural & Annual Events</h2>
          <p className="text-lg leading-relaxed mb-6">
            We celebrate diversity and creativity through our Annual Day, Cultural Fest, and Independence Day functions.
          </p>
          <div ref={eventsRef} className="mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {renderBoxes(['Annual Day', 'Cultural Fest', 'Patriotic Dance'])}
            </div>
          </div>

          {/* Sports */}
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Sports & Physical Education</h2>
          <p className="text-lg leading-relaxed mb-6">
            Sports Day and regular fitness activities play a vital role in our students’ development. Here are glimpses of their active participation.
          </p>
          <div ref={sportsRef} className="mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {renderBoxes(['Sports Day Relay', 'Yoga Day', 'March Past'])}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;