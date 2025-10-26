export default function Footer() {
  return (
    <footer className="border-t border-red-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Blood Connect • Built to save lives in Bangladesh
          </p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-gray-600 hover:text-red-700">About</a>
            <a href="#privacy" className="text-gray-600 hover:text-red-700">Privacy</a>
            <a href="#contact" className="text-gray-600 hover:text-red-700">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
