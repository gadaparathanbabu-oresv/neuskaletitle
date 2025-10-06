import { Button } from "../components/ui/button";
import { Shield, Clock, Zap, Award } from "lucide-react";
import heroImage from "@/assets/hero-title-services.jpeg";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-subtle py-20 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Trust Badges Bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 pb-8 border-b border-border">
          <div className="flex items-center gap-2 text-sm">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">$1M E&O Insured</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Qualia Integrated</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Award className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">15+ Years Experience</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* ETO Badge */}
            <div className="inline-block">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
                ⭐ Experience • Try • Order (ETO) Model
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Professional <span className="text-primary">Title Search Services</span> You Can Try Risk-Free
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              The only title search company offering the revolutionary ETO model. Experience our service, 
              try a free sample report, then order with confidence. Serving real estate attorneys, 
              title companies, lenders, and investors nationwide with 24-48 hour turnaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Try a Free Report
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Get a Quote
              </Button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24-48hr</div>
                <div className="text-sm text-muted-foreground">Fast Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50</div>
                <div className="text-sm text-muted-foreground">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$1M</div>
                <div className="text-sm text-muted-foreground">E&O Insurance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Qualia Ready</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Professional title search services - Nationwide property title reports for attorneys, lenders, and investors"
                className="rounded-2xl shadow-professional w-full h-auto"
                loading="eager"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-hero rounded-2xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};