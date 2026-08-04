import React, { useState, useEffect, useRef } from "react";


import Loader from "./Loader";

// Hook for scroll-based animation
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

const infrastructureData = [
  {
    text: "Our state-of-the-art science and computer labs provide students with hands-on learning experiences in a safe and well-equipped environment. These labs are designed to foster curiosity, innovation, and practical application of classroom concepts.",
    image_url: "https://xpzpsdyhsukkdhvpxenj.supabase.co/storage/v1/object/public/gallery/images/WhatsApp%20Image%202025-05-22%20at%2016.57.40_a8070b87.jpg",
    image_title: "Computer Labs",
    reverse: false,
  },
  {
    text: "The school library is a hub of knowledge and exploration, offering a wide collection of academic resources, literature, and digital materials. It's a quiet sanctuary where students cultivate reading habits and conduct independent research.",
    image_url: "https://xpzpsdyhsukkdhvpxenj.supabase.co/storage/v1/object/public/gallery/images/WhatsApp%20Image%202025-05-22%20at%2016.54.43_d6dfb951.jpg",
    image_title: "Library",
    reverse: true,
  },
  {
    text: "Our smart classrooms integrate modern teaching aids like interactive whiteboards, projectors, and audio-visual tools to make learning more engaging and impactful. They support a blended approach to education that combines traditional teaching with digital innovation.",
    image_url: "https://xpzpsdyhsukkdhvpxenj.supabase.co/storage/v1/object/public/gallery/images/WhatsApp%20Image%202025-05-22%20at%2016.57.27_a9611ca6.jpg",
    image_title: "Smart Classrooms",
    reverse: false,
  },
  {
    text: "The play area is thoughtfully designed to promote physical development, teamwork, and recreation. Equipped with age-appropriate outdoor play equipment and green spaces, it ensures students enjoy a healthy balance of academics and play.",
    image_url: "https://xpzpsdyhsukkdhvpxenj.supabase.co/storage/v1/object/public/gallery/images/WhatsApp%20Image%202025-05-22%20at%2016.55.10_cc08c3c2.jpg",
    image_title: "Play Ground",
    reverse: true,
  },
];

const Infrastructure = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
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
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div>
      {loading && <Loader />}<main className="pt-32 md:pt-44 pb-16 px-6 md:px-16 bg-gray-50 font-sans text-gray-800">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-10 border-b pb-4">
            Infrastructure
          </h1>

        <p className="max-w-3xl mx-auto text-center text-gray-600 text-lg mb-12">
          We take pride in our modern infrastructure designed to support a holistic educational experience—spanning academics, arts, sports, and beyond.
        </p>

        {infrastructureData.map((item, index) => {
          const ref = useScrollAnimation(item.reverse ? "right" : "left");
          return (
            <div
              key={index}
              ref={ref}
              className={`flex flex-wrap items-center justify-between gap-8 bg-white p-8 mb-10 rounded-xl shadow-md hover:shadow-xl transition duration-300 ${
                item.reverse ? "flex-row-reverse" : ""
              }`}
            >
            <div className="w-[300px] h-[180px] rounded-lg overflow-hidden bg-gray-200 shadow-md flex-shrink-0">
              <img
                src={item.image_url}
                alt={item.image_title}
                className="w-full h-full object-cover"
              />
            </div>
              <p className="text-gray-700 text-lg leading-7 flex-1">{item.text}</p>
            </div>
          );
        })}
  
      </section></main>
    </div>
  );
};

export default Infrastructure;