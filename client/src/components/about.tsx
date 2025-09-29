import { Check, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@assets/3.png";

const features = [
  {
    title: "Expertise Since 1976",
    description: "Nearly 50 years of specialist bricklaying experience across residential and commercial projects."
  },
  {
    title: "Quality Guarantee",
    description: "We stand behind our work with comprehensive warranties on all projects."
  },
  {
    title: "Regional Expertise",
    description: "Serving Essex, Suffolk, and throughout East Anglia with local building knowledge."
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
              Why Choose Portman Brickwork?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With expertise in bricklaying since 1976, we've built our reputation on quality workmanship, reliability, and customer satisfaction across Essex, Suffolk, and East Anglia. Every project, big or small, receives our full attention to detail.
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
              src={aboutImage} 
              alt="Professional bricklayer placing red bricks with precision" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
