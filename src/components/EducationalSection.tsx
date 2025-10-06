import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, FileCheck, Shield, Home, Users, TrendingUp, BookOpen, Award } from "lucide-react";

export const EducationalSection = () => {
  const topics = [
    {
      icon: AlertTriangle,
      title: "Understanding Liens & Mortgages",
      description: "Learn how liens affect property ownership, mortgage priority, lien types (tax, judgment, mechanic, HOA), and how to clear title defects before closing.",
      link: "#"
    },
    {
      icon: FileCheck,
      title: "Deed Restrictions & Easements",
      description: "Discover how deed restrictions, covenants, easements, and encumbrances can limit property use and impact your investment or development plans.",
      link: "#"
    },
    {
      icon: Shield,
      title: "Title Insurance Explained",
      description: "Understand how title insurance protects against hidden defects, forgery, fraud, undisclosed heirs, and recording errors that could threaten ownership.",
      link: "#"
    },
    {
      icon: Home,
      title: "Chain of Title Analysis",
      description: "Learn how title examiners trace property ownership history, identify breaks in the chain, and ensure valid transfer of ownership rights.",
      link: "#"
    },
    {
      icon: Users,
      title: "Title Searches for Investors",
      description: "Essential title search strategies for real estate investors, including pre-screening, foreclosure searches, and portfolio due diligence.",
      link: "#"
    },
    {
      icon: TrendingUp,
      title: "Title Curative Process",
      description: "Step-by-step guide to resolving title defects, clearing clouds on title, correcting recording errors, and perfecting ownership claims.",
      link: "#"
    },
    {
      icon: BookOpen,
      title: "State Title Requirements",
      description: "Navigate varying state laws, recording requirements, transfer taxes, and title examination standards across all 50 states.",
      link: "#"
    },
    {
      icon: Award,
      title: "Best Practices Guide",
      description: "Industry best practices for ordering title searches, reading title reports, identifying red flags, and ensuring smooth closings.",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            Education Center
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">
            Title Search Education & Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guides and resources to help real estate professionals, investors, attorneys, 
            and homeowners understand title searches, property liens, and ownership verification
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {topics.map((topic, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 hover:shadow-professional hover:-translate-y-1 border-primary/20 cursor-pointer group"
            >
              <CardHeader>
                <topic.icon className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {topic.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4">
                  {topic.description}
                </CardDescription>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary font-semibold">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Educational Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-subtle border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                What is a Title Search?
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A property title search is a comprehensive examination of public records to verify legal 
                  ownership and identify any liens, encumbrances, or defects that could affect the title. 
                  This critical step protects buyers, lenders, and investors from inheriting someone else's problems.
                </p>
                <p>
                  Our certified title examiners search through multiple record sources including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>County land records and deed recordings</li>
                  <li>Federal and state tax lien databases</li>
                  <li>Court records for judgments and lawsuits</li>
                  <li>Municipal records for code violations and assessments</li>
                  <li>Probate and estate records</li>
                  <li>Bankruptcy filings</li>
                </ul>
                <p className="font-semibold text-foreground">
                  Result: A comprehensive title report identifying ownership history, outstanding liens, 
                  and any issues requiring resolution before closing.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-subtle border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Choose Professional Title Search?
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  While public records are accessible, professional title examination requires specialized 
                  knowledge of property law, lien priority, and recording systems that vary significantly 
                  by state and county.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Expert Analysis</p>
                      <p className="text-sm">Certified examiners identify hidden issues DIY searches miss</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Comprehensive Coverage</p>
                      <p className="text-sm">We check all relevant federal, state, and county databases</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">$1M E&O Protection</p>
                      <p className="text-sm">Financial protection if we miss something (extremely rare)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Fast Turnaround</p>
                      <p className="text-sm">24-48 hours vs. weeks for DIY research</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <Card className="bg-gradient-hero text-primary-foreground border-none">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Industry-Leading Expertise</h3>
              <p className="text-primary-foreground/90">
                Delivering accurate title searches with unmatched speed and quality
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-sm text-primary-foreground/80">Searches Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50</div>
                <div className="text-sm text-primary-foreground/80">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-sm text-primary-foreground/80">Accuracy Rate</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button 
                variant="default"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Try Free Sample Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};