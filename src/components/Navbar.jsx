import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    Desert Delight
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>

                <div className="nav-actions">
                    <Link to="/cart" className="cart-icon">
                        <ShoppingBag size={24} />
                        <span className="cart-count">0</span>
                    </Link>
                    <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            <style>{`
        .navbar {
          padding: var(--spacing-md) 0;
          background-color: var(--color-bg);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid var(--color-border);
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        .nav-links {
          display: flex;
          gap: var(--spacing-lg);
        }
        .nav-links a {
          font-weight: 500;
          color: var(--color-text);
        }
        .nav-links a:hover {
          color: var(--color-primary);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }
        .cart-icon {
          position: relative;
          color: var(--color-primary);
        }
        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: var(--color-secondary);
          color: var(--color-white);
          font-size: 0.7rem;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          color: var(--color-primary);
        }
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: var(--color-bg);
            flex-direction: column;
            padding: var(--spacing-lg);
            border-bottom: 1px solid var(--color-border);
            transform: translateY(-150%);
            transition: transform 0.3s ease;
          }
          .nav-links.active {
            transform: translateY(0);
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
