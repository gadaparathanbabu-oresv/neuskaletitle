import { Target, Eye, ShoppingCart, Shield, Clock, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="why-neuskale" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* ETO Model Explanation */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            Our Revolutionary Approach
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            The Experience • Try • Order (ETO) Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're the only title search company that lets you experience our quality, 
            try our service risk-free, and then order with complete confidence.
          </p>
        </div>

        {/* Three Pillars of ETO */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="text-center shadow-card hover:shadow-professional transition-smooth border-primary/20">
            <CardContent className="pt-8 pb-8 space-y-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">1. Experience</h3>
              <p className="text-muted-foreground">
                Browse our sample reports, review our process, and see the quality 
                and detail we deliver on every search.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-professional transition-smooth border-primary/20">
            <CardContent className="pt-8 pb-8 space-y-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">2. Try</h3>
              <p className="text-muted-foreground">
                Get a complimentary sample title search on a property of your choice. 
                No commitment, no credit card required.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-professional transition-smooth border-primary/20">
            <CardContent className="pt-8 pb-8 space-y-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                <ShoppingCart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">3. Order</h3>
              <p className="text-muted-foreground">
                Once you've seen our quality firsthand, place your order with confidence. 
                Fast delivery, accurate results, every time.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Neuskale Differentiators */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Why Top Professionals Choose Neuskale
            </h2>
            <p className="text-lg text-muted-foreground">
              Since 2010, we've been the trusted partner for real estate attorneys, title companies, 
              mortgage lenders, and investors who demand accuracy, speed, and reliability.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">$1 Million E&O Insurance</h3>
                  <p className="text-muted-foreground">
                    Comprehensive errors and omissions coverage for your complete peace of mind on every transaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Qualia Integration & Custom Formats</h3>
                  <p className="text-muted-foreground">
                    Seamless integration with Qualia platform plus customized report formats to match your exact workflow.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">24/7 Support with Dedicated Managers</h3>
                  <p className="text-muted-foreground">
                    Round-the-clock assistance with assigned account managers who know your business and preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-card border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Service Promise</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <span className="text-foreground">24-48 hour standard turnaround</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <span className="text-foreground">Rush services available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <span className="text-foreground">All 50 states covered (residential & commercial)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <span className="text-foreground">Bulk/portfolio pricing available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <span className="text-foreground">Certified title professionals on staff</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <span className="text-foreground">Technology-driven accuracy</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-primary/20 bg-gradient-hero text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Industry Recognition</h3>
                <p className="text-primary-foreground/90 mb-4">
                  Trusted by top law firms, title companies, and financial institutions nationwide
                </p>
                <div className="flex justify-center gap-6 text-sm">
                  <span>ALTA Member</span>
                  <span>•</span>
                  <span>Licensed</span>
                  <span>•</span>
                  <span>E&O Insured</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};