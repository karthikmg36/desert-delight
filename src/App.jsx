import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Retail from './pages/Retail';
import Wholesale from './pages/Wholesale';
import ScrollToTop from './components/ScrollToTop';

// Simple ScrollToTop component to reset scroll on route change
const ScrollToTopWrapper = () => {
  return <ScrollToTop />;
};

function App() {
  return (
    <Router>
      <ScrollToTopWrapper />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
