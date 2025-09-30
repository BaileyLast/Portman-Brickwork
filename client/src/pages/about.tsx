import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";
import Contact from "@/components/contact";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Award, Shield, Users, Clock, Hammer, Target, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "John Smith",
    role: "Master Bricklayer & Founder",
    experience: "20+ Years",
    description: "Certified master craftsman specializing in heritage restoration and modern construction techniques.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    specialties: ["Heritage Restoration", "Structural Brickwork", "Traditional Techniques"]
  },
  {
    name: "Michael Davies",
    role: "Senior Bricklayer",
    experience: "12+ Years", 
    description: "Expert in commercial and residential projects with extensive experience in complex structural work.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    specialties: ["Commercial Projects", "Residential Extensions", "Complex Structures"]
  },
  {
    name: "David Wilson",
    role: "Project Supervisor",
    experience: "15+ Years",
    description: "Ensures quality control and project management across all residential and commercial builds.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    specialties: ["Project Management", "Quality Control", "Building Standards"]
  }
];

const values = [
  {
    icon: Target,
    title: "Precision & Quality",
    description: "Every brick placed with meticulous attention to detail and craftsmanship excellence."
  },
  {
    icon: Shield,
    title: "Trust & Reliability", 
    description: "Building lasting relationships through honest communication and dependable service."
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description: "Your vision becomes reality through our dedicated commitment to exceeding expectations."
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description: "Decades of experience and continuous improvement to deliver exceptional bricklaying services."
  }
];

const achievements = [
  {
    icon: Award,
    title: "Better Business Bureau A+ Rating",
    description: "Consistently rated for exceptional customer service and business practices."
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "Comprehensive coverage protecting both our team and your property."
  },
  {
    icon: Users,
    title: "Regional Community Leaders",
    description: "Active in Essex, Suffolk, and East Anglia business communities for nearly 50 years."
  },
  {
    icon: Clock,
    title: "On-Time Project Delivery",
    description: "98% of projects completed on schedule and within agreed budget."
  }
];

export default function AboutPage() {
  useEffect(() => {
    // Set document title and meta description
    document.title = "About Us - Portman Brickwork";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Portman Brickwork - expertise in bricklaying since 1976. Serving Essex, Suffolk, and East Anglia with nearly 50 years of professional craftsmanship.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Learn about Portman Brickwork - expertise in bricklaying since 1976. Serving Essex, Suffolk, and East Anglia with nearly 50 years of professional craftsmanship.';
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      
      <Navigation />
      
      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="section-fade">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Established in 1976, Portman Brickwork began as a small family business with a simple mission: to provide exceptional bricklaying services that stand the test of time. What started with one passionate craftsman has grown into a trusted team of skilled professionals over nearly five decades.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over the years, we've had the privilege of working on hundreds of projects throughout Essex, Suffolk, and East Anglia. From intimate residential gardens to commercial developments, each project has strengthened our reputation for quality, reliability, and craftsmanship.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we're proud to be recognized as one of the region's leading bricklaying specialists, but we haven't forgotten our roots. We still approach every project with the same dedication, attention to detail, and personal service that built our reputation since 1976.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToContact}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  data-testid="about-quote-button"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
            
            <div className="section-fade">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional bricklayer at work" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every project and interaction we have with our valued customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-card shadow-lg text-center section-fade" data-testid={`value-${index}`}>
                  <CardContent className="p-8">
                    <div className="text-primary text-4xl mb-4 flex justify-center">
                      <IconComponent />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What sets us apart and demonstrates our commitment to excellence and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="bg-card shadow-lg section-fade" data-testid={`achievement-${index}`}>
                  <CardContent className="p-8 flex items-start space-x-4">
                    <div className="text-primary text-3xl flex-shrink-0">
                      <IconComponent />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Summary */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center section-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Why Choose Portman Brickwork?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
              <div className="flex items-start space-x-3">
                <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Regional Expertise</h3>
                  <p className="text-muted-foreground text-sm">Deep understanding of Essex, Suffolk, and East Anglian architectural styles and building requirements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Quality Materials</h3>
                  <p className="text-muted-foreground text-sm">Premium bricks and materials sourced from trusted local and national suppliers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Competitive Pricing</h3>
                  <p className="text-muted-foreground text-sm">Fair, transparent pricing with detailed quotes and no hidden costs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Clean & Tidy</h3>
                  <p className="text-muted-foreground text-sm">Professional worksite management with daily cleanup and respect for your property.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Project Warranty</h3>
                  <p className="text-muted-foreground text-sm">Comprehensive warranties on all work with ongoing support and maintenance.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Emergency Service</h3>
                  <p className="text-muted-foreground text-sm">Available for urgent repairs and emergency brickwork requirements.</p>
                </div>
              </div>
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