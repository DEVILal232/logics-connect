import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-primary-light/20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary animate-fade-in">
          Transform Your Potential with
          <span className="text-primary"> Professional Coaching</span>
        </h1>
        <p className="mt-6 text-xl text-secondary-dark max-w-3xl mx-auto animate-slide-up">
          Unlock your full potential with personalized coaching sessions designed to elevate your performance and achieve your goals.
        </p>
        <div className="mt-10 animate-slide-up">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;