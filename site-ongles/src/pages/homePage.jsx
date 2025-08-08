import React from "react";
import "../pages/Home.css";
import tof from "../assets/1.png";
import tof2 from "../assets/2.png";
import tof3 from "../assets/3.png";
import Carousel from "../components/Carousel";

function Home() {
  const slides = [
    { image: tof, caption: "Ongles décorés" },
    { image: tof2, caption: "Manucure élégante" },
    { image: tof3, caption: "Nail art coloré" },
  ];

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>💅 Sublimez vos ongles</h1>
          <p>
            Offrez-vous un instant beauté et bien-être dans notre institut
            spécialisé en manucure, nail art et soins des mains.
          </p>
          <a href="#" className="btn-primary">
            Planifier mon rendez-vous
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Nos Prestations</h2>
        <div className="service-list">
          <div className="service-card">
            <span className="icon">💖</span>
            <h3>Manucure</h3>
            <p>Des mains soignées et élégantes grâce à notre savoir-faire.</p>
          </div>
          <div className="service-card">
            <span className="icon">🎨</span>
            <h3>Nail Art</h3>
            <p>Des créations uniques pour exprimer votre personnalité.</p>
          </div>
          <div className="service-card">
            <span className="icon">✨</span>
            <h3>Pose de Gel</h3>
            <p>Une tenue parfaite et brillante qui dure plusieurs semaines.</p>
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <Carousel slides={slides} />

    </div>
  );
}

export default Home;
