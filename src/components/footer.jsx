// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-6 mt-8" id="contact">
      <p>&copy; {new Date().getFullYear()} Daima - Spices | Kampala, Uganda</p>
      <p className="text-sm mt-2">Email: contact@daimaspices.co.ke</p>
    </footer>
  );
}
