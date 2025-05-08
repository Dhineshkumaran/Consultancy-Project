import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

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
        } else {
          node.classList.remove("slide-in-left", "slide-in-right");
          node.classList.add("opacity-0");
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
    reverse: false,
  },
  {
    text: "The school library is a hub of knowledge and exploration, offering a wide collection of academic resources, literature, and digital materials. It's a quiet sanctuary where students cultivate reading habits and conduct independent research.",
    reverse: true,
  },
  {
    text: "Our smart classrooms integrate modern teaching aids like interactive whiteboards, projectors, and audio-visual tools to make learning more engaging and impactful. They support a blended approach to education that combines traditional teaching with digital innovation.",
    reverse: false,
  },
  {
    text: "The play area is thoughtfully designed to promote physical development, teamwork, and recreation. Equipped with age-appropriate outdoor play equipment and green spaces, it ensures students enjoy a healthy balance of academics and play.",
    reverse: true,
  },
];

const Infrastructure = () => {
  useEffect(() => {
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
      <Header />
      <div className="bg-[#f9faff] px-6 pt-32 pb-16 font-sans">
        <h2 className="text-4xl font-bold text-center text-blue-900 border-b-2 border-gray-200 pb-4 mb-14">
          Our Campus Infrastructure
        </h2>

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
              <div
                className="w-[300px] h-[180px] rounded-lg bg-gray-200 bg-cover bg-center shadow-md flex-shrink-0 flex items-center justify-center text-gray-400 font-bold text-xl"
                style={{
                  backgroundImage: "url('https://via.placeholder.com/300x180')",
                }}
              >
                Image
              </div>
              <p className="text-gray-700 text-lg leading-7 flex-1">{item.text}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Infrastructure;