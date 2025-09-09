import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    rating: 5,
    text: "Outstanding workmanship! The team completed our garden wall project on time and within budget. The attention to detail was exceptional.",
    author: "Sarah Mitchell",
    role: "Essex Resident",
    initials: "SM"
  },
  {
    rating: 5,
    text: "Professional, reliable, and excellent quality. They completely transformed our driveway and it looks absolutely fantastic. Highly recommended!",
    author: "Mark Johnson",
    role: "Local Business Owner",
    initials: "MJ"
  },
  {
    rating: 5,
    text: "Fast, efficient, and clean work. The team was courteous and kept us informed throughout the entire project. Will definitely use them again.",
    author: "Lisa Brown",
    role: "Homeowner",
    initials: "LB"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers across Essex, Suffolk, and East Anglia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card shadow-lg section-fade" data-testid={`testimonial-${index}`}>
              <CardContent className="p-8">
                <div className="flex text-accent mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-semibold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
