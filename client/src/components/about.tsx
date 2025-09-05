import { Check, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "15+ Years Experience",
    description: "Extensive experience in residential and commercial bricklaying projects."
  },
  {
    title: "Fully Insured & Licensed",
    description: "Complete insurance coverage and proper licensing for your peace of mind."
  },
  {
    title: "Quality Guarantee",
    description: "We stand behind our work with comprehensive warranties on all projects."
  },
  {
    title: "Local Expertise",
    description: "Deep knowledge of Braintree area building requirements and local materials."
  }
];

export default function About() {
  const handleCall = () => {
    window.location.href = "tel:+1234567890";
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="section-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Braintree bricklaying?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 15 years of experience in the construction industry, we've built our reputation on quality workmanship, reliability, and customer satisfaction. Every project, big or small, receives our full attention to detail.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3" data-testid={`feature-${index}`}>
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleCall}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                data-testid="about-call-button"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call for Quote
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-border hover:bg-muted"
                data-testid="about-contact-button"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="section-fade">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional bricklayer at work" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
