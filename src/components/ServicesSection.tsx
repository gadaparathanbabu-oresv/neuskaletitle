import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import {
    FileSearch, SearchCheck, Search, Layers, History, ShieldCheck, FileText, Building2, Scale, Landmark,
    Home, Users, Globe, BriefcaseBusiness,
} from "lucide-react";

export const ServicesSection = () => {
  const titleSearchProducts = [
    {
        icon: SearchCheck,          // NEW ICON
        color: "text-blue-600",
        title: "Current Owner Search",
        description: "A Current Owner Search identifies the present title holder and the most recent deed with consideration by reviewing the chain of title backward from the current date. The report includes current tax status, county assessments, special assessments, and utility taxes; the vesting deed and chain of title; all open mortgages or deeds of trust with related documents from the latest FVD onward; all judgments and liens against the property and owners as per the SSOL; the legal description; and civil court and foreclosure case searches for the property and owners.",
    },
    {
        icon: Search,                // NEW ICON
        color: "text-purple-600",
      title: "Two Owner Search",
      description: "A Two Owner Title Search reviews the last two owners in the property's chain of title, tracing from the current owner back to the deed into the foreclosed owner (Nationwide). The report includes current tax status, county assessments, special assessments, and utility taxes; the vesting deed and chain of title; all open and foreclosed mortgages or deeds of trust with related documents from the prior owner (FVD) onward; all judgments and liens against the property and owners that would survive foreclosure; the legal description; and civil court and foreclosure case searches for the property and owners.",
    },
    {
        icon: History,               // NEW ICON
        color: "text-green-600",
      title: "30 year Search",
      description: "A title search reviews the chain of title for 30 years or up to the Developer Deed. The report includes current tax status, county assessments, special assessments, and utility taxes; the vesting deed and chain of title; all open and foreclosed mortgages or deeds of trust with related documents from the past 30 years; all judgments and liens against the property and owners as per the SSOL; the legal description; and civil court and foreclosure case searches for the property and owners.",
    },
    {
        icon: Layers,                // NEW ICON
        color: "text-amber-600",
      title: "Full Search",
      description: "A full search report covers both current and previous owners, including all names in the chain of title. The search spans 40/50/60 years or up to the Developer Deed. It includes current tax status, county assessments, special assessments, and utility taxes; the vesting deed and full chain of title; all open and foreclosed mortgages or deeds of trust with related documents; all judgments and liens against the property and owners as per SSOL; the legal description; civil court and foreclosure searches; and any easements, CCRs, agreements, resolutions, ordinances, and plat maps affecting the property.",
    },
    {
        icon: ShieldCheck,           // NEW ICON
        color: "text-red-600",
      title: "Update Search",
      description: "An update search reviews all documents filed from the last search date to the current date. The report includes current tax status, county assessments, special assessments, and utility taxes, along with any deeds recorded during this period. It also covers open mortgages or deeds of trust and their related documents, judgments and liens filed against the property or owners, and any releases or satisfactions of previously reported items. Additionally, a civil court search, including foreclosure cases for the property and owners within the specified timeframe, is included.",
    },
    {
        icon: Building2,
        color: "text-indigo-600",
      title: "Tax Search and Date Down",
      description: "The Tax search and date down report is a brief modification of the Original Title search report and covers records for a period of a minimum of 1 month to a maximum of 1 year from the effective date.",
    },
    {
        icon: FileText,              // NEW ICON
        color: "text-pink-600",
      title: "Document Retrieval",
      description: "Based on the customer's request, a Document Retrieval is performed to retrieve any specified documents such as a Conveyance Deed, Recorded copy of Mortgage/Deed of Trust, Release/Satisfaction of Liens or Judgments, CCR's, Plat Map, and so on.",
    },
  ];

    const industries = [
        {
            icon: ShieldCheck, // changed from TrendingUp
            color: "text-blue-600",
            title: "Title Insurance Companies",
            description:
                "Comprehensive title search services, risk analysis, bulk order processing, and support for underwriting decisions.",
        },
        {
            icon: Scale, // changed from Building2
            color: "text-purple-600",
            title: "Law Firms",
            description:
                "Legal support for real estate transactions, nationwide refinance searches, modification reports, and closing services.",
        },
        {
            icon: Landmark, // changed from Scale
            color: "text-green-600",
            title: "Banks",
            description:
                "Foreclosure searches, bankruptcy title research, lien analysis, and legal title verification for lending purposes.",
        },
        {
            icon: Home, // changed from Briefcase
            color: "text-amber-600",
            title: "Property Developers & Realtors",
            description:
                "Title verification, HELOC and hard money loan research, reverse mortgage assistance, and loan underwriting support.",
        },
        {
            icon: Users, // kept the same
            color: "text-red-600",
            title: "Financial Institutions",
            description:
                "Title searches and documentation support for federal, state, and local compliance, including HUD, SBA, Fannie Mae, and Freddie Mac.",
        },
        {
            icon: Globe, // changed from Home
            color: "text-indigo-600",
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
                    <service.icon className={`w-10 h-10 mb-3 ${service.color}`} />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-justify">
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
                    <industry.icon className={`w-10 h-10 mb-3 ${industry.color}`} />
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