import { X, Calendar, MapPin, Award, Package } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
    if (!isOpen || !product) return null;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                <div className="modal-grid">
                    {/* Image Section */}
                    <div className="modal-image-section">
                        <img src={product.image} alt={product.name} className="modal-image" />
                        <div className="modal-certifications">
                            {product.certifications?.map((cert, index) => (
                                <span key={index} className="certification-badge">
                                    <Award size={14} />
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="modal-details-section">
                        <h2 className="modal-title">{product.name}</h2>
                        <p className="modal-variety">{product.variety}</p>
                        <p className="modal-description">{product.description}</p>

                        <div className="modal-info-grid">
                            {/* Origin */}
                            <div className="info-card">
                                <div className="info-icon">
                                    <MapPin size={20} />
                                </div>
                                <div className="info-content">
                                    <h4>Origin</h4>
                                    <p>{product.origin}</p>
                                </div>
                            </div>

                            {/* Harvest Date */}
                            <div className="info-card">
                                <div className="info-icon">
                                    <Calendar size={20} />
                                </div>
                                <div className="info-content">
                                    <h4>Harvest Date</h4>
                                    <p>{formatDate(product.harvestDate)}</p>
                                </div>
                            </div>

                            {/* Expiry Date */}
                            <div className="info-card">
                                <div className="info-icon">
                                    <Calendar size={20} />
                                </div>
                                <div className="info-content">
                                    <h4>Best Before</h4>
                                    <p>{formatDate(product.expiryDate)}</p>
                                </div>
                            </div>

                            {/* Weight */}
                            <div className="info-card">
                                <div className="info-icon">
                                    <Package size={20} />
                                </div>
                                <div className="info-content">
                                    <h4>Package Size</h4>
                                    <p>{product.weight}</p>
                                </div>
                            </div>
                        </div>

                        {/* Nutritional Highlights */}
                        <div className="modal-nutrition">
                            <h3>Nutritional Benefits</h3>
                            <ul className="nutrition-list">
                                {product.nutritionalHighlights?.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Storage */}
                        <div className="modal-storage">
                            <h4>Storage Instructions</h4>
                            <p>{product.storageInstructions}</p>
                        </div>

                        {/* Price */}
                        <div className="modal-price-section">
                            <span className="modal-price">₹{product.price.toFixed(2)}</span>
                            <span className="modal-price-unit">per {product.weight}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
