import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const infrastructureData = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id purus dignissim, dignissim ante rhoncus, ultrices turpis.",
    reverse: false,
  },
  {
    text: "Sed non metus ut enim aliquam molestie. Nullam nibh nulla, auctor ut nisl fringilla, luctus suscipit arcu.",
    reverse: true,
  },
  {
    text: "Mauris rhoncus lectus vitae massa dapibus dapibus. Vivamus id purus dignissim, dignissim ante rhoncus.",
    reverse: false,
  },
];

const Infrastructure = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#f9faff] px-6 py-12 font-sans">
        <h2 className="text-3xl font-bold text-center text-[#5a00c4] border-b-2 border-gray-200 pb-3 mb-10">
          INFRASTRUCTURE
        </h2>
        {infrastructureData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-wrap items-center justify-between gap-8 bg-white p-6 mb-8 rounded-xl shadow-sm ${
              item.reverse ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className="w-[280px] h-[170px] rounded-lg bg-cover bg-center shadow-md flex-shrink-0"
              style={{
                backgroundImage: "url('https://via.placeholder.com/280x170')",
              }}
            ></div>
            <p className="text-gray-700 text-base leading-7 flex-1">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Infrastructure;