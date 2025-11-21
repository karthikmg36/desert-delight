import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page section">
            <div className="container">
                <h1 className="page-title">Get in Touch</h1>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>Have questions? We'd love to hear from you.</p>

                        <div className="info-item">
                            <Mail className="icon" />
                            <span>hello@desertdelight.com</span>
                        </div>
                        <div className="info-item">
                            <Phone className="icon" />
                            <span>+123 456 7890</span>
                        </div>
                        <div className="info-item">
                            <MapPin className="icon" />
                            <span>123 Date Palm Avenue, Dubai, UAE</span>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
            <style>{`
        .page-title {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          max-width: 900px;
          margin: 0 auto;
        }
        .contact-info {
          background-color: var(--color-primary);
          color: var(--color-white);
          padding: var(--spacing-xl);
          border-radius: var(--border-radius);
        }
        .contact-info h2 {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-md);
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
        }
        .info-item .icon {
          color: var(--color-secondary);
        }
        .contact-form {
          background-color: var(--color-white);
          padding: var(--spacing-xl);
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-sm);
        }
        .form-group {
          margin-bottom: var(--spacing-md);
        }
        .form-group label {
          display: block;
          margin-bottom: var(--spacing-xs);
          font-weight: 700;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid var(--color-border);
          border-radius: 4px;
          font-family: inherit;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: 2px solid var(--color-secondary);
          border-color: transparent;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default Contact;
