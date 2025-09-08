import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";
import Contact from "@/components/contact";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

const portfolioProjects = [
  {
    id: 1,
    title: "Modern Residential Extension",
    category: "Residential",
    location: "Braintree Center",
    date: "2024",
    description: "Complete brick extension with contemporary design featuring matching mortar and precision pointing.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    details: [
      "500 sq ft extension",
      "Traditional red brick with lime mortar",
      "Energy-efficient cavity wall construction",
      "Completed in 3 weeks"
    ]
  },
  {
    id: 2,
    title: "Commercial Office Building",
    category: "Commercial",
    location: "Braintree Business Park",
    date: "2024",
    description: "Large-scale commercial project with mixed brick patterns and architectural detailing.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    details: [
      "2,500 sq ft facade",
      "Multi-colored brick pattern design",
      "Steel frame integration",
      "6-week completion timeline"
    ]
  },
  {
    id: 3,
    title: "Heritage Garden Wall",
    category: "Residential",
    location: "Historic Braintree",
    date: "2024",
    description: "Restoration of Victorian-era garden boundary wall using traditional techniques and materials.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    details: [
      "150 linear feet restoration",
      "Hand-made heritage bricks",
      "Traditional lime mortar pointing",
      "Conservation area approved"
    ]
  },
  {
    id: 4,
    title: "Premium Brick Driveway",
    category: "Residential",
    location: "Braintree Heights",
    date: "2023",
    description: "Luxury driveway installation with herringbone pattern and professional edging work.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    details: [
      "400 sq ft driveway",
      "Block paving herringbone design",
      "Drainage system integration",
      "10-year warranty included"
    ]
  },
  {
    id: 5,
    title: "Industrial Warehouse Facade",
    category: "Commercial",
    location: "Braintree Industrial Estate",
    date: "2023",
    description: "Robust industrial brickwork with reinforced structural elements and weatherproofing.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    details: [
      "5,000 sq ft warehouse wall",
      "Engineering brick construction",
      "Thermal insulation integration",
      "8-week project completion"
    ]
  },
  {
    id: 6,
    title: "Historic Church Restoration",
    category: "Restoration",
    location: "Central Braintree",
    date: "2023",
    description: "Careful restoration of 18th-century church walls preserving historical integrity.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    details: [
      "Heritage listed building",
      "Specialized lime mortar restoration",
      "Hand-selected period bricks",
      "Council heritage approval"
    ]
  }
];

const categories = ["All", "Residential", "Commercial", "Restoration"];

export default function PortfolioPage() {
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <title>Portfolio - Portman Brickwork</title>
      <meta name="description" content="View Portman Brickwork's portfolio of completed bricklaying projects in Braintree. Residential, commercial, and restoration work showcasing quality craftsmanship." />
      
      <Navigation />
      
      {/* Portfolio Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center section-fade">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Showcasing our finest bricklaying projects across Braintree and surrounding areas. From residential homes to commercial buildings.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recent Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each project represents our commitment to quality, precision, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <Card 
                key={project.id}
                className="portfolio-item group cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 section-fade"
                data-testid={`portfolio-project-${project.id}`}
              >
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {project.details.slice(0, 2).map((detail, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="section-fade">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="section-fade">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="section-fade">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="section-fade">
              <div className="text-4xl font-bold text-primary mb-2">25</div>
              <div className="text-muted-foreground">Miles Service Radius</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss your bricklaying needs and create something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = "tel:+1234567890"}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg h-auto"
                data-testid="portfolio-call-button"
              >
                Call: (123) 456-7890
              </Button>
              <Button
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg h-auto"
                data-testid="portfolio-quote-button"
              >
                Get Free Quote
              </Button>
            </div>
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