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
    certifications: ["Master Bricklayer Certification", "Heritage Building Specialist", "Safety Training Certified"]
  },
  {
    name: "Michael Davies",
    role: "Senior Bricklayer",
    experience: "12+ Years", 
    description: "Expert in commercial and residential projects with extensive experience in complex structural work.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    certifications: ["Advanced Bricklaying Qualification", "Commercial Construction License", "First Aid Certified"]
  },
  {
    name: "David Wilson",
    role: "Project Supervisor",
    experience: "15+ Years",
    description: "Ensures quality control and project management across all residential and commercial builds.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    certifications: ["Project Management Certified", "Quality Control Specialist", "Building Regulations Expert"]
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
    description: "Continuous learning and certification to deliver industry-leading bricklaying services."
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
    title: "Local Community Leaders",
    description: "Active members of Braintree business community for over 15 years."
  },
  {
    icon: Clock,
    title: "On-Time Project Delivery",
    description: "98% of projects completed on schedule and within agreed budget."
  }
];

export default function AboutPage() {
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
      <title>About Us - Portman Brickwork</title>
      <meta name="description" content="Learn about Portman Brickwork - 15+ years of professional bricklaying services. Meet our experienced team and discover our commitment to quality." />
      
      <Navigation />
      
      {/* About Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center section-fade">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About Portman Brickwork
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Building Braintree's future, one brick at a time. Discover our story, meet our team, and learn why we're the trusted choice for quality brickwork.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="section-fade">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2009, Portman Brickwork began as a small family business with a simple mission: to provide exceptional bricklaying services that stand the test of time. What started with one passionate craftsman has grown into a trusted team of skilled professionals.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over the years, we've had the privilege of working on hundreds of projects throughout Braintree and surrounding areas. From intimate residential gardens to large commercial developments, each project has strengthened our reputation for quality, reliability, and craftsmanship.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we're proud to be recognized as one of Braintree's leading bricklaying specialists, but we haven't forgotten our roots. We still approach every project with the same dedication, attention to detail, and personal service that built our reputation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => window.location.href = "tel:+1234567890"}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  data-testid="about-call-button"
                >
                  Call Us Today
                </Button>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="border-border hover:bg-muted"
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

      {/* Meet Our Team */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional craftsmanship on every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-card shadow-lg section-fade" data-testid={`team-member-${index}`}>
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.experience}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                  <div className="space-y-2">
                    {member.certifications.map((cert, certIndex) => (
                      <div key={certIndex} className="flex items-center text-xs text-muted-foreground">
                        <Check className="text-primary mr-2 h-3 w-3" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognition and certifications that demonstrate our commitment to excellence and professionalism.
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
                  <h3 className="font-semibold mb-2">Local Expertise</h3>
                  <p className="text-muted-foreground text-sm">Deep understanding of Braintree's architectural styles and building requirements.</p>
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