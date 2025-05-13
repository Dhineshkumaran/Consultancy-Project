import React from 'react';

const Loader = () => {
  const letters = 'GLOBAL'.split('');
  
  return (
    <>
      <style>
        {`
          @keyframes jiggle {
            0%, 100% { 
              transform: translateY(0) rotate(0deg);
            }
            25% { 
              transform: translateY(-5px) rotate(-5deg);
            }
            50% { 
              transform: translateY(0) rotate(0deg);
            }
            75% { 
              transform: translateY(-5px) rotate(5deg);
            }
          }
          
          .jiggle-letter {
            display: inline-block;
            animation: jiggle 0.5s ease-in-out infinite;
          }
        `}
      </style>
      <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
          <div className="flex">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="text-blue-800 font-bold text-2xl jiggle-letter"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;