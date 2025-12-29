import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} DiasporaBuild. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            className="p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
