import { Target, Users, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Strategic Planning",
      description: "Develop clear, actionable plans to achieve your professional and personal goals.",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Leadership Development",
      description: "Enhance your leadership skills and learn to inspire and guide teams effectively.",
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Performance Coaching",
      description: "Optimize your performance through targeted coaching and feedback sessions.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-secondary text-center mb-4">
                {service.title}
              </h3>
              <p className="text-secondary-dark text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;