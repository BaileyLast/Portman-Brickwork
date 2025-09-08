import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="home" className="relative">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" 
        }}
      />
      <div className="hero-bg absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expert Brickwork<br />
            <span className="text-secondary">Built to Last</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Professional bricklaying services in Braintree and surrounding areas. Quality craftsmanship with over 15 years of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleCall}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg h-auto"
              data-testid="hero-call-button"
            >
              <Phone className="mr-2" />
              Call: (123) 456-7890
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 text-lg h-auto"
              data-testid="hero-quote-button"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
