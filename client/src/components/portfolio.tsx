import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import portfolioImage1 from "@assets/7.png";
import portfolioImage2 from "@assets/9.png";
import portfolioImage3 from "@assets/6.png";
import portfolioImage4 from "@assets/10.png";
import portfolioImage5 from "@assets/4.png";
import portfolioImage6 from "@assets/1.png";

const portfolioItems = [
  {
    image: portfolioImage1,
    title: "Driveways (Block Paving)",
    description: "Interlocking brick/block patterns for vehicle access.",
    alt: "Professional block paving driveway construction"
  },
  {
    image: portfolioImage2,
    title: "Garden / Boundary Walls",
    description: "Single-skin or double-skin brick walls for dividing property lines.",
    alt: "Garden boundary wall construction"
  },
  {
    image: portfolioImage3,
    title: "Patios & Pathways",
    description: "Brick or block laid flat in patterns (herringbone, stretcher bond, basket weave).",
    alt: "Patio and pathway brick laying"
  },
  {
    image: portfolioImage4,
    title: "Brick Barbecues / Outdoor Kitchens",
    description: "Permanent brick structures for garden use.",
    alt: "Brick barbecue and outdoor kitchen construction"
  },
  {
    image: portfolioImage5,
    title: "Pillars & Gate Posts",
    description: "Decorative or structural brickwork for gates, fencing, or entryways.",
    alt: "Decorative brick pillars and gate posts"
  },
  {
    image: portfolioImage6,
    title: "House Extensions / Porches",
    description: "Brickwork to match existing home style for added rooms or porch areas.",
    alt: "House extension and porch brickwork"
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The work we do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional brickwork services across Essex, Suffolk, and East Anglia.
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
