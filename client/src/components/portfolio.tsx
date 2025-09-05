import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Residential Extension",
    description: "Modern brick extension with matching brickwork to existing structure.",
    alt: "Residential brick house project"
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Commercial Building",
    description: "Large-scale commercial project with precision brickwork and modern design.",
    alt: "Professional bricklaying craftsmanship"
  },
  {
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Garden Wall",
    description: "Decorative garden wall with custom pattern work and landscape integration.",
    alt: "Decorative garden brick wall"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Office Complex",
    description: "Contemporary office building with mixed brick patterns and architectural features.",
    alt: "Modern commercial brick facade"
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Brick Driveway",
    description: "Premium brick driveway with herringbone pattern and professional edging.",
    alt: "Professional brick driveway"
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Historic Restoration",
    description: "Careful restoration of period brickwork maintaining original character and charm.",
    alt: "Historic brick restoration project"
  }
];

export default function Portfolio() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Recent Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the quality and craftsmanship that goes into every project we complete.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className="portfolio-item group cursor-pointer overflow-hidden shadow-lg section-fade"
              data-testid={`portfolio-item-${index}`}
            >
              <div className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            data-testid="portfolio-cta"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
