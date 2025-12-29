import useReveal from "../hooks/useReveal";


export default function Testimonials() {

    const[ref, visible] = useReveal()

  return (
    <section
        ref={ref}
        id="testimonials" 
        className={`py-15 md:py-20 bg-gray-900 text-gray-100 transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl md:text-4xl font-bold text-center mb-12 text-white">
          What Our Clients Say
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow">
            <p className="text-gray-300 mb-4">
              “I was skeptical at first, but the transparency and constant
              updates gave me confidence. My land in Akure was secured without
              stress while I stayed abroad.”
            </p>
            <h4 className="font-semibold text-white">— Adeyemi T.</h4>
            <span className="text-sm text-gray-400">UK</span>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow">
            <p className="text-gray-300 mb-4">
              “They handled my building project from foundation to finishing.
              Every stage was documented. I didn’t have to rely on family or
              friends.”
            </p>
            <h4 className="font-semibold text-white">— Kemi A.</h4>
            <span className="text-sm text-gray-400">Canada</span>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow">
            <p className="text-gray-300 mb-4">
              “What stood out for me was the document custody with a bank. That
              alone gave me peace of mind. Very professional service.”
            </p>
            <h4 className="font-semibold text-white">— Daniel O.</h4>
            <span className="text-sm text-gray-400">USA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
