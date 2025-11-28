import React, { useState, useEffect } from 'react';
import principalImg from "../assets/principal.jpg"; // update image path
import Header from "./Header";
import Footer from "./Footer";
import Loader from './Loader';

function PrincipalMessage() {
    const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        setTimeout(() => setLoading(false), 500);
      }, []);

  return (
    <>
    {loading && <Loader/>}
    <Header />
<section className="pt-[150px] md:pt-[180px] pb-20 px-6 md:px-16 bg-[#f5f7ff] min-h-screen">
      {/* Page Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#34206f] mb-10">
        Principal Message
      </h2>

      {/* MAIN CARD */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        
        {/* LEFT IMAGE CARD */}
        <div className="flex justify-center">
          <div className="bg-white rounded-xl shadow-md p-3 w-[80%] md:w-[70%]">
            <img
              src={principalImg}
              alt="Principal"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* RIGHT TEXT SECTION */}
        <div className="flex flex-col">
          {/* Heading with feather icon (you can add imported SVG if needed) */}
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 flex items-center gap-3 mb-6">
            <span>Principal's Message</span>
            <span className="text-3xl">🖋️</span>
          </h3>

          {/* Body Text */}
          <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
            <p>
              <strong className="font-semibold text-gray-900">
                My dear students,
              </strong>
            </p>

            <p>
              Welcome to the Global family. I am excited to give the ability to 
              lead the legacy of leaders. I am honoured to guide a dedicated 
              team committed to nurturing every child's potential. I have been 
              a passionate educator and a guide person to bring an excellent society.
            </p>

            <p className="italic font-semibold text-gray-900">
              “Different things motivate different people”
            </p>

            <p>
              We are teaching what the purpose of learning is. We are guiding them 
              for principles—how to follow it. We also teach them that planning, 
              practicing, perseverance, patience, preparation etc… are that successful factors.
            </p>

            <p>
              Being ignorant is not shameful, but being unwilling to learn is. 
              Role models can teach through examples. Children who are taught 
              the importance of integrity during their formative years generally 
              don’t lose it. It becomes a part of life, which is what we are 
              looking for in any profession—whether in the caretaker, attorney, 
              accountant, politician, police officer or judge. Integrity is a lot 
              stronger than honesty. In fact, it is the foundation of honesty.
            </p>

            {/* Principal Name */}
            <div className="pt-4">
              <p className="font-bold text-gray-900">Mr. P. Mathivanan M.A., M.A., M.Phil., M.Ed., PGDCA.</p>
              <p className="text-gray-700">Principal</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    <Footer />
    </>
  );
}

export default PrincipalMessage;
