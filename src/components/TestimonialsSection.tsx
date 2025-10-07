import { Card, CardContent } from "../components/ui/card";
import { Star, TrendingUp, Clock, Shield, Award, Users, CheckCircle2 } from "lucide-react";

export const TestimonialsSection = () => {
  const caseStudies = [
    {
      text: "We've been using Neuskale for our foreclosure cases for 2 years now. The accuracy and speed of their title searches are unmatched. The ability to try their service first gave us confidence in switching providers.",
      author: "Michael R.",
      role: "Real Estate Attorney",
      firm: "Thompson & Associates Law",
      rating: 5,
      icon: Shield,
      metric: "500+ title searches completed"
    },
    {
      text: "The Qualia integration is seamless and saves us hours every week. Their 24/7 support and dedicated account manager have been invaluable for our high-volume operation. The ETO model let us test everything first.",
      author: "Jennifer K.",
      role: "Operations Manager",
      firm: "Premier Title Company",
      rating: 5,
      icon: TrendingUp,
      metric: "20 hours saved per week"
    },
    {
      text: "As an investor managing 50+ properties, I need reliable title searches fast. Neuskale's 24-48 hour turnaround and portfolio pricing have been game-changing. Their free trial convinced me to switch all my business.",
      author: "David L.",
      role: "Real Estate Investor",
      firm: "Metro Property Holdings",
      rating: 5,
      icon: Award,
      metric: "Portfolio of 50+ properties"
    },
    {
      text: "Switched from our previous provider after trying Neuskale's free sample report. The difference in detail and accuracy was night and day. Their $1M E&O insurance gives us complete peace of mind on every transaction.",
      author: "Sarah M.",
      role: "Senior Closing Officer",
      firm: "National Mortgage Lenders",
      rating: 5,
      icon: CheckCircle2,
      metric: "$1M E&O coverage"
    },
    {
      text: "The customized report formats match our exact workflow. No more reformatting or manual data entry. Their team set everything up during the trial phase. Highly recommend trying their ETO model.",
      author: "Robert T.",
      role: "Title Examiner",
      firm: "Coastal Title Solutions",
      rating: 5,
      icon: Clock,
      metric: "100% format match"
    },
    {
      text: "Processing bulk orders for our investment fund is now effortless. Their dedicated account manager understands our needs perfectly. The free trial on 3 properties showed us their quality before committing.",
      author: "Lisa H.",
      role: "Portfolio Manager",
      firm: "Apex Capital Investments",
      rating: 5,
      icon: Users,
      metric: "200+ bulk orders completed"
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            Client Success Stories
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">
            Real Results from Real Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how attorneys, title companies, lenders, and investors have transformed their 
            title search process with Neuskale's ETO model
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card 
                key={index} 
                className="transition-all duration-300 hover:shadow-professional hover:-translate-y-1 border-primary/20"
              >
                <CardContent className="pt-6 space-y-4">
                  {/* Icon and Metric */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex">
                      {[...Array(study.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  {/* Metric Badge */}
                  <div className="bg-gradient-hero text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block">
                    {study.metric}
                  </div>

                  {/* Testimonial */}
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{study.text}"
                  </p>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{study.author}</p>
                    <p className="text-sm text-muted-foreground">{study.role}</p>
                    <p className="text-xs text-muted-foreground">{study.firm}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Bar */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Join 500+ satisfied clients who tried our service first through the ETO model
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">287+</div>
              <div className="text-sm text-muted-foreground">5-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Searches Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24-48hr</div>
              <div className="text-sm text-muted-foreground">Avg Turnaround</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};