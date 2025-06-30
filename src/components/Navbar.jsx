import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Daima - Spices</h1>
      <ul className="flex gap-6 text-sm">
        <li><Link to="/products" className="hover:text-accent">Products</Link></li>
        <li><Link to="/about" className="hover:text-accent">About</Link></li>
        <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
      </ul>
    </nav>
  );
}
