export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-6">
          Tell Us What You Want to Buy or Build
        </h3>

        <form className="space-y-4">
          <input className="w-full border p-3" placeholder="Full Name" />
          <input className="w-full border p-3" placeholder="Email Address" />
          <input className="w-full border p-3" placeholder="Country of Residence" />
          <input className="w-full border p-3" placeholder="Property Location" />
          <textarea className="w-full border p-3" placeholder="Project Details" />
          <button className="bg-green-600 text-white w-full py-3 rounded">
            Request Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
