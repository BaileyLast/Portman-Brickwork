import Navigation from "@/components/navigation";
import Services from "@/components/services";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";
import { useEffect } from "react";

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

  return (
    <div className="min-h-screen">
      <title>Services - Braintree bricklaying</title>
      <meta name="description" content="Comprehensive bricklaying services in Braintree. From residential to commercial projects, repairs to decorative work. Professional, insured, and experienced." />
      
      <Navigation />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
      <FloatingCTA />
    </div>
  );
}