import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Truck, ShieldCheck, Leaf } from 'lucide-react';

const Home = () => {
    const featuredProducts = products.filter(p => p.featured);

    return (
        <div className="home-page">
            <Hero />

            <section className="section best-sellers">
                <div className="container">
                    <h2 className="section-title">Our Best Sellers</h2>
                    <div className="product-grid">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section why-choose-us">
                <div className="container">
                    <h2 className="section-title">Why Choose Desert Delight?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="icon-wrapper"><Leaf size={32} /></div>
                            <h3>100% Natural</h3>
                            <p>Grown organically without any artificial preservatives or chemicals.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrapper"><ShieldCheck size={32} /></div>
                            <h3>Premium Quality</h3>
                            <p>Hand-picked and sorted to ensure you get only the finest dates.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-wrapper"><Truck size={32} /></div>
                            <h3>Fast Delivery</h3>
                            <p>Fresh from the farm to your doorstep in record time.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section testimonials">
                <div className="container">
                    <h2 className="section-title">What Our Customers Say</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <p>"The best Ajwa dates I've ever tasted. Soft, fresh, and packaging was beautiful!"</p>
                            <h4>- Sarah Ahmed</h4>
                        </div>
                        <div className="testimonial-card">
                            <p>"Ordered for Ramadan and was not disappointed. Highly recommend the Medjool dates."</p>
                            <h4>- Omar Farooq</h4>
                        </div>
                        <div className="testimonial-card">
                            <p>"Premium quality indeed. Will definitely be ordering again."</p>
                            <h4>- Jessica Miller</h4>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: var(--spacing-xl);
          position: relative;
        }
        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background-color: var(--color-secondary);
          margin: var(--spacing-sm) auto 0;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: var(--spacing-lg);
        }
        .why-choose-us {
          background-color: var(--color-white);
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
          text-align: center;
        }
        .feature-card {
          padding: var(--spacing-lg);
        }
        .icon-wrapper {
          width: 80px;
          height: 80px;
          background-color: var(--color-bg);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-md);
          color: var(--color-primary);
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-lg);
        }
        .testimonial-card {
          background-color: var(--color-white);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-sm);
          text-align: center;
        }
        .testimonial-card p {
          font-style: italic;
          margin-bottom: var(--spacing-md);
        }
      `}</style>
        </div>
    );
};

export default Home;
