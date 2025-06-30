// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Daima - Spices</h1>
      <ul className="flex gap-6 text-sm">
        <li><a href="#products" className="hover:text-accent">Products</a></li>
        <li><a href="#about" className="hover:text-accent">About</a></li>
        <li><a href="#contact" className="hover:text-accent">Contact</a></li>
      </ul>
    </nav>
  );
}
