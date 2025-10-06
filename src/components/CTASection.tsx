import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Experience • Try • Order Model
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Experience the Neuskale Difference?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start with a FREE sample title report. No commitment, no credit card required. 
            See our quality and accuracy firsthand before you order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90 shadow-professional"
            >
              Try a Free Report
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Get a Quote
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/90">
            <div>
              <div className="text-3xl font-bold mb-2">24-48 Hours</div>
              <div className="text-sm">Fast Standard Turnaround</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$1M E&O</div>
              <div className="text-sm">Insurance Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7 Support</div>
              <div className="text-sm">Dedicated Account Managers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};