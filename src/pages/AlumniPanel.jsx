import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../config/supabaseClient';


import { Loader, CheckCircle, AlertCircle } from 'lucide-react';

// Reusable scroll animation hook
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

// Inject CSS animations once
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

// Child component
const AlumniCard = ({ alum, direction }) => {
  const ref = useScrollAnimation(direction);

  return (
    <div ref={ref} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-4">
        {alum.photo_url ? (
          <img
            src={alum.photo_url}
            alt={alum.name}
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
        ) : (
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-1">{alum.name}</h3>
          <p className="text-gray-600 mb-1">{alum.position}</p>
          <p className="text-sm text-gray-400">Batch {alum.batch}</p>
        </div>
      </div>

      {alum.bio && (
        <p className="text-gray-700 text-sm my-3 line-clamp-3">{alum.bio}</p>
      )}

      <div className="flex space-x-4 mt-4">
        {alum.linkedin_url && (
          <a
            href={alum.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7 0-1 .8-1.7 1.7-1.7 1 0 1.7.8 1.7 1.7 0 1-.7 1.7-1.7 1.7zm13.5 11.3h-3v-5.5c0-1.3 0-3-1.8-3s-2 1.4-2 2.9v5.6h-3v-10h2.9v1.4h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.6v5.7z"/>
            </svg>
          </a>
        )}
        {alum.email && (
          <a
            href={`mailto:${alum.email}`}
            className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M12 13.5l8-6v11.5h-16v-11.5l8 6zm0-2.2l-8-6h16l-8 6z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

// Alumni Join Request Form Component
const JoinRequestForm = () => {
  const formRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    batch: '',
    position: '',
    bio: '',
    linkedin_url: '',
    photo_url: ''
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });

    try {
      // Insert into alumni_requests table instead of alumni
      const { error } = await supabase
        .from('alumni_requests')
        .insert([formData]);

      if (error) throw error;

      setFormStatus({ loading: false, success: true, error: null });
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        batch: '',
        position: '',
        bio: '',
        linkedin_url: '',
        photo_url: ''
      });
    } catch (err) {
      console.error('Error submitting alumni request:', err);
      setFormStatus({
        loading: false, 
        success: false, 
        error: 'Failed to submit your request. Please try again later.'
      });
    }
  };

  return (
    <div ref={formRef} className="bg-white p-8 rounded-xl shadow-lg mt-16">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Request to Join Alumni Panel</h2>
      
      {formStatus.success ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <CheckCircle className="mx-auto text-green-600 mb-3" size={40} />
          <h3 className="text-xl font-medium text-green-800 mb-2">Request Submitted!</h3>
          <p className="text-green-700">
            Thank you for your interest in joining our alumni panel. We'll review your request and get back to you soon.
          </p>
          <button 
            onClick={() => setFormStatus({ loading: false, success: false, error: null })}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {formStatus.error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg flex items-start">
              <AlertCircle className="flex-shrink-0 mr-2 mt-0.5" size={18} />
              <p>{formStatus.error}</p>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="batch" className="block text-sm font-medium text-gray-700 mb-1">Graduation Batch *</label>
              <input
                id="batch"
                name="batch"
                type="text"
                required
                placeholder="e.g. 2022"
                value={formData.batch}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Current Position *</label>
              <input
                id="position"
                name="position"
                type="text"
                required
                placeholder="e.g. Software Engineer at Google"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Short Bio *</label>
            <textarea
              id="bio"
              name="bio"
              rows="3"
              required
              value={formData.bio}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Share a brief summary of your professional journey and expertise"
            ></textarea>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="linkedin_url" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile URL</label>
              <input
                id="linkedin_url"
                name="linkedin_url"
                type="url"
                value={formData.linkedin_url}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://linkedin.com/in/yourusername"
              />
            </div>
            
            <div>
              <label htmlFor="photo_url" className="block text-sm font-medium text-gray-700 mb-1">Profile Photo URL</label>
              <input
                id="photo_url"
                name="photo_url"
                type="url"
                value={formData.photo_url}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://example.com/your-photo.jpg"
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={formStatus.loading}
              className={`px-6 py-3 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ${
                formStatus.loading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {formStatus.loading ? (
                <span className="flex items-center">
                  <Loader className="animate-spin -ml-1 mr-2 h-4 w-4" />
                  Submitting...
                </span>
              ) : (
                'Submit Request'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const AlumniPanel = () => {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showJoinForm, setShowJoinForm] = useState(false);

  useEffect(() => {
    injectScrollStyles(); // Add animations on load

    const fetchAlumni = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('alumni')
          .select('*')
          .order('batch', { ascending: false });

        if (error) throw error;

        setAlumni(data || []);
      } catch (err) {
        console.error('Error fetching alumni:', err);
        setError('Failed to load alumni details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  const toggleJoinForm = () => {
    setShowJoinForm(!showJoinForm);
    
    // Scroll to the form when opened
    if (!showJoinForm) {
      setTimeout(() => {
        document.getElementById('join-form-section')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <><main className="pt-40 pb-16 px-6 md:px-16 bg-gray-50 font-sans text-gray-800">
        <section className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <h1 className="text-4xl font-bold text-blue-900 pb-2">Alumni Panel</h1>
            <button
              onClick={toggleJoinForm}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg shadow transition font-medium flex items-center justify-center"
            >
              {showJoinForm ? 'Hide Request Form' : 'Join Alumni Panel'}
            </button>
          </div>

          <p className="text-lg text-center mb-10 border-b pb-4">
            Connect with our distinguished alumni to gain career guidance, academic insights, and networking opportunities.
            Build your future by learning from their experience.
          </p>

          {showJoinForm && (
            <div id="join-form-section">
              <JoinRequestForm />
            </div>
          )}

          <h2 className="text-2xl font-bold text-blue-900 mt-16 mb-8">Current Alumni Members</h2>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader className="animate-spin text-blue-600 mb-4" size={40} />
              <p className="text-gray-600 font-medium">Loading alumni profiles...</p>
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
          ) : alumni.length === 0 ? (
            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-8 rounded-lg text-center">
              <p className="font-medium">No alumni profiles available at the moment.</p>
              <p className="mt-2">Please check back later for updates.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {alumni.map((alum, index) => (
                <AlumniCard
                  key={index}
                  alum={alum}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                />
              ))}
            </div>
          )}
        </section>
      </main></>
  );
};

export default AlumniPanel;