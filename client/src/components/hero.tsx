import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/1.png";

export default function Hero() {
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
    <section id="home" className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Expert Brickwork
                <span className="block text-primary mt-2">Built To Last</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Professional bricklaying services across Essex, Suffolk, and East Anglia. Quality craftsmanship with expertise since 1976.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCall}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg h-auto rounded-xl"
                data-testid="hero-call-button"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: (123) 456-7890
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg h-auto rounded-xl"
                data-testid="hero-quote-button"
              >
                Get Free Quote
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6">
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">48+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative lg:order-last">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional bricklaying construction site with quality materials and expert workmanship"
                className="rounded-2xl shadow-2xl w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
              
              {/* Floating Badge - positioned safely within container */}
              <div className="absolute bottom-4 left-4 bg-card border border-border rounded-xl p-3 shadow-lg hidden sm:block">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-semibold text-sm">Available Now</div>
                    <div className="text-xs text-muted-foreground">Free Consultations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
