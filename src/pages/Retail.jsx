import { useState } from 'react';
import { products } from '../data/products';
import ProductModal from '../components/ProductModal';
import { Sparkles, ShoppingBag } from 'lucide-react';

const Retail = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProduct(null), 300);
    };

    return (
        <div className="retail-page">
            {/* Hero Section */}
            <section className="retail-hero">
                <div className="retail-hero-content">
                    <div className="retail-hero-badge">
                        <Sparkles size={16} />
                        <span>Premium Selection</span>
                    </div>
                    <h1 className="retail-hero-title">Exquisite Dates Collection</h1>
                    <p className="retail-hero-subtitle">
                        Handpicked from the finest groves, delivered with care
                    </p>
                </div>
                <div className="retail-hero-gradient"></div>
            </section>

            {/* Products Grid */}
            <section className="retail-products section">
                <div className="container">
                    <div className="retail-intro">
                        <h2>Our Premium Selection</h2>
                        <p>Each variety carefully sourced and quality-tested for your delight</p>
                    </div>

                    <div className="retail-grid">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="retail-card"
                                onClick={() => handleProductClick(product)}
                            >
                                <div className="retail-card-image-wrapper">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="retail-card-image"
                                    />
                                    <div className="retail-card-overlay">
                                        <ShoppingBag size={24} />
                                        <span>View Details</span>
                                    </div>
                                </div>

                                <div className="retail-card-content">
                                    <div className="retail-card-header">
                                        <h3>{product.name}</h3>
                                        <span className="retail-card-badge">{product.variety}</span>
                                    </div>

                                    <p className="retail-card-description">{product.description}</p>

                                    <div className="retail-card-footer">
                                        <div className="retail-card-price">
                                            <span className="price-amount">₹{product.price.toFixed(2)}</span>
                                            <span className="price-unit">/ {product.weight}</span>
                                        </div>
                                        <div className="retail-card-origin">
                                            From {product.origin}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default Retail;
