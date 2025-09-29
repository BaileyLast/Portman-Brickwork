import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@assets/3.png";
import heroImage2 from "@assets/4.png";
import heroImage3 from "@assets/5.png";

export default function Hero() {

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start py-20 lg:py-32 min-h-[80vh]">
          {/* Content Side */}
          <div className="space-y-6">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
                Expert Brickwork
                <br />
                Built to <span className="text-secondary">Last</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Portman Brickwork has been delivering outstanding bricklaying services across Essex, Suffolk, and East Anglia since 1976. From residential extensions to commercial projects, we combine traditional skills with modern techniques to create structures that stand the test of time.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Button
                onClick={scrollToContact}
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg h-auto rounded-lg group"
                data-testid="hero-cta-button"
              >
                View our work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Visual Side */}
          <div className="relative lg:order-last">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 mb-4">
                <img 
                  src={heroImage1} 
                  alt="Professional bricklayer placing red bricks with precision"
                  className="rounded-2xl shadow-2xl w-full h-[300px] object-cover"
                />
              </div>
              
              {/* Secondary Image */}
              <div className="col-span-1">
                <img 
                  src={heroImage2} 
                  alt="Expert brick construction with professional tools"
                  className="rounded-xl shadow-xl w-full h-[200px] object-cover"
                />
              </div>
              
              {/* Third Image */}
              <div className="col-span-1">
                <img 
                  src={heroImage3} 
                  alt="Quality brick placement and construction technique"
                  className="rounded-xl shadow-xl w-full h-[200px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
