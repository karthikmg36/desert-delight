import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="product-info">
        <span className="product-type">{product.type}</span>
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title">{product.name}</h3>
        </Link>
        <p className="product-price">₹{product.price.toFixed(2)}</p>
        <button className="add-to-cart-btn">
          Add to Cart <ShoppingBag size={16} />
        </button>
      </div>
      <style>{`
        .product-card {
          background-color: var(--color-white);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        .product-image-link {
          height: 250px;
          overflow: hidden;
          background-color: #f4f4f4;
        }
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .product-image {
          transform: scale(1.05);
        }
        .product-info {
          padding: var(--spacing-md);
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .product-type {
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--color-secondary);
          letter-spacing: 1px;
          margin-bottom: var(--spacing-xs);
        }
        .product-title {
          font-size: 1.2rem;
          margin-bottom: var(--spacing-sm);
          color: var(--color-primary);
        }
        .product-price {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: var(--spacing-md);
          color: var(--color-text);
        }
        .add-to-cart-btn {
          margin-top: auto;
          background-color: var(--color-primary);
          color: var(--color-white);
          padding: 10px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-weight: 700;
          transition: var(--transition);
        }
        .add-to-cart-btn:hover {
          background-color: var(--color-secondary);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
