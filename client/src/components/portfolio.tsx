import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import portfolioImage1 from "@assets/2.png";
import portfolioImage2 from "@assets/3.png";
import portfolioImage3 from "@assets/4.png";
import portfolioImage4 from "@assets/5.png";
import portfolioImage5 from "@assets/1.png";
import portfolioImage6 from "@assets/2.png";

const portfolioItems = [
  {
    image: portfolioImage1,
    title: "Precision Brickwork",
    description: "Expert mortar application and precise brick placement for lasting results.",
    alt: "Professional mortar work on white bricks"
  },
  {
    image: portfolioImage2,
    title: "Traditional Red Brick",
    description: "Classic red brick construction with skilled craftsmanship and attention to detail.",
    alt: "Traditional red brick laying work"
  },
  {
    image: portfolioImage3,
    title: "Professional Tools & Technique",
    description: "Using specialized tools and techniques for perfect brick alignment and finishing.",
    alt: "Professional bricklaying tools and techniques"
  },
  {
    image: portfolioImage4,
    title: "Quality Craftsmanship",
    description: "Expert brick handling and placement ensuring structural integrity and aesthetic appeal.",
    alt: "Expert brick placement and handling"
  },
  {
    image: portfolioImage5,
    title: "Construction Site Excellence",
    description: "Professional site management with quality materials and expert construction techniques.",
    alt: "Professional construction site with bricks"
  },
  {
    image: portfolioImage6,
    title: "Detailed Mortar Work",
    description: "Precise mortar application and joint finishing for professional results.",
    alt: "Detailed mortar work and finishing"
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
