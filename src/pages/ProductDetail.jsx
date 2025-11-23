import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { ShoppingBag, Star } from 'lucide-react';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [weight, setWeight] = useState('500g');

  if (!product) {
    return <div className="container section">Product not found</div>;
  }

  return (
    <div className="product-detail-page section">
      <div className="container">
        <div className="product-detail-grid">
          <div className="product-gallery">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info-detail">
            <span className="product-type-detail">{product.type}</span>
            <h1>{product.name}</h1>
            <div className="rating">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
              ))}
              <span>(24 reviews)</span>
            </div>
            <p className="price">₹{product.price.toFixed(2)}</p>
            <p className="description">{product.description}</p>

            <div className="options">
              <h3>Weight</h3>
              <div className="weight-options">
                {['250g', '500g', '1kg'].map(w => (
                  <button
                    key={w}
                    className={weight === w ? 'active' : ''}
                    onClick={() => setWeight(w)}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            <button className="btn btn-primary add-to-cart-large">
              Add to Cart <ShoppingBag size={20} />
            </button>

            <div className="additional-info">
              <h3>Benefits</h3>
              <ul>
                <li>Rich in fiber and antioxidants</li>
                <li>Natural energy booster</li>
                <li>Supports heart health</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .product-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          align-items: start;
        }
        .product-gallery img {
          width: 100%;
          border-radius: var(--border-radius);
          background-color: #f4f4f4;
        }
        .product-type-detail {
          color: var(--color-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          font-size: 0.9rem;
        }
        .rating {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: var(--spacing-md);
          color: var(--color-text);
          font-size: 0.9rem;
        }
        .price {
          font-size: 2rem;
          color: var(--color-primary);
          font-weight: 700;
          margin-bottom: var(--spacing-md);
        }
        .description {
          margin-bottom: var(--spacing-lg);
          color: #666;
        }
        .weight-options {
          display: flex;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-lg);
        }
        .weight-options button {
          padding: 8px 16px;
          border: 1px solid var(--color-border);
          background: none;
          border-radius: 4px;
          transition: all 0.2s;
        }
        .weight-options button.active,
        .weight-options button:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          background-color: rgba(74, 55, 40, 0.05);
        }
        .add-to-cart-large {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-bottom: var(--spacing-xl);
        }
        .additional-info ul {
          list-style: disc;
          padding-left: 20px;
          color: #666;
        }
        @media (max-width: 768px) {
          .product-detail-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
