export default function Features() {
  return (
    <section className="bg-primary text-white py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Quality Ingredients</h3>
          <p>Handpicked, sun-dried, and expertly blended for unmatched freshness.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Ethically Sourced</h3>
          <p>Supporting local farmers and sustainable practices.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Authentic Flavors</h3>
          <p>Bringing traditional spice blends to your kitchen.</p>
        </div>
      </div>
    </section>
  );
}
