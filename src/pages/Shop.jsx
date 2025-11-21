import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
    const [filter, setFilter] = useState('All');
    const [priceRange, setPriceRange] = useState(50);

    const filteredProducts = products.filter(product => {
        const matchesType = filter === 'All' || product.type === filter;
        const matchesPrice = product.price <= priceRange;
        return matchesType && matchesPrice;
    });

    const types = ['All', ...new Set(products.map(p => p.type))];

    return (
        <div className="shop-page section">
            <div className="container">
                <h1 className="page-title">Shop Our Collection</h1>

                <div className="shop-layout">
                    <aside className="filters">
                        <div className="filter-group">
                            <h3>Type</h3>
                            <ul>
                                {types.map(type => (
                                    <li key={type}>
                                        <button
                                            className={filter === type ? 'active' : ''}
                                            onClick={() => setFilter(type)}
                                        >
                                            {type}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="filter-group">
                            <h3>Max Price: ${priceRange}</h3>
                            <input
                                type="range"
                                min="20"
                                max="50"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                            />
                        </div>
                    </aside>

                    <div className="product-grid">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <p>No products found matching your criteria.</p>
                        )}
                    </div>
                </div>
            </div>
            <style>{`
        .page-title {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }
        .shop-layout {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: var(--spacing-xl);
        }
        .filters {
          background-color: var(--color-white);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius);
          height: fit-content;
        }
        .filter-group {
          margin-bottom: var(--spacing-lg);
        }
        .filter-group h3 {
          font-size: 1.1rem;
          margin-bottom: var(--spacing-sm);
        }
        .filter-group ul li {
          margin-bottom: var(--spacing-xs);
        }
        .filter-group button {
          background: none;
          border: none;
          color: var(--color-text);
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.2s;
        }
        .filter-group button.active,
        .filter-group button:hover {
          color: var(--color-primary);
          font-weight: 700;
        }
        .filter-group input[type="range"] {
          width: 100%;
        }
        @media (max-width: 768px) {
          .shop-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default Shop;
