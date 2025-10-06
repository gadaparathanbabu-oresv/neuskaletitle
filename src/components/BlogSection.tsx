import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";

export const BlogSection = () => {
  const blogPosts = [
    {
      title: "Why Title Search Pre-Screening Matters for Real Estate Investors",
      excerpt: "Learn how pre-screening title searches can save investors thousands and prevent deal-killing surprises. Discover the 5 critical issues to check before making an offer.",
      category: "Real Estate Investing",
      date: "March 15, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop"
    },
    {
      title: "Understanding Title Defects: A Complete Guide for Attorneys",
      excerpt: "Comprehensive breakdown of common title defects, how to identify them, and proven strategies for title curative. Essential reading for real estate attorneys.",
      category: "Legal",
      date: "March 12, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop"
    },
    {
      title: "The Experience-Try-Order Model: Revolutionizing Title Search Services",
      excerpt: "How Neuskale's ETO model eliminates risk and builds confidence. Why trying before buying is changing the title search industry forever.",
      category: "Industry Insights",
      date: "March 10, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop"
    },
    {
      title: "State-by-State Title Search Requirements: 2024 Guide",
      excerpt: "Navigate the complex landscape of title search requirements across all 50 states. Updated regulations, recording fees, and best practices.",
      category: "Compliance",
      date: "March 8, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop"
    },
    {
      title: "Qualia Integration: Streamlining Your Title Workflow",
      excerpt: "Maximize efficiency with Qualia-integrated title searches. Step-by-step guide to seamless integration and automation of your title workflow.",
      category: "Technology",
      date: "March 5, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      title: "Common Title Search Myths That Cost Investors Money",
      excerpt: "Debunking 10 dangerous myths about title searches. Learn the truth that can save you thousands on your next real estate investment.",
      category: "Real Estate Investing",
      date: "March 1, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop"
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            Knowledge Center
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">
            Title Search Insights & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert guidance on title searches, real estate law, and industry best practices. 
            Stay informed with our latest articles and guides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="hover:shadow-professional transition-smooth border-primary/20 overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary font-semibold group-hover:gap-2 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <Card className="max-w-4xl mx-auto border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Browse by Topic
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Real Estate Investing",
                "Title Law & Compliance",
                "Technology & Automation",
                "Title Curative",
                "State Regulations",
                "Best Practices",
                "Case Studies",
                "Industry News"
              ].map((category, idx) => (
                <Button 
                  key={idx}
                  variant="outline" 
                  size="sm"
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  {category}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Newsletter Signup */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-gradient-hero text-primary-foreground border-none">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
              <p className="text-primary-foreground/90 mb-6">
                Subscribe to our newsletter for weekly title search insights, industry updates, 
                and exclusive tips for real estate professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md text-foreground"
                />
                <Button 
                  variant="default"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/70 mt-4">
                Join 2,500+ professionals. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};