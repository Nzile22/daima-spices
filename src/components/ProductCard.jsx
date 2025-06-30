// src/components/ProductCard.jsx
export default function ProductCard({ name, image, price }) {
  return (
    <div className="bg-secondary border shadow-sm rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary">{name}</h3>
        <p className="text-sm text-accent">{price}</p>
      </div>
    </div>
  );
}
