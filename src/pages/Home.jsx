// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import ProductList from '../components/ProductList';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <ProductList />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
