import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';

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

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  // Inject animation styles once
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

  const sectionRefs = [useScrollAnimation('left'), useScrollAnimation('right')];
  const missionRef = useScrollAnimation('left');
  const visionRef = useScrollAnimation('right');
  const valuesRef = useScrollAnimation('left');

  const sectionContent = [
    {
      title: 'Who We Are',
      text: 'At Global International School, we believe that education is the foundation for building a better future. Since our inception, we have been committed to fostering a learning environment that nurtures academic excellence, character development, and global citizenship.',
      image: {
        file_url: "https://xpzpsdyhsukkdhvpxenj.supabase.co/storage/v1/object/public/gallery/images/1746602683501-ofhiclbshqe.jpg",
        title: "Quality Environment"
      }
    },
    {
      title: 'What We Offer',
      text: 'Our school offers a dynamic and inclusive curriculum tailored to empower students with the knowledge, skills, and values needed to succeed in an ever-changing world. With a team of dedicated educators, state-of-the-art facilities, and a focus on holistic development, we strive to make learning an inspiring and transformative experience.',
      image: {
        file_url: "https://xpzpsdyhsukkdhvpxenj.supabase.co/storage/v1/object/public/gallery/images/1746602683501-ofhiclbshqe.jpg",
        title: "Smart Classes"
      }
    }
  ];

  return (
    <>
      {loading && <Loader />}
      
      <Header />
      <section className="max-w-6xl mx-auto font-sans pt-32 px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 border-b-2 border-gray-200 pb-4 mb-14">
          About Our School
        </h1>

        {sectionContent.map((item, index) => (
          <div
            key={index}
            ref={sectionRefs[index]}
            className={`flex flex-wrap items-center justify-between gap-8 bg-white p-8 mb-10 rounded-xl shadow-md hover:shadow-xl transition duration-300 ${
              index % 2 === 1 ? 'flex-row-reverse' : ''
            }`}
          >
            <div className="w-[300px] h-[180px] rounded-lg overflow-hidden flex-shrink-0 relative">
              {item.image ? (
                <>
                  <img 
                    src={item.image.file_url} 
                    alt={item.image.title} 
                    className="w-full h-full object-cover"
                  />
                </>
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg font-semibold">
                  {error ? "Image not available" : "Loading..."}
                </div>
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">{item.title}</h2>
              <p className="text-lg leading-relaxed text-gray-700">{item.text}</p>
            </div>
          </div>
        ))}

        <div
          ref={missionRef}
          className="bg-white p-8 rounded-xl shadow-md mb-10 transition-all duration-700"
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            To provide a nurturing educational environment that encourages creativity, critical thinking, and lifelong learning.
            We are dedicated to developing students into confident, responsible, and compassionate individuals ready to contribute to society.
          </p>
        </div>

        <div
          ref={visionRef}
          className="bg-white p-8 rounded-xl shadow-md mb-10 transition-all duration-700"
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Our Vision</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            To be a leading educational institution recognized globally for excellence in teaching, innovation, and leadership.
            We envision a world where every student has the opportunity to achieve their fullest potential.
          </p>
        </div>

        <div
          ref={valuesRef}
          className="bg-white p-8 rounded-xl shadow-md mb-10 transition-all duration-700"
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Our Values</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700">
            <li><strong>Integrity:</strong> We uphold the highest standards of honesty and ethics.</li>
            <li><strong>Excellence:</strong> We strive for continuous improvement and outstanding performance in all we do.</li>
            <li><strong>Respect:</strong> We foster a culture of respect and empathy toward others.</li>
            <li><strong>Innovation:</strong> We encourage curiosity, creativity, and forward thinking.</li>
            <li><strong>Community:</strong> We build strong relationships and promote active citizenship.</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;