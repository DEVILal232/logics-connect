import { BookOpen, Star, Handshake } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Why Choose LOGICS
          </h2>
          <p className="mt-4 text-xl text-secondary-dark">
            Expert coaching to help you achieve extraordinary results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              Experienced Coaches
            </h3>
            <p className="text-secondary-dark">
              Our coaches bring years of professional experience and expertise
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              Proven Results
            </h3>
            <p className="text-secondary-dark">
              Track record of success with clients across various industries
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
              <Handshake className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              Personalized Approach
            </h3>
            <p className="text-secondary-dark">
              Tailored coaching programs designed for your specific needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;