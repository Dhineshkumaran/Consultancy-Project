import React from "react";
import "./Infrastructure.css";
import Header from "./Header";
import Footer from "./Footer";

const infrastructureData = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id purus dignissim, dignissim ante rhoncus, ultrices turpis. Nullam nibh nulla, auctor ut nisl fringilla, luctus suscipit arcu. Mauris rhoncus lectus vitae massa dapibus dapibus. Sed non metus ut enim aliquam molestie.",
        reverse: false,
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id purus dignissim, dignissim ante rhoncus, ultrices turpis. Nullam nibh nulla, auctor ut nisl fringilla, luctus suscipit arcu. Mauris rhoncus lectus vitae massa dapibus dapibus. Sed non metus ut enim aliquam molestie.",
        reverse: true,
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id purus dignissim, dignissim ante rhoncus, ultrices turpis. Nullam nibh nulla, auctor ut nisl fringilla, luctus suscipit arcu. Mauris rhoncus lectus vitae massa dapibus dapibus. Sed non metus ut enim aliquam molestie.",
        reverse: false,
    },
];

const Infrastructure = () => {
    return (
        <div>
            <Header />
            <div className="infrastructure-section">
                <h2 className="title">INFRASTRUCTURE</h2>
                {infrastructureData.map((item, index) => (
                    <div
                        className={`infra-item ${item.reverse ? "reverse" : ""}`}
                        key={index}
                    >
                        <div className="infra-image" />
                        <p className="infra-text">{item.text}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Infrastructure;