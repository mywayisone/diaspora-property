import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa";

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
            target="_blank"
            href="https://x.com/diasporabuild4"
            className="p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/company/diasporabuild4/"
            className="p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            target="_blank"
            href="https://tiktok.com/@diasporabuild4"
            className="p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>

          <a
            target="_blank"
            href="#"
            className="p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}
