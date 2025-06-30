// src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="bg-[#fdf5e6] py-16 px-6 text-center text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-6 tracking-wide">About Daima - Spices</h2>

        <p className="text-lg mb-6 leading-relaxed">
          At <span className="font-semibold text-primary">Daima - Spices</span>, we believe that every great dish begins with exceptional ingredients.
          Our journey started with a simple passion for authentic, flavor-rich spices that bring meals to life.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10 text-left">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">🌿 Our Promise</h3>
            <p className="text-gray-700 leading-relaxed">
              We source our spices directly from local farmers and trusted growers. Every product is
              handpicked, sun-dried, and carefully blended to ensure unmatched quality and freshness.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">💡 What Makes Us Different</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>100% natural, no preservatives</li>
              <li>Ethically sourced and locally supported</li>
              <li>Expertly ground for maximum aroma</li>
              <li>Eco-friendly packaging</li>
            </ul>
          </div>
        </div>

        <blockquote className="italic text-lg mt-10 border-l-4 border-primary pl-4">
          “Spices are the soul of cooking – and at Daima, we nurture that soul.”
        </blockquote>

        <p className="mt-10 text-sm text-gray-500">
          Founded in 2024 in Nairobi, Kenya — Daima is proud to be your go-to destination for authentic, flavorful spices.
        </p>
      </div>
    </section>
  );
}
