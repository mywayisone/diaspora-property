import useReveal from "../hooks/useReveal";

export default function Features() {

  const[ref, visible] = useReveal()

  return (
    <section 
      ref={ref}
      id="features"
      className={`py-15 md:py-20 bg-white transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl md:text-4xl text-gray-900 font-extrabold text-center mb-10">
          Why Diaspora Clients Trust Us
        </h3>


        <ul className="space-y-4 text-gray-700 text-lg md:text-xl list-disc list-inside">
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 font-bold">✓</span>
            Land acquisition focused in Akure for strict verification
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 font-bold">✓</span>
            Nationwide property development support
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 font-bold">✓</span>
            Client-first ownership — registered in your name
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 font-bold">✓</span>
            Bank-secured property documentation
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 font-bold">✓</span>
            Designed specifically for diaspora clients
          </li>
        </ul>
      </div>

      <div className="my-2 mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600 mx-10 md:mx-40">
        <div>✔ Verified Land Only</div>
        <div>✔ Client-Owned Titles</div>
        <div>✔ Bank-Secured Documents</div>
        <div>✔ Nationwide Development</div>
      </div>

    </section>
  );
}
