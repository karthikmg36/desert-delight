import { Link } from 'react-router-dom';
import heroBg from '../assets/images/hero_bg_1763660786867.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content container">
                <h1>Pure, Fresh, Premium Dates — Delivered to You.</h1>
                <p>Experience the authentic taste of the desert with our hand-picked selection of the finest dates.</p>
                <Link to="/shop" className="btn btn-primary">Shop Now</Link>
            </div>
            <style>{`
        .hero {
          height: 80vh;
          background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroBg});
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          color: var(--color-white);
          text-align: center;
        }
        .hero-content {
          max-width: 800px;
        }
        .hero h1 {
          font-size: 3.5rem;
          color: var(--color-white);
          margin-bottom: var(--spacing-md);
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .hero p {
          font-size: 1.2rem;
          margin-bottom: var(--spacing-lg);
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
