import { useState } from 'react';
import { products } from '../data/products';
import ProductModal from '../components/ProductModal';
import { Building2, TrendingDown, Package } from 'lucide-react';

const Wholesale = () => {
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
        <div className="wholesale-page">
            {/* Hero Section */}
            <section className="wholesale-hero">
                <div className="container">
                    <div className="wholesale-hero-content">
                        <div className="wholesale-badge">
                            <Building2 size={20} />
                            <span>B2B Solutions</span>
                        </div>
                        <h1>Wholesale Pricing</h1>
                        <p>Premium quality dates at competitive bulk rates for your business</p>

                        <div className="wholesale-benefits">
                            <div className="benefit-item">
                                <TrendingDown size={24} />
                                <span>Volume Discounts</span>
                            </div>
                            <div className="benefit-item">
                                <Package size={24} />
                                <span>Bulk Packaging</span>
                            </div>
                            <div className="benefit-item">
                                <Building2 size={24} />
                                <span>Business Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Table */}
            <section className="wholesale-products section">
                <div className="container">
                    <div className="wholesale-intro">
                        <h2>Wholesale Price List</h2>
                        <p className="wholesale-note">
                            Minimum order: 50 units • Free shipping on orders over ₹1000
                        </p>
                    </div>

                    <div className="wholesale-table-wrapper">
                        <table className="wholesale-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Variety</th>
                                    <th>Origin</th>
                                    <th>Retail Price</th>
                                    <th>Wholesale Price</th>
                                    <th>Savings</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => {
                                    const savings = ((product.price - product.wholesalePrice) / product.price * 100).toFixed(0);
                                    return (
                                        <tr key={product.id} onClick={() => handleProductClick(product)}>
                                            <td>
                                                <div className="table-product">
                                                    <img src={product.image} alt={product.name} />
                                                    <span>{product.name}</span>
                                                </div>
                                            </td>
                                            <td>{product.variety}</td>
                                            <td>{product.origin}</td>
                                            <td className="price-strikethrough">₹{product.price.toFixed(2)}</td>
                                            <td className="price-highlight">₹{product.wholesalePrice.toFixed(2)}</td>
                                            <td>
                                                <span className="savings-badge">{savings}% OFF</span>
                                            </td>
                                            <td>
                                                <button className="btn-view-details">View Details</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Contact CTA */}
                    <div className="wholesale-cta">
                        <h3>Ready to Place a Bulk Order?</h3>
                        <p>Contact our wholesale team for custom packages and enterprise solutions</p>
                        <button className="btn btn-primary">Contact Wholesale Team</button>
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

export default Wholesale;
