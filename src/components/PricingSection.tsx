import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

export const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Current Owner (O&E) Search",
      price: "$49",
      description: "Owner & Encumbrance - Up to 30 Years",
      features: [
        "Current owner information",
        "Open liens and encumbrances",
        "Judgments and tax liens",
        "Legal description",
        "24-48 hour turnaround",
        "Email delivery (PDF format)"
      ]
    },
    {
      name: "Two Owner Search",
      price: "$75",
      description: "Foreclosure Search - 2 Owners",
      popular: true,
      features: [
        "Two owner chain of title",
        "Complete lien search",
        "Foreclosure documentation",
        "Mortgage assignments",
        "Document copies included",
        "24-48 hour turnaround"
      ]
    },
    {
      name: "30-Year Full Search",
      price: "$125",
      description: "Complete Title History",
      features: [
        "30-year chain of title",
        "All liens and encumbrances",
        "Complete document copies",
        "Tax history included",
        "Comprehensive examination",
        "24-48 hour turnaround"
      ]
    }
  ];

  const additionalServices = [
    "Commercial Title Search",
    "Title Curative Services",
    "Customized Report Formats",
    "Bulk/Portfolio Orders (Special Pricing)",
    "Rush Services Available",
    "State-Specific Searches"
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            Transparent Pricing
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">
            Competitive Rates, No Hidden Fees
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Affordable title search services without compromising quality or speed. 
            Try a free sample report to see our quality firsthand.
          </p>
        </div>

        {/* Free Trial CTA Box */}
        <div className="mb-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-hero text-primary-foreground border-none">
            <CardContent className="py-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Try Before You Order</h3>
              </div>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Experience our quality with a FREE sample title report. No commitment, 
                no credit card required. See why professionals choose Neuskale.
              </p>
              <Button 
                variant="default" 
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 shadow-professional"
              >
                Get Your Free Sample Report
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`transition-all duration-300 hover:shadow-professional hover:-translate-y-2 ${
                plan.popular ? 'border-primary border-2 relative' : 'border-primary/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-button">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2 text-foreground">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/search</span>
                </div>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-foreground">Additional Services Available</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {additionalServices.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Custom Pricing CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Need bulk orders, specialized searches, or custom report formats?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Contact Us for Custom Pricing
            </Button>
            <Button variant="hero" size="lg">
              Schedule a Consultation
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">✓ $1M E&O Insured</span>
              <span className="flex items-center gap-2">✓ Qualia Integrated</span>
              <span className="flex items-center gap-2">✓ 24/7 Support</span>
              <span className="flex items-center gap-2">✓ Volume Discounts Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};