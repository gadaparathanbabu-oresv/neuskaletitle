import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { FileSearch, Shield, Building2, Scale, Users, Home, Briefcase, Globe } from "lucide-react";

export const ServicesSection = () => {
  const titleSearchProducts = [
    {
      icon: FileSearch,
      title: "Current Owner (O&E) Search",
      description: "Current owner title search with liens, encumbrances, and judgments affecting the property.",
    },
    {
      icon: FileSearch,
      title: "Two Owner (Foreclosure) Search",
      description: "Two-owner search ideal for foreclosure proceedings, REO properties, and investment purchases.",
    },
    {
      icon: FileSearch,
      title: "30-Year Full Search",
      description: "Comprehensive 30-year chain of title search with taxes, liens, and document copies included.",
    },
    {
      icon: Shield,
      title: "Property Lien Search",
      description: "Detailed lien search including mortgages, tax liens, mechanic liens, and judgment searches.",
    },
    {
      icon: Building2,
      title: "Commercial Title Search",
      description: "Specialized commercial property searches for office buildings, retail, industrial, and land acquisitions.",
    },
    {
      icon: FileSearch,
      title: "Update & Bring Down Search",
      description: "Title update searches to bring existing reports current for closing and refinancing.",
    },
  ];

    const industries = [
        {
            icon: Shield, // changed from TrendingUp
            title: "Title Insurance Companies",
            description:
                "Comprehensive title search services, risk analysis, bulk order processing, and support for underwriting decisions.",
        },
        {
            icon: Scale, // changed from Building2
            title: "Law Firms",
            description:
                "Legal support for real estate transactions, nationwide refinance searches, modification reports, and closing services.",
        },
        {
            icon: Building2, // changed from Scale
            title: "Banks",
            description:
                "Foreclosure searches, bankruptcy title research, lien analysis, and legal title verification for lending purposes.",
        },
        {
            icon: Home, // changed from Briefcase
            title: "Property Developers & Realtors",
            description:
                "Title verification, HELOC and hard money loan research, reverse mortgage assistance, and loan underwriting support.",
        },
        {
            icon: Users, // kept the same
            title: "Financial Institutions",
            description:
                "Title searches and documentation support for federal, state, and local compliance, including HUD, SBA, Fannie Mae, and Freddie Mac.",
        },
        {
            icon: Globe, // changed from Home
            title: "Governments",
            description:
                "Official title searches and record verification for public land, municipal, and federal projects, ensuring legal compliance.",
        },
  ];

  return (
    <section id="services" className="py-2 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Title Search Products & Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Residential Title Searches Made Simple, Fast & Reliable
          </p>
        </div>
        
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Title Search Reports</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {titleSearchProducts.map((service, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-professional hover:-translate-y-2">
                <CardHeader>
                  <service.icon className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Clients We Serve</h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Providing property title search and due diligence services to professionals nationwide
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-professional hover:-translate-y-2 bg-card/50">
                <CardHeader>
                  <industry.icon className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-lg">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};