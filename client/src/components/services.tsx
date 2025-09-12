import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import brandDesign from "@assets/Portman Brickwork brick design_1757687674824.png";

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
  );
}
