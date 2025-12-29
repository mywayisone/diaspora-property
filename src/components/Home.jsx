import { motion } from "framer-motion";


export default function Home() {
  return (
    <motion.section 
      id="home" 
      className="pt-28 pb-6 md:pt-36 md:pb-24 bg-linear-to-b from-gray-50 to-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block mb-4 text-sm font-semibold text-emerald-600">
          Trusted Diaspora Property Partner
        </span>

        <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Own Verified Property in Nigeria <br className="hidden md:block" />
          Without Being There
        </h1>

        <p className="text-gray-700 text-sm md:text-xl max-w-3xl mx-auto mb-2">
          We help Nigerians in the diaspora acquire verified land in Akure and manage
          property development anywhere in Nigeria — transparently, securely, and
          professionally.
        </p>
        <p className="mt- text-xs text-gray-500 mb-10">
          Trusted by diaspora clients • Bank-secured documentation • Full transparency
        </p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-4 lg:gap-6 mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="bg-emerald-600 sm:px-8 sm:py-4 text-white px-8 py-4 md:mx-0 rounded-xl font-semibold hover:bg-emerald-700 transition w-fit mx-auto"
          >
            Book a Free Consultation
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#services"
            className="px-8 py-4 rounded-xl border sm:px-8 sm:py-4 border-gray-300 md:mx-0 font-semibold text-gray-700 hover:border-gray-400 transition w-fit mx-auto"
          >
            See How It Works
          </motion.a>
        </motion.div>
      </div>
    </motion.section>


  );
}

{/* <motion.section 
      id="home" 
      className="pt-32 pb-20 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    ></motion.section>

    <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition"
            >
              Start Your Property Journey
            </motion.button > */}