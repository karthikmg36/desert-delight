import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>Desert Delight</h3>
          <p>Pure, Fresh, Premium Dates — Delivered to You.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: sna2care@gmail.com</p>
          <p>Phone: 9900501884</p>
          <p>Address: Celestial stars, #G4, RT nagar, Bangalore - 560032</p>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Desert Delight. All rights reserved.</p>
      </div>
      <style>{`
        .footer {
          background-color: var(--color-primary);
          color: var(--color-white);
          padding-top: var(--spacing-xl);
        }
        .footer-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
        }
        .footer-col h3, .footer-col h4 {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-md);
        }
        .footer-col ul li {
          margin-bottom: var(--spacing-sm);
        }
        .footer-col ul li a:hover {
          color: var(--color-secondary);
        }
        .social-icons {
          display: flex;
          gap: var(--spacing-md);
        }
        .social-icons a {
          color: var(--color-white);
        }
        .social-icons a:hover {
          color: var(--color-secondary);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: var(--spacing-md) 0;
          text-align: center;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
