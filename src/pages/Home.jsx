// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import ProductList from '../components/ProductList';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductList />
      <About />
      <Footer />
    </>
  );
}
