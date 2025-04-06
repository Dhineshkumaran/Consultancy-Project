import React from "react";
import "./HomePage.css";
import school from '../assets/school.png';
import Footer from "./Footer";
import Header from "./Header";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header/>

      <section className="hero-section">
        <div style={{display: 'flex'}}>
        <div className="quote">🧠 "Tell me and I forget. Teach me and I remember. Involve me and I learn."
        — Benjamin Franklin
        </div>
        <img src={school} alt="School Building" className="hero-img" />
        </div>
      </section>

      <section className="section activities">
        <h2><span role="img" aria-label="graduation cap">🎓</span>GLOBAL ACTIVITIES</h2>
        <div className="cards">
          {[1, 2, 3].map((_, i) => (
            <div className="card" key={i}></div>
          ))}
        </div>
      </section>

      <section className="section about-us">
        <h2>ABOUT US</h2>
        <div className="about-content">
          <div className="mission">
            <h3>MISSION</h3>
          </div>
          <div className="image-box">
            <div className="placeholder-img"></div>
            <button className="read-more">READ MORE →</button>
          </div>
        </div>
      </section>

      <section className="section leadership">
        <h2><span role="img" aria-label="graduation cap">🎓</span> LEADERSHIP SPEAKS</h2>
        <div className="messages">
          <div className="box light-yellow"></div>
          <div className="box light-blue"></div>
          <div className="box light-purple"></div>
        </div>
      </section>

      <section className="section recent-clicks">
        <h2>RECENT CLICKS <span role="img" aria-label="camera">📷</span></h2>
        <div className="gallery">
          {[1, 2, 3].map((_, i) => (
            <div className="gallery-item" key={i}></div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;