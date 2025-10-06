import { Shield, Clock, Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 pb-8 border-b border-primary-foreground/20">
          <div className="flex items-center gap-2 text-sm">
            <Shield className="w-5 h-5" />
            <span>$1M E&O Insured</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Zap className="w-5 h-5" />
            <span>Qualia Integrated</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-5 h-5" />
            <span>24/7 Client Support</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>ALTA Member</span>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/logo.png"
                alt="Neuskale Title Services Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-xl font-bold"></span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Professional title search services with the revolutionary Experience-Try-Order model. 
              Serving attorneys, lenders, and investors nationwide since 2010.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li><a href="#services" className="hover:text-primary-foreground transition-smooth">Current Owner (O&E) Search</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-smooth">Two Owner Search</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-smooth">30-Year Full Search</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-smooth">Commercial Title Search</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-smooth">Title Curative</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-smooth">Bulk/Portfolio Orders</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li><a href="#why-neuskale" className="hover:text-primary-foreground transition-smooth">Why Neuskale (ETO Model)</a></li>
              <li><a href="#pricing" className="hover:text-primary-foreground transition-smooth">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-primary-foreground transition-smooth">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-primary-foreground transition-smooth">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-smooth">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <p><strong>Phone:</strong><br />(555) 123-4567</p>
              <p><strong>Email:</strong><br />info@neuskale.com</p>
              <p><strong>Hours:</strong><br />24/7 Support Available</p>
            </div>
            <div className="pt-4">
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-1 text-primary-foreground/80 text-sm">
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80 text-sm">
          <p>&copy; 2024 Neuskale Title Services. All rights reserved. Licensed Title Search Company with $1M E&O Insurance Coverage.</p>
          <p className="mt-2">Serving real estate attorneys, title companies, mortgage lenders, and investors nationwide.</p>
        </div>
      </div>
    </footer>
  );
};