import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";
import { useEffect } from "react";

export default function Home() {
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
      <title>Portman Brickwork - Professional Bricklaying Services</title>
      <meta name="description" content="Professional bricklaying services by Portman Brickwork across Essex, Suffolk, and East Anglia. Quality craftsmanship with expertise since 1976. Free quotes available." />
      
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
