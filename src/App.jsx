import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Features />
      <Pricing />
      <ContactForm />
    </>
  );
}
