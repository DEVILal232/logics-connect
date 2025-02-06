import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Index;