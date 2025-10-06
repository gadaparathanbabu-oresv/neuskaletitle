import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import { Card } from "../components/ui/card";
import feesData from "../data/feesData.json"; // 👈 Import the JSON data

export const OrderFormSection = () => {
    const [selectedState, setSelectedState] = useState("");
    const [selectedCounty, setSelectedCounty] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const [rate, setRate] = useState(0);

    // Extract states from JSON keys
    const states = Object.keys(feesData);

    // Extract counties based on selected state
    const counties = selectedState ? Object.keys(feesData[selectedState]) : [];

    // Extract available services from the first county for the dropdown
    const services =
        selectedState && selectedCounty
            ? Object.keys(feesData[selectedState][selectedCounty])
            : [
                "Current Owner",
                "Two Owner",
                "30-Years",
                "Full Search",
                "Update",
                "Mortgage & Assignment",
                "Liens & Judgment",
                "Docs Retrieval",
            ];

    // Handle selection changes
    const handleStateChange = (value: string) => {
        setSelectedState(value);
        setSelectedCounty("");
        setSelectedService("");
        setRate(0);
    };

    const handleCountyChange = (value: string) => {
        setSelectedCounty(value);
        setSelectedService("");
        setRate(0);
    };

    const handleServiceChange = (value: string) => {
        setSelectedService(value);
        if (selectedState && selectedCounty) {
            const countyData = feesData[selectedState][selectedCounty];
            const fetchedRate = countyData[value] ?? 0;
            setRate(fetchedRate);
        }
    };

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                            Order Your Title Search Now
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Get started in minutes - Fast, accurate title search reports delivered in 24–48 hours
                        </p>
                    </div>

                    <Card className="p-8">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* STATE */}
                                <div className="space-y-2">
                                    <Label htmlFor="state">State *</Label>
                                    <Select onValueChange={handleStateChange}>
                                        <SelectTrigger id="state">
                                            <SelectValue placeholder="Select State" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {states.map((state) => (
                                                <SelectItem key={state} value={state}>
                                                    {state}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* COUNTY */}
                                <div className="space-y-2">
                                    <Label htmlFor="county">County *</Label>
                                    <Select
                                        onValueChange={handleCountyChange}
                                        disabled={!selectedState}
                                    >
                                        <SelectTrigger id="county">
                                            <SelectValue placeholder="Select County" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {counties.map((county) => (
                                                <SelectItem key={county} value={county}>
                                                    {county}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* SERVICE */}
                            <div className="space-y-2">
                                <Label htmlFor="service">Select Service *</Label>
                                <Select
                                    onValueChange={handleServiceChange}
                                    disabled={!selectedCounty}
                                >
                                    <SelectTrigger id="service">
                                        <SelectValue placeholder="Choose Title Search Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {services.map((service) => (
                                            <SelectItem key={service} value={service}>
                                                {service}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* RATE DISPLAY */}
                            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">Estimated Total:</span>
                                    <span className="text-2xl font-bold text-primary">
                                        {rate > 0 ? `$${rate}` : "$0"}
                                    </span>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="border-t pt-6 mt-6">
                                <h3 className="text-lg font-semibold mb-4">
                                    Your Information
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name *</Label>
                                        <Input id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email *</Label>
                                        <Input id="email" type="email" placeholder="your.email@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input id="phone" type="tel" placeholder="(555) 555-5555" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company</Label>
                                        <Input id="company" placeholder="Company Name (Optional)" />
                                    </div>
                                </div>
                            </div>

                            <Button type="submit" size="lg" className="w-full text-lg py-6">
                                Place Order – Secure Checkout
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
};
