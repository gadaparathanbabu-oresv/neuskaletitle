import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ComparisonSection = () => {
  const features = [
    {
      feature: "Turnaround Time",
      neuskale: "24-48 hours standard",
      competitors: "3-5 business days",
      advantage: true
    },
    {
      feature: "Free Trial/Sample",
      neuskale: "FREE custom report on your property",
      competitors: "Generic sample only",
      advantage: true
    },
    {
      feature: "E&O Insurance",
      neuskale: "$1 Million coverage",
      competitors: "Often not disclosed or lower",
      advantage: true
    },
    {
      feature: "Qualia Integration",
      neuskale: "Fully integrated - seamless upload",
      competitors: "Manual upload required",
      advantage: true
    },
    {
      feature: "24/7 Support",
      neuskale: "Dedicated account managers",
      competitors: "Email only, business hours",
      advantage: true
    },
    {
      feature: "Custom Report Formats",
      neuskale: "Unlimited customization",
      competitors: "Standard format only",
      advantage: true
    },
    {
      feature: "Bulk Pricing",
      neuskale: "Volume discounts available",
      competitors: "Limited or unavailable",
      advantage: true
    },
    {
      feature: "Report Quality",
      neuskale: "Certified examiners + detailed analysis",
      competitors: "Basic data extraction",
      advantage: true
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            Why Choose Neuskale
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">
            How We Compare to Traditional Title Search Companies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the Neuskale difference. We don't just match the competition - we exceed it in every category.
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="max-w-5xl mx-auto overflow-hidden border-primary/20">
          <CardContent className="p-0">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gradient-hero text-primary-foreground">
              <div className="p-6 border-r border-primary-foreground/20">
                <h3 className="text-lg font-bold">Feature</h3>
              </div>
              <div className="p-6 border-r border-primary-foreground/20 bg-primary-foreground/10">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5" />
                  <h3 className="text-lg font-bold">Neuskale Title Services</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">Traditional Companies</h3>
              </div>
            </div>

            {/* Comparison Rows */}
            {features.map((item, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 ${
                  index % 2 === 0 ? 'bg-background' : 'bg-muted/30'
                }`}
              >
                <div className="p-6 border-r border-border">
                  <p className="font-semibold text-foreground">{item.feature}</p>
                </div>
                <div className="p-6 border-r border-border bg-primary/5">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-foreground">{item.neuskale}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{item.competitors}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Key Advantages */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          <Card className="text-center border-primary/20 hover:shadow-professional transition-smooth">
            <CardContent className="pt-8 pb-8">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">2x Faster</h3>
              <p className="text-muted-foreground text-sm">
                Get your reports in 24-48 hours while competitors take 3-5 business days
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/20 hover:shadow-professional transition-smooth">
            <CardContent className="pt-8 pb-8">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Risk-Free Trial</h3>
              <p className="text-muted-foreground text-sm">
                Only company offering FREE custom title reports on your actual properties
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/20 hover:shadow-professional transition-smooth">
            <CardContent className="pt-8 pb-8">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Protected</h3>
              <p className="text-muted-foreground text-sm">
                $1M E&O insurance coverage on every search for complete peace of mind
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="max-w-3xl mx-auto bg-card border border-primary/20 rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Experience the Difference Yourself
            </h3>
            <p className="text-muted-foreground mb-6">
              Don't take our word for it. Try a free sample report and see why professionals 
              are switching to Neuskale for faster, more accurate title searches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Free Sample Report
              </Button>
              <Button variant="outline" size="lg">
                Compare Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};