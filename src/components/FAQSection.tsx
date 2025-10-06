import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What is a Property Title Search?",
      answer: "A property title search is a detailed examination of public records to verify legal ownership of a property and uncover any liens, encumbrances, judgments, or claims that could affect the title. Our comprehensive title reports provide crucial information about mortgages, property liens, ownership history (chain of title), deed restrictions, easements, and any legal issues that need to be resolved before closing. This protects buyers, lenders, and investors from costly surprises."
    },
    {
      question: "What is the ETO (Experience-Try-Order) model?",
      answer: "The ETO model is Neuskale's revolutionary approach that eliminates risk from title search services. First, EXPERIENCE our service by reviewing sample reports and understanding our process. Second, TRY a completely FREE title search on an actual property of your choice - no generic sample, no commitment, no credit card required. Third, ORDER with complete confidence after seeing our quality firsthand. We're the only title search company offering this risk-free trial because we know our quality speaks for itself."
    },
    {
      question: "How long does a title search take?",
      answer: "Neuskale's standard turnaround is 24-48 hours for most title searches - significantly faster than the industry standard of 3-5 business days. We also offer rush services for urgent transactions. Our speed doesn't compromise quality; our certified title examiners use advanced technology and direct county access to deliver accurate reports quickly. Complex commercial searches or properties in counties with slow recording offices may require additional time."
    },
    {
      question: "What types of title searches do you offer?",
      answer: "We offer comprehensive title search products nationwide: Current Owner (O&E) Search (up to 30 years), Two Owner Search (ideal for foreclosures), 30-Year Full Search (complete title history), Commercial Title Search, Title Curative Services, Property Lien Search, Judgment Search, Tax Lien Search, HOA Lien Search, Update/Bring Down Searches, Mortgage Assignment Research, and specialized searches for reverse mortgages, HELOCs, bankruptcy proceedings, and bulk/portfolio orders."
    },
    {
      question: "How much does a title search cost?",
      answer: "Our pricing is transparent and competitive: Current Owner (O&E) Search starts at $49, Two Owner Search at $75, and 30-Year Full Search at $125. We offer volume discounts for bulk orders, specialized pricing for portfolio investors, and custom quotes for commercial properties or unique requirements. Unlike many competitors, we have no hidden fees, and every search includes comprehensive documentation. Plus, your first sample report is completely FREE through our ETO model."
    },
    {
      question: "What is E&O insurance and why does it matter?",
      answer: "E&O (Errors and Omissions) insurance protects you from financial loss due to professional errors or negligence in the title search process. Neuskale carries $1 Million in E&O insurance coverage on every search we perform - far exceeding industry standards. This comprehensive coverage provides complete peace of mind that if we miss something (extremely rare with our 99.9% accuracy rate), you're financially protected. Many title search companies don't disclose their coverage or carry significantly less."
    },
    {
      question: "What areas do you serve?",
      answer: "We provide nationwide property title search services covering all 50 states, including Alaska and Hawaii. Our experienced team has established relationships with county recorders, courthouses, and public databases across the United States. Whether you need a title search in New York, California, Texas, Florida, or any other state, we deliver accurate reports with consistent quality and fast turnaround. We handle both residential and commercial properties nationwide."
    },
    {
      question: "Do you integrate with Qualia?",
      answer: "Yes! Neuskale is fully integrated with Qualia, the leading real estate closing platform. Our title reports can be seamlessly uploaded directly into your Qualia workflow, eliminating manual data entry and reducing processing time. This integration streamlines your entire title process, from order placement to final delivery. We can also provide reports in any custom format to match your specific workflow requirements, whether you use Qualia, other title production software, or proprietary systems."
    },
    {
      question: "Can I perform a title search myself?",
      answer: "While it's technically possible to search public records yourself, professional title searches ensure nothing critical is missed. Title examination requires expertise in property law, chain of title analysis, lien priority, legal descriptions, and complex recording systems that vary by state and county. Our certified examiners identify issues that untrained individuals commonly overlook: hidden liens, judgment searches, chain of title breaks, name variations, tax sale impacts, recording errors, and priority disputes. DIY searches also lack the $1M E&O insurance protection we provide."
    },
    {
      question: "What is a property lien search?",
      answer: "A property lien search identifies all recorded liens and encumbrances against a property. This includes mortgage liens, tax liens (federal, state, and local), mechanic's liens, judgment liens, HOA liens, child support liens, and IRS liens. Liens represent legal claims against the property that must typically be satisfied (paid off) before clear title can be transferred. Our comprehensive lien searches check federal, state, and county records to ensure nothing is missed, protecting you from assuming someone else's debts."
    },
    {
      question: "What's the difference between Current Owner, Two Owner, and Full Search?",
      answer: "A Current Owner (O&E) Search examines the property's title history for up to 30 years or back to the current owner's purchase, identifying open liens and encumbrances. A Two Owner Search covers two transfers in the chain of title - commonly used for foreclosures to verify the mortgage holder's lien position. A 30-Year Full Search provides comprehensive title history for 30+ years, including complete copies of all recorded documents, deeds, mortgages, and liens. Full searches are required for title insurance and refinancing."
    },
    {
      question: "How is Neuskale different from other title search companies?",
      answer: "Neuskale offers unique advantages: (1) FREE sample reports on your actual properties through our ETO model, (2) 24-48 hour turnaround vs. industry standard 3-5 days, (3) $1M E&O insurance coverage, (4) Full Qualia integration and unlimited custom report formats, (5) 24/7 support with dedicated account managers, (6) Certified title examiners on every search, (7) Transparent pricing with volume discounts. We're the only company confident enough to let you try us completely risk-free before ordering."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            Common Questions
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions About Title Searches
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about property title searches, the ETO model, and Neuskale's services
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? Our title search experts are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Try Free Report
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};