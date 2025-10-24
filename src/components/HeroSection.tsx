import { Button } from "../components/ui/button";
import { Shield, Clock, Zap, Award } from "lucide-react";
import heroImage from "@/assets/hero-title-services.jpeg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const HeroSection = () => {
    const words = ["Affordable", "Faster", "Transparent", "Professional"];
    const [currentWord, setCurrentWord] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // ⌨️ Typewriter effect logic
    useEffect(() => {
        const fullWord = words[wordIndex];
        const typingSpeed = isDeleting ? 70 : 120;

        const timer = setTimeout(() => {
            if (!isDeleting && currentWord.length < fullWord.length) {
                setCurrentWord(fullWord.slice(0, currentWord.length + 1));
            } else if (isDeleting && currentWord.length > 0) {
                setCurrentWord(fullWord.slice(0, currentWord.length - 1));
            } else if (!isDeleting && currentWord.length === fullWord.length) {
                setTimeout(() => setIsDeleting(true), 1500); // pause before deleting
            } else if (isDeleting && currentWord.length === 0) {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentWord, isDeleting, wordIndex]);

    return (
        <>
            {/* Text Above Section */}
            <div className="text-center py-2 bg-background">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Trusted by Leading Title Professionals Nationwide
                </h2>
                <p className="text-muted-foreground mt-3 text-lg max-w-2xl mx-auto">
                    Title searches should be fast, accurate, and affordable for everyone.
                </p>
            </div>

            {/* Hero Section */}
            <section className="relative bg-gradient-subtle lg:py-10">
                <div className="container mx-auto px-6">
                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12 pb-8 border-b border-border">
                        <div className="flex items-center gap-2 text-sm">
                            <Shield className="w-5 h-5 text-primary" />
                            <span className="font-semibold text-foreground">$1M E&O Insured</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Zap className="w-5 h-5 text-primary" />
                            <span className="font-semibold text-foreground">Qualia Integrated</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-5 h-5 text-primary" />
                            <span className="font-semibold text-foreground">24 - 72 Hours Turnaround</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Award className="w-5 h-5 text-primary" />
                            <span className="font-semibold text-foreground">15+ Years Experience</span>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            {/* ETO Badge */}
                            <div className="inline-block">
                                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
                                    ⭐ Experience • Try • Order (ETO) Model
                                </div>
                            </div>

                            {/* Typewriter Heading */}
                            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight flex flex-wrap gap-2">
                                <span className="text-pink-600 min-w-[10rem]">{currentWord} </span><br/>
                                    <span> Title Search Services You Can Try Risk-Free </span>
                            </h1>

                            {/* Description */}
                            <p className="text-xl text-muted-foreground max-w-lg text-justify">
                                Neuskale — the only title search company with the revolutionary ETO (Experience-Try-Order) model. Get fast, accurate, and affordable title search reports — try a free sample, then order with confidence. Serving real estate attorneys, title companies, lenders, and investors nationwide with 24–72 hour turnaround.
                            </p>

                            {/* Buttons */}
                            {/*<div className="flex flex-col sm:flex-row gap-4">*/}
                            {/*    <Button variant="hero" size="lg" className="text-lg px-8 py-6">*/}
                            {/*        Try a Free Report*/}
                            {/*    </Button>*/}
                            {/*    <Button variant="outline" size="lg" className="text-lg px-8 py-6">*/}
                            {/*        Get a Quote*/}
                            {/*    </Button>*/}
                            {/*</div>*/}

                            {/* Key Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">24–72hr</div>
                                    <div className="text-sm text-muted-foreground">Fast Turnaround</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">20+</div>
                                    <div className="text-sm text-muted-foreground">States Covered</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">$1M</div>
                                    <div className="text-sm text-muted-foreground">E&O Insurance</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">$10</div>
                                    <div className="text-sm text-muted-foreground">Title Search starts at</div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-professional">
                                <iframe
                                    src="https://www.youtube.com/embed/Jj4sILQ7fIw"
                                    title="NeuSkale Title Services"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full aspect-video rounded-2xl"
                                ></iframe>
                            </div>
                            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-hero rounded-2xl opacity-20 -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
