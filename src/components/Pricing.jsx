import useReveal from "../hooks/useReveal";

export default function Pricing() {

  const[ref, visible] = useReveal()

  return (
    <section 
      ref={ref}
      id="pricing"
      className={`py-15 md:py-20 bg-white transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h3 className="text-2xl text-gray-900 md:text-4xl font-bold mb-6">Pricing</h3>
    <p className="text-gray-700 mb-10 text-lg">
      Our pricing is service-based and depends on scope and location.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="border p-6 rounded-xl shadow hover:shadow-lg transition">
        <h4 className="font-semibold text-gray-700 mb-2 text-lg">Land Acquisition</h4>
        <p className="text-sm text-gray-500">Akure only</p>
        <button className="mt-8 px-8 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">
          Request a Custom Quote
        </button>
      </div>

      <div className="border p-6 rounded-xl shadow hover:shadow-lg transition">
        <h4 className="font-semibold text-gray-700 mb-2 text-lg">Property Development</h4>
        <p className="text-sm text-gray-500">Nationwide</p>
        <button className="mt-8 px-8 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">
          Request a Custom Quote
        </button>
      </div>

      <div className="border p-6 rounded-xl shadow hover:shadow-lg transition">
        <h4 className="font-semibold text-gray-700 mb-2 text-lg">Full Concierge</h4>
        <p className="text-sm text-gray-500">End-to-end service</p>
        <button className="mt-8 px-8 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">
          Request a Custom Quote
        </button>
      </div>
    </div>
  </div>
</section>
  );
}
