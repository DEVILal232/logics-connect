import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-secondary">LOGICS</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="text-secondary hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors">
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 text-secondary hover:text-primary transition-colors">Services</a>
              <a href="#about" className="block px-3 py-2 text-secondary hover:text-primary transition-colors">About</a>
              <a href="#testimonials" className="block px-3 py-2 text-secondary hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-secondary hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;