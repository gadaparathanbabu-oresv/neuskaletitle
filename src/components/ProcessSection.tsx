import { Card, CardContent } from "@/components/ui/card";
import { FileText, Search, Mail } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Order Your Title Search",
      description: "Use our convenient online order form to submit your property information. Choose from Current Owner, Two Owner, or 30-Year searches."
    },
    {
      number: "2",
      icon: Search,
      title: "We Process Your Request",
      description: "Our experienced title examiners research county records, verify ownership, identify liens, and compile a comprehensive report."
    },
    {
      number: "3",
      icon: Mail,
      title: "Receive Your Report",
      description: "Your complete title search report is delivered to your email within 24-48 business hours, ready for review and action."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple 3-step process to get your professional title search report
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative transition-all duration-300 hover:shadow-professional">
              <CardContent className="pt-12 pb-8 text-center">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-button">
                    {step.number}
                  </div>
                </div>
                <step.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-primary/10 border border-primary/20 rounded-lg px-6 py-4">
            <p className="text-lg font-semibold text-foreground">
              ⚡ Need it faster? <span className="text-primary">Rush orders available in as little as 4 hours!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};