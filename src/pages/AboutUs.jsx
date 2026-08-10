import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const sectionContent = [
    {
      title: 'Who We Are',
      text: 'At Global Matriculation Higher Secondary School, we believe that education is the foundation for building a better future. Since our inception, we have been committed to fostering a learning environment that nurtures academic excellence, character development, and global citizenship.',
      image: {
        file_url: "https://xpzpsdyhsukkdhvpxenj.supabase.co/storage/v1/object/public/gallery/images/WhatsApp%20Image%202025-05-22%20at%2017.15.47_b26fb309.jpg",
        title: "Who we are"
      }
    },
    {
      title: 'What We Offer',
      text: 'Our school offers a dynamic and inclusive curriculum tailored to empower students with the knowledge, skills, and values needed to succeed in an ever-changing world. With a team of dedicated educators, state-of-the-art facilities, and a focus on holistic development, we strive to make learning an inspiring and transformative experience.',
      image: {
        file_url: "https://xpzpsdyhsukkdhvpxenj.supabase.co/storage/v1/object/public/gallery/images/WhatsApp%20Image%202025-05-22%20at%2017.17.29_9d840399.jpg",
        title: "What we offer"
      }
    }
  ];

  return (
    <>
      {loading && <Loader />}

      <Header />
      
      <section className="max-w-6xl mx-auto font-sans pt-40 px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 border-b-2 border-gray-200 pb-4 mb-14">
          About Our School
        </h1>

        {sectionContent.map((item, index) => (
          <div
            key={index}
            className={`flex flex-wrap items-center justify-between gap-8 bg-white p-8 mb-10 rounded-xl shadow-md hover:shadow-xl transition duration-300 ${
              index % 2 === 1 ? 'flex-row-reverse' : ''
            }`}
          >
            <div className="w-full sm:w-[300px] h-[200px] rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={item.image.file_url}
                alt={item.image.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">{item.title}</h2>
              <p className="text-lg leading-relaxed text-gray-700">{item.text}</p>
            </div>
          </div>
        ))}

        <div className="bg-white p-8 rounded-xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            To provide a nurturing educational environment that encourages creativity, critical thinking, and lifelong learning.
            We are dedicated to developing students into confident, responsible, and compassionate individuals ready to contribute to society.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Our Vision</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            To be a leading educational institution recognized globally for excellence in teaching, innovation, and leadership.
            We envision a world where every student has the opportunity to achieve their fullest potential.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md mb-10">
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
