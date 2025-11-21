const About = () => {
    return (
        <div className="about-page section">
            <div className="container">
                <div className="about-content">
                    <h1 className="page-title">Our Story</h1>
                    <p className="lead">
                        Desert Delight was born from a passion for the authentic taste of the Arabian Peninsula.
                    </p>

                    <div className="story-section">
                        <h2>The Beginning</h2>
                        <p>
                            Founded in 2020, we started with a simple mission: to bring the freshest, most premium dates from the farms of Medina directly to your table. We believe that dates are not just a fruit, but a symbol of hospitality, tradition, and health.
                        </p>
                    </div>

                    <div className="story-section">
                        <h2>Our Sourcing</h2>
                        <p>
                            We partner exclusively with sustainable, organic farms that have been cultivating dates for generations. Every date is hand-picked at the peak of ripeness to ensure the perfect texture and sweetness.
                        </p>
                    </div>

                    <div className="mission-values">
                        <div className="value-card">
                            <h3>Authenticity</h3>
                            <p>True to our roots, we offer only the most authentic varieties.</p>
                        </div>
                        <div className="value-card">
                            <h3>Quality</h3>
                            <p>We never compromise on quality. Only the best make it to you.</p>
                        </div>
                        <div className="value-card">
                            <h3>Sustainability</h3>
                            <p>We support eco-friendly farming practices.</p>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        .about-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .page-title {
          margin-bottom: var(--spacing-md);
        }
        .lead {
          font-size: 1.2rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-xl);
          font-style: italic;
        }
        .story-section {
          margin-bottom: var(--spacing-xl);
          text-align: left;
        }
        .story-section h2 {
          font-size: 1.8rem;
          margin-bottom: var(--spacing-md);
        }
        .mission-values {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }
        .value-card {
          background-color: var(--color-white);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-sm);
        }
        .value-card h3 {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-sm);
        }
      `}</style>
        </div>
    );
};

export default About;
