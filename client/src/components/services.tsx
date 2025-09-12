import { Home, Building, Wrench, Shield, Palette, Calculator, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import brandDesign from "@assets/Portman Brickwork brick design_1757687674824.png";

const services = [
  {
    icon: Home,
    title: "Residential Bricklaying",
    description: "Professional bricklaying for homes, garden walls, driveways, and residential extensions.",
    features: ["House extensions", "Garden walls", "Driveways"]
  },
  {
    icon: Building,
    title: "Commercial Projects",
    description: "Large-scale commercial bricklaying for offices, retail spaces, and industrial buildings.",
    features: ["Office buildings", "Retail spaces", "Industrial projects"]
  },
  {
    icon: Wrench,
    title: "Repairs & Restoration",
    description: "Expert repair and restoration services for damaged or aging brickwork structures.",
    features: ["Repointing", "Crack repairs", "Historic restoration"]
  },
  {
    icon: Shield,
    title: "Structural Work",
    description: "Reliable structural brickwork for foundations, load-bearing walls, and support structures.",
    features: ["Load-bearing walls", "Foundation work", "Support structures"]
  },
  {
    icon: Palette,
    title: "Decorative Brickwork",
    description: "Artistic and decorative brickwork to enhance the aesthetic appeal of your property.",
    features: ["Feature walls", "Arches", "Custom patterns"]
  },
  {
    icon: Calculator,
    title: "Consultation & Quotes",
    description: "Professional consultation and detailed quotes for all your bricklaying project needs.",
    features: ["Free quotes", "Project planning", "Material advice"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <div className="flex items-center justify-center gap-8 mb-4">
            <img 
              src={brandDesign} 
              alt="Portman Brickwork Design" 
              className="h-16 w-auto hidden sm:block"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
            <img 
              src={brandDesign} 
              alt="Portman Brickwork Design" 
              className="h-16 w-auto hidden sm:block transform scale-x-[-1]"
            />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From residential projects to commercial builds, we deliver exceptional bricklaying services with attention to detail.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="service-card bg-card shadow-lg transition-all duration-300 hover:shadow-xl section-fade"
                data-testid={`service-card-${index}`}
              >
                <CardContent className="p-8">
                  <div className="text-primary text-4xl mb-4">
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="text-primary mr-2 h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
