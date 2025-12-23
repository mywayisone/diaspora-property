export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Pricing</h3>
        <p className="text-gray-600 mb-10">
          Our pricing is service-based and depends on scope and location.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-6 rounded">
            <h4 className="font-semibold">Land Acquisition</h4>
            <p className="text-sm text-gray-500 mt-2">Akure only</p>
          </div>

          <div className="border p-6 rounded">
            <h4 className="font-semibold">Property Development</h4>
            <p className="text-sm text-gray-500 mt-2">Nationwide</p>
          </div>

          <div className="border p-6 rounded">
            <h4 className="font-semibold">Full Concierge</h4>
            <p className="text-sm text-gray-500 mt-2">End-to-end service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
