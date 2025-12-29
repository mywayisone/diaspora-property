import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {

  const[open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur border-b z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-extrabold text-xl tracking-tight text-gray-900">
          DiasporaBuild
        </h1>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-emerald-600 transition">Home</a>
          <a href="#services" className="hover:text-emerald-600 transition">Services</a>
          <a href="#features" className="hover:text-emerald-600 transition">Why Us</a>
          <a href="#pricing" className="hover:text-emerald-600 transition">Pricing</a>
          <a
            href="#contact"
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* MOBILE BURGER BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t shadow-lg z-50 ">
          <div className="flex flex-col px-6 py-4 gap-4 font-medium">
            <a onClick={() => setOpen(false)} href="#home" className="z-50 hover:text-emerald-600">Home</a>
            <a onClick={() => setOpen(false)} href="#services" className="z-50 hover:text-emerald-600">Services</a>
            <a onClick={() => setOpen(false)} href="#features" className="z-50 hover:text-emerald-600">Why Us</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="z-50 hover:text-emerald-600">Pricing</a>
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="bg-emerald-600 w-fit text-white px-4 py-2 rounded-lg text-center"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </nav>

  );
}
