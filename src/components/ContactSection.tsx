import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to begin your title search? Contact our expert team for fast, 
            reliable service on all your real estate transactions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-card border-border text-center">
            <CardHeader>
              <CardTitle className="text-foreground">Call Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-bold text-primary">(555) 123-4567</div>
              <p className="text-muted-foreground">
                Speak directly with a title search specialist
              </p>
              <Button variant="professional" className="w-full">
                Call Now
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-card border-border text-center">
            <CardHeader>
              <CardTitle className="text-foreground">Email Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-lg font-semibold text-primary">info@neuskaletitle.com</div>
              <p className="text-muted-foreground">
                Send us your title search requirements
              </p>
              <Button variant="professional" className="w-full">
                Send Email
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-card border-border text-center">
            <CardHeader>
              <CardTitle className="text-foreground">Online Quote</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-lg font-semibold text-primary">Fast & Easy</div>
              <p className="text-muted-foreground">
                Get an instant quote for your title search
              </p>
              <Button variant="hero" className="w-full">
                Get Quote
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Professional Title Search Services</h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the difference of working with certified title professionals. 
              Fast turnaround, competitive rates, and unmatched accuracy.
            </p>
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground">
              Start Your Title Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};