import Navigation from "@/components/navigation";
import Services from "@/components/services";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";
import Contact from "@/components/contact";
import { useEffect } from "react";
import { Phone, Star, Award, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import servicesHeroImage from "@assets/6.png";
import brickIcon from "@assets/Portman Brickwork brick design_1757687674824.png";


const whyChooseUs = [
  {
    icon: Award,
    title: "Expertise Since 1976",
    description: "Proven track record with hundreds of completed projects"
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "Complete protection and peace of mind for every project"
  },
  {
    icon: Star,
    title: "Quality Guarantee",
    description: "We stand behind our work with comprehensive warranties"
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Projects completed on schedule and within budget"
  }
];

export default function ServicesPage() {
  useEffect(() => {
    // Set document title and meta description
    document.title = "Services - Portman Brickwork";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive bricklaying services by Portman Brickwork across Essex, Suffolk, and East Anglia. From residential to commercial projects, repairs to decorative work. Professional, insured, and experienced.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Comprehensive bricklaying services by Portman Brickwork across Essex, Suffolk, and East Anglia. From residential to commercial projects, repairs to decorative work. Professional, insured, and experienced.';
      document.head.appendChild(newMetaDescription);
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section-fade').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
    <div className="min-h-screen">
      
      <Navigation />
      
      {/* Services Hero Section */}
      <section className="bg-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-20">
            {/* Left side - Main content */}
            <div className="section-fade space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Complete 
                <span className="block text-secondary">Bricklaying</span>
                Solutions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                From garden walls to house extensions, we bring your vision to life with expert craftsmanship and attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={handleCall}
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg h-auto rounded-lg"
                  data-testid="services-call-button"
                >
                  <Phone className="mr-2" />
                  Call: (123) 456-7890
                </Button>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg h-auto rounded-lg"
                  data-testid="services-quote-button"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
            
            {/* Right side - Authentic brickwork image */}
            <div className="section-fade relative lg:order-last space-y-4">
              <img 
                src={servicesHeroImage} 
                alt="Professional brickwork construction showcasing quality craftsmanship"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              {/* Red decorative line */}
              <div className="h-1 bg-secondary"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <Services />


      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Portman Brickwork?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern techniques to deliver superior results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="bg-card shadow-lg text-center section-fade" data-testid={`why-choose-${index}`}>
                  <CardContent className="p-8">
                    <div className="text-primary text-4xl mb-4 flex justify-center">
                      <IconComponent />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Information Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide detailed, upfront quotes with no hidden costs or surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="section-fade">
              <h3 className="text-2xl font-bold mb-6">What Affects Project Cost?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <img src={brickIcon} alt="brick icon" className="mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <strong>Project Size:</strong> Square footage and complexity
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <img src={brickIcon} alt="brick icon" className="mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <strong>Brick Type:</strong> Standard, premium, or specialty bricks
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <img src={brickIcon} alt="brick icon" className="mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <strong>Site Access:</strong> Accessibility and preparation needs
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <img src={brickIcon} alt="brick icon" className="mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <strong>Timeline:</strong> Standard vs. expedited completion
                  </div>
                </li>
              </ul>
            </div>

            <Card className="bg-card shadow-lg section-fade">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Free Quote Process</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold border-2 border-secondary">1</div>
                    <div>Contact us by phone or online form</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold border-2 border-secondary">2</div>
                    <div>Schedule free on-site assessment</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold border-2 border-secondary">3</div>
                    <div>Receive detailed written estimate</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold border-2 border-secondary">4</div>
                    <div>Review and approve before work begins</div>
                  </div>
                </div>
                <Button 
                  onClick={scrollToContact}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-6"
                  data-testid="pricing-cta"
                >
                  Get Your Free Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
      
      <Footer />
      <FloatingCTA />
    </div>
  );
}