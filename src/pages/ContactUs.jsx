import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

// Reusable animation hook
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

const ContactUs = () => {
  // Inject animation styles once
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
  const infoRef = useScrollAnimation('right');
  const formRef = useScrollAnimation('left');

  return (
    <>
      <Header />
      <main className="pt-28 pb-16 px-6 md:px-16 bg-gray-50 font-sans text-gray-800">
        <section className="max-w-4xl mx-auto">
          <h1
            ref={headingRef}
            className="text-4xl font-bold text-center text-blue-900 mb-10 border-b pb-4"
          >
            Contact Us
          </h1>

          {/* School Contact Information */}
          <div
            ref={infoRef}
            className="bg-white p-6 rounded-lg shadow-md mb-10"
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">School Contact Information</h2>
            <p className="mb-2"><strong>Address:</strong> Dharapuram Road, Kangayam, A.P. Pudur, Kangayam Taluk, Tiruppur – 638701</p>
            <p className="mb-2"><strong>Phone:</strong> +91 98765 43210</p>
            <p className="mb-2"><strong>Email:</strong> info@schoolname.edu.in</p>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Enquire About Our School</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Ask us about admissions, infrastructure, or anything else..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;