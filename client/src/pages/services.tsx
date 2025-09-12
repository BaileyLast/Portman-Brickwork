import Navigation from "@/components/navigation";
import Services from "@/components/services";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";
import Contact from "@/components/contact";
import { useEffect } from "react";
import { Phone, Check, Star, Award, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const serviceDetails = [
  {
    category: "Brickwork & Walls",
    description: "Decorative and structural walls for your property",
    services: [
      "Garden walls (decorative & structural)",
      "Boundary walls / fencing bases",
      "Retaining walls",
      "Feature walls and decorative brickwork"
    ]
  },
  {
    category: "Extensions & Home Builds", 
    description: "Brickwork for home extensions and new builds",
    services: [
      "House extensions (brickwork only)",
      "Conservatory bases",
      "Garage builds",
      "Single-storey and two-storey extensions"
    ]
  },
  {
    category: "Repairs & Maintenance",
    description: "Expert restoration and repair of existing brickwork",
    services: [
      "Repointing (renewing mortar joints)",
      "Brick repairs (damaged/cracked bricks replaced)",
      "Wall strengthening & restoration",
      "Chimney repairs/rebuilds"
    ]
  },
  {
    category: "Outdoor & Garden Features",
    description: "Beautiful brick features for your outdoor spaces",
    services: [
      "BBQ areas, planters, decorative walls",
      "Brick steps & pathways",
      "Garden seating areas",
      "Raised flower beds and planters"
    ]
  },
  {
    category: "Driveways & Hard Landscaping",
    description: "Durable brick and block paving solutions",
    services: [
      "Brick/block paved driveways",
      "Edging & kerbing",
      "Patio areas and walkways",
      "Entrance features and gateways"
    ]
  },
  {
    category: "Specialist Work",
    description: "Bespoke and decorative brickwork projects",
    services: [
      "Decorative brickwork / patterns",
      "Arches, pillars & bespoke features",
      "Traditional lime mortar work",
      "Heritage and period property work"
    ]
  }
];

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
      <title>Services - Portman Brickwork</title>
      <meta name="description" content="Comprehensive bricklaying services by Portman Brickwork across Essex, Suffolk, and East Anglia. From residential to commercial projects, repairs to decorative work. Professional, insured, and experienced." />
      
      <Navigation />
      
      {/* Services Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" 
          }}
        />
        {/* Blue Overlay */}
        <div className="hero-bg absolute inset-0" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main content */}
            <div className="section-fade">
              <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full mb-6">
                <span className="text-secondary font-medium">Our Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Complete 
                <span className="block text-secondary">Bricklaying</span>
                Solutions
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                From garden walls to house extensions, we bring your vision to life with expert craftsmanship and attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleCall}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg h-auto"
                  data-testid="services-call-button"
                >
                  <Phone className="mr-2" />
                  Call: (123) 456-7890
                </Button>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg h-auto"
                  data-testid="services-quote-button"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
            
            {/* Right side - Service highlights */}
            <div className="section-fade">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">6</div>
                    <div className="text-sm text-slate-300">Service Categories</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">24+</div>
                    <div className="text-sm text-slate-300">Specialist Services</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">48+</div>
                    <div className="text-sm text-slate-300">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                    <div className="text-sm text-slate-300">Quality Guarantee</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <Services />

      {/* Detailed Service Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Service Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Detailed breakdown of our comprehensive bricklaying services for every project type.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {serviceDetails.map((category, index) => (
              <Card key={index} className="bg-card shadow-lg section-fade" data-testid={`service-category-${index}`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{category.category}</h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start space-x-3">
                        <Check className="text-primary mt-1 h-4 w-4 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                  <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <strong>Project Size:</strong> Square footage and complexity
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <strong>Brick Type:</strong> Standard, premium, or specialty bricks
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <div>
                    <strong>Site Access:</strong> Accessibility and preparation needs
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
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
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <div>Contact us by phone or online form</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <div>Schedule free on-site assessment</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <div>Receive detailed written estimate</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
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