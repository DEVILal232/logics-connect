import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      content: "LOGICS has transformed our leadership team's effectiveness. The results have been remarkable.",
      rating: 5,
      image: "photo-1519389950473-47ba0277781c",
    },
    {
      name: "Michael Chen",
      role: "Engineering Student",
      content: "The personalized coaching approach helped me achieve my career goals faster than I expected.",
      rating: 5,
      image: "photo-1581091226825-a6a2a5aee158",
    },
    {
      name: "Emma Davis",
      role: "Business Student",
      content: "Working with LOGICS was a game-changer for my business and personal growth.",
      rating: 5,
      image: "photo-1486312338219-ce68d2c6f44d",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-16">
          Student Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage
                    src={`https://images.unsplash.com/${testimonial.image}`}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-secondary-dark text-center mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="text-center">
                  <p className="font-semibold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-secondary-dark">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;