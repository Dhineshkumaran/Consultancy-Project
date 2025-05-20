import React, { useEffect, useRef, useState } from 'react';
import { supabase } from '../config/supabaseClient';
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
  const [galleryData, setGalleryData] = useState({
    events: [],
    campus: [],
    activities: [],
    achievements: [],
    others: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch gallery images from Supabase
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const { data, error } = await supabase
          .from('gallery_images')
          .select('file_url, title, category, description, tags');

        if (error) {
          throw new Error(`Error fetching gallery images: ${error.message}`);
        }

        // Organize images by category
        const categorizedData = {
          events: [],
          campus: [],
          activities: [],
          achievements: [],
          others: []
        };

        data.forEach(item => {
          if (categorizedData[item.category.toLowerCase()]) {
            categorizedData[item.category.toLowerCase()].push(item);
          } else {
            categorizedData.others.push(item);
          }
        });

        setGalleryData(categorizedData);
      } catch (err) {
        console.error('Failed to fetch gallery images:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

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

  // Image gallery component
  const ImageGallery = ({ images, title, description }) => {
    const sectionRef = useScrollAnimation('left');
    
    if (images.length === 0) return null;

    return (
      <div className="mb-12" ref={sectionRef}>
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">{title}</h2>
        <p className="text-lg leading-relaxed mb-6">{description}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => {
            const boxRef = useScrollAnimation(index % 2 === 0 ? 'left' : 'right');
            return (
              <div
                key={index}
                ref={boxRef}
                className="h-64 rounded-lg shadow-md overflow-hidden group relative"
              >
                <img 
                  src={image.file_url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{image.description}</p>
                  {image.tags && image.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {image.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-blue-500/80 text-white px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <main className="pt-28 pb-16 px-6 md:px-16 bg-gray-50 font-sans text-gray-800">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-10 border-b pb-4">
            School Gallery
          </h1>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-8">
              <p>Failed to load gallery images. Please try again later.</p>
              <p className="text-sm mt-2">{error}</p>
            </div>
          ) : (
            <>
              <ImageGallery
                images={galleryData.achievements}
                title="Academic & Co-curricular Achievements"
                description="Our students have made us proud through remarkable accomplishments in academics, arts, science fairs, 
                and inter-school competitions."
              />
              
              <ImageGallery
                images={galleryData.events}
                title="Cultural & Annual Events"
                description="We celebrate diversity and creativity through our Annual Day, Cultural Fest, 
                and various special occasions throughout the academic year."
              />
              
              <ImageGallery
                images={galleryData.activities}
                title="Student Activities"
                description="Our students actively participate in a variety of extracurricular activities that 
                foster creativity, teamwork, and leadership skills."
              />
              
              <ImageGallery
                images={galleryData.campus}
                title="Campus Tour"
                description="Explore our beautiful campus facilities that provide an ideal environment for 
                learning and growth."
              />
              
              <ImageGallery
                images={galleryData.others}
                title="More Highlights"
                description="Additional moments captured across various school initiatives and special programs."
              />
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;