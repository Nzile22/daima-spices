// src/components/ProductList.jsx
import ProductCard from './ProductCard';
import spice1 from '../assets/spice1.jpg'; // replace with your image paths
import spice2 from '../assets/spice2.jpg';

const products = [
  { name: 'Chili Powder', image: spice1, price: 'KES 150' },
  { name: 'Turmeric Powder', image: spice2, price: 'KES 100' },
];

export default function ProductList() {
  return (
    <section id="products" className="p-6 bg-white">
      <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}
