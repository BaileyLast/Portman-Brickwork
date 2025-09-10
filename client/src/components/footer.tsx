import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logoImage from "@assets/Portman Brickwork Logo _1757353034829.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="Portman Brickwork" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Professional bricklaying services by Portman Brickwork across Essex, Suffolk, and East Anglia. Quality craftsmanship with expertise since 1976.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="social-facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="social-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="social-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-service-residential"
                >
                  Residential Bricklaying
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-service-commercial"
                >
                  Commercial Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-service-repairs"
                >
                  Repairs & Restoration
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-service-structural"
                >
                  Structural Work
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@portmanbrickwork.co.uk</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Essex, Suffolk & East Anglia</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-link-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-link-quote"
                >
                  Get Quote
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; 2024 Portman Brickwork. All rights reserved. | Licensed & Insured Professional Bricklaying Services
          </p>
        </div>
      </div>
    </footer>
  );
}
