import { Heart, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-red-200/40 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-white">
              <Heart className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-red-700">Blood Connect</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-red-700">Features</a>
            <a href="#how" className="text-sm font-medium text-gray-700 hover:text-red-700">How it works</a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-red-700">About</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:text-red-700">Log in</button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              <User className="h-4 w-4" />
              Sign up
            </button>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-red-50 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <a href="#features" className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-red-50">Features</a>
              <a href="#how" className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-red-50">How it works</a>
              <a href="#about" className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-red-50">About</a>
            </div>
            <div className="flex items-center gap-3 border-t border-red-100 px-3 py-3">
              <button className="flex-1 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:text-red-700">Log in</button>
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700">
                <User className="h-4 w-4" />
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
