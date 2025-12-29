import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";

export default function Services() {
  
  const [ref, visible] = useReveal();

  return (
    <section 
      ref={ref}
      id="services"
      className={`py-15 md:py-20 bg-white transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our Services
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 border rounded-xl shadow hover:shadow-lg"
          >
            <h4 className="text-xl font-bold mb-3 text-gray-700">Land Acquisition (Akure)</h4>
            <p className="text-gray-700">
              We help clients acquire verified and genuine landed property in Akure,
              Ondo State, handling due diligence and documentation.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Verified Documents • Client-first ownership
            </p>
          </motion.div >

          <motion.div  
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 border rounded-xl shadow hover:shadow-lg"
          >
            <h4 className="text-xl font-bold mb-3 text-gray-700">Property Development (Nationwide)</h4>
            <p className="text-gray-700">
              Already own land? We manage building projects in any state in Nigeria
              while you monitor progress remotely.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Transparent process • Client-first ownership
            </p>
          </motion.div >

          <motion.div  
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 border rounded-xl shadow hover:shadow-lg"
          >
            <h4 className="text-xl font-bold mb-3 text-gray-700">Documentation & Monitoring</h4>
            <p className="text-gray-700">
              Property documents are secured in the client’s name with a bank,
              and progress updates are shared at every stage.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Transparent process • Client-first ownership
            </p>
          </motion.div >
        </div>
      </div>
    </section >

  );
}
