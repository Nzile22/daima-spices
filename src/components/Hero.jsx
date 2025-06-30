import spice2 from '../assets/spice2.jpg';

export default function Hero() {
  return (
    <section className="bg-secondary text-center py-20 px-4 relative">
      <img
        src={spice2}
        alt="Spices"
        className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10"
      />
      <h2 className="text-4xl font-bold text-primary mb-4 relative">Authentic Spices for Every Kitchen</h2>
      <p className="text-lg text-gray-600 relative">Spice up your meals with Daima - Spices</p>
    </section>
  );
}
