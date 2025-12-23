export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded">
            <h4 className="font-semibold mb-2">Land Acquisition (Akure)</h4>
            <p className="text-gray-600">
              We help clients acquire verified and genuine landed property in
              Akure, Ondo State, handling due diligence and documentation.
            </p>
          </div>

          <div className="p-6 border rounded">
            <h4 className="font-semibold mb-2">Property Development (Nationwide)</h4>
            <p className="text-gray-600">
              Already own land? We manage building projects in any state in
              Nigeria while you monitor progress remotely.
            </p>
          </div>

          <div className="p-6 border rounded">
            <h4 className="font-semibold mb-2">Documentation & Monitoring</h4>
            <p className="text-gray-600">
              Property documents are secured in the client’s name with a bank,
              and progress updates are shared at every stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
