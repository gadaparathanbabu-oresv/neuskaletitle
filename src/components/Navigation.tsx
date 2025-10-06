import { Button } from "../components/ui/button";

export const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/logo.png"
              alt="Neuskale Title Services - Professional Title Search Company" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-foreground">Title Services</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-smooth font-medium">
              Pricing
            </a>
            <a href="#why-neuskale" className="text-foreground hover:text-primary transition-smooth font-medium">
              Why Neuskale
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-smooth font-medium">
              Resources
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </a>
            <Button variant="outline" size="sm">
              Download Samples
            </Button>
            <Button variant="hero" size="sm">
              Try Free Report
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};