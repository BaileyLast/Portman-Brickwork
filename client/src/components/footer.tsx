import { Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import logoImage from "@assets/Portman Brickwork Logo _1757687758603.png";

export default function Footer() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Professional bricklaying services by Portman Brickwork across Essex, Suffolk, and East Anglia. Quality craftsmanship with expertise since 1976.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link 
                  href="/services"
                  className="hover:text-primary transition-colors"
                  data-testid="footer-service-residential"
                >
                  Residential Bricklaying
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="hover:text-primary transition-colors"
                  data-testid="footer-service-commercial"
                >
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="hover:text-primary transition-colors"
                  data-testid="footer-service-repairs"
                >
                  Repairs & Restoration
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="hover:text-primary transition-colors"
                  data-testid="footer-service-structural"
                >
                  Structural Work
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-300">
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
                <Link 
                  href="/"
                  className="hover:text-primary transition-colors"
                  data-testid="footer-link-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="hover:text-primary transition-colors"
                  data-testid="footer-link-services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className="hover:text-primary transition-colors"
                  data-testid="footer-link-about"
                >
                  About
                </Link>
              </li>
              <li>
                <button 
                  onClick={scrollToContact}
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
