import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import useReveal from "../hooks/useReveal";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [ref, visible] = useReveal();
  const formRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [statusType, setStatusType] = useState(null); // "success" | "error"
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusType(null);

    try{

        await emailjs
          .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
          .then(() => {
            setStatusType("success");
            setStatusMessage(
              "Message sent successfully. Our team will contact you shortly."
            );
            formRef.current.reset();
          })
    }
      catch(error) {
        console.error(error);
        setStatusType("error");
        setStatusMessage("Failed to send message. Please try again.");
      }
      finally {
        setIsLoading(false);
      };
  };

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (statusType) {
      const timer = setTimeout(() => {
        setStatusType(null);
        setStatusMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [statusType]);

  return (
    <>
      {/*  STATUS NOTIFICATION */}
      <AnimatePresence>
        {statusType && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`fixed top-0 inset-x-0 z-50 py-3 px-6 rounded-full w-fit mx-auto text-center
              text-sm md:text-base font-medium
              ${
                statusType === "success"
                  ? "bg-emerald-600 text-white"
                  : "bg-red-600 text-white"
              }`}
          >
            {statusMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 📩 CONTACT SECTION */}
      <motion.section
        ref={ref}
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 bg-white"
      >
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Tell Us What You Want to Buy or Build
          </h3>

          <p className="text-center text-gray-600 mb-8">
            Tell us what you want to build or buy. A dedicated property advisor
            will contact you within 24 hours.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <input
              className="w-full border rounded-lg p-3"
              name="full_name"
              placeholder="Full Name"
              required
            />

            <input
              className="w-full border rounded-lg p-3"
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              className="w-full border rounded-lg p-3"
              name="country"
              placeholder="Country of Residence"
            />

            <input
              className="w-full border rounded-lg p-3"
              name="location"
              placeholder="Property Location"
            />

            <select
              className="w-full border rounded-lg p-3"
              name="service"
              required
            >
              <option value="">Choose service</option>
              <option>Land Acquisition (Akure)</option>
              <option>Property Development (Nationwide)</option>
              <option>Both</option>
            </select>

            <textarea
              className="w-full border rounded-lg p-3"
              name="message"
              placeholder="Project Details"
              rows={4}
            />

            {/* 🔘 SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className={`mx-auto flex items-center justify-center gap-2
                bg-emerald-600 text-white font-semibold
                py-3 px-8 rounded-lg transition
                ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-emerald-700"
                }`}
            >
              {isLoading ? (
                <>
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                "Request Private Consultation"
              )}
            </button>
          </form>
        </div>
      </motion.section>
    </>
  );
}
