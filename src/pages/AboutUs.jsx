import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-50 text-gray-800 font-sans pt-28 px-6 md:px-16 pb-16">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">About Our School</h1>
          <p className="text-lg leading-relaxed mb-6">
            At <strong>Global International School</strong>, we believe that education is the foundation for building a better future.
            Since our inception, we have been committed to fostering a learning environment that nurtures academic excellence,
            character development, and global citizenship.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Our school offers a dynamic and inclusive curriculum tailored to empower students with the knowledge, skills, and values
            needed to succeed in an ever-changing world. With a team of dedicated educators, state-of-the-art facilities, and a focus on holistic development,
            we strive to make learning an inspiring and transformative experience.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-3">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-6">
            To provide a nurturing educational environment that encourages creativity, critical thinking, and lifelong learning. We are dedicated
            to developing students into confident, responsible, and compassionate individuals ready to contribute to society.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-3">Our Vision</h2>
          <p className="text-lg leading-relaxed mb-6">
            To be a leading educational institution recognized globally for excellence in teaching, innovation, and leadership. We envision a
            world where every student has the opportunity to achieve their fullest potential.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-3">Our Values</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li><strong>Integrity:</strong> We uphold the highest standards of honesty and ethics.</li>
            <li><strong>Excellence:</strong> We strive for continuous improvement and outstanding performance in all we do.</li>
            <li><strong>Respect:</strong> We foster a culture of respect and empathy toward others.</li>
            <li><strong>Innovation:</strong> We encourage curiosity, creativity, and forward thinking.</li>
            <li><strong>Community:</strong> We build strong relationships and promote active citizenship.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
