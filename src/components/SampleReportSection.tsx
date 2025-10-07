import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Download, FileText, CheckCircle2, Eye } from "lucide-react";

export const SampleReportSection = () => {
  const sampleReports = [
    {
      title: "Current Owner (O&E) Sample",
      description: "See our comprehensive owner and encumbrance report format",
      pages: "8-12 pages",
      icon: FileText,
      file: "/Sample Search Report - Current Owner Search.pdf", // link to file in public folder
    },
    {
      title: "Two Owner Search Sample",
      description: "Example foreclosure search with complete chain of title",
      pages: "15-20 pages",
      icon: FileText,

    },
    {
      title: "Full Search Sample",
      description: "Complete title history with all documents and exhibits",
      pages: "25-35 pages",
      icon: FileText,
      file: "/Sample Search Report - Full Search.pdf", // link to file in public folder
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            Experience Our Quality
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">
            Download Sample Title Reports
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the quality and detail we deliver on every search. Review our professional 
            report formats before you order - that's the Neuskale ETO advantage.
          </p>
        </div>
        <div id="Download">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {sampleReports.map((report, index) => {
                const Icon = report.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-professional transition-smooth border-primary/20"
                  >
                    <CardContent className="pt-8 text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{report.title}</h3>
                      <p className="text-muted-foreground text-sm">{report.description}</p>
                      <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full inline-block">
                        {report.pages}
                      </div>
                        <a href={report.file} download>
                            <Button variant="outline" className="w-full mt-3">
                                <Download className="mr-2 w-4 h-4" />
                                Download PDF Sample
                            </Button>
                        </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
        </div>

        {/* Why Our Reports Stand Out */}
        <Card className="max-w-4xl mx-auto border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              What Makes Our Reports Superior
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Comprehensive Documentation</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete copies of all relevant deeds, mortgages, liens, and legal documents
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Easy-to-Read Format</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional layout with clear summaries, indexes, and color-coded sections
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Customizable Formats</h4>
                  <p className="text-sm text-muted-foreground">
                    Reports can be formatted to match your specific requirements and workflows
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Qualia-Ready</h4>
                  <p className="text-sm text-muted-foreground">
                    Seamlessly integrates with Qualia platform for instant upload and processing
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Detailed Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Not just data - includes our expert analysis of title issues and recommendations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Certified Accuracy</h4>
                  <p className="text-sm text-muted-foreground">
                    Backed by $1M E&O insurance and reviewed by certified title professionals
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Eye className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Ready to Try Our Service?</h3>
            </div>
            <p className="text-primary-foreground/90 mb-6">
              Get a FREE custom title report on your property. Experience our quality, 
              accuracy, and fast turnaround before placing a paid order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Order Free Sample Report
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};