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
import feesData from "../data/feesData.json";

export const OrderFormSection = () => {
    const [selectedState, setSelectedState] = useState("");
    const [selectedCounty, setSelectedCounty] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const [rate, setRate] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        propertyaddress: "",
        parcelnumber: "",
        ownername: "",
        comments: "",
    });

    const states = Object.keys(feesData);
    const counties = selectedState ? Object.keys(feesData[selectedState]) : [];
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
            setRate(countyData[value] ?? 0);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedState || !selectedCounty || !selectedService) {
            alert("Please select State, County, and Service.");
            return;
        }

        const payload = {
            ...formData,
            state: selectedState,
            county: selectedCounty,
            service: selectedService,
            rate,
        };

        try {
            const res = await fetch("https://neuskaletitle-peach.vercel.app/api/send-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (res.ok) {
                alert("✅ Order submitted successfully!");
                setSelectedState("");
                setSelectedCounty("");
                setSelectedService("");
                setRate(0);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    propertyaddress: "",
                    parcelnumber: "",
                    ownername: "",
                    comments: "",
                });
            } else {
                alert("❌ Failed to submit order: " + data.message);
            }
        } catch (err) {
            console.error(err);
            alert("⚠️ Error submitting order. Please try again.");
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
                            Get started in minutes — Fast, accurate title search reports
                            delivered in 24–48 hours
                        </p>
                    </div>

                    <Card className="p-8">
                        <form className="space-y-6" onSubmit={handleSubmit}>
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
                                <h3 className="text-lg font-semibold mb-4">Your Information</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "name",
                                        "email",
                                        "phone",
                                        "company",
                                        "propertyaddress",
                                        "parcelnumber",
                                        "ownername",
                                        "comments",
                                    ].map((field) => (
                                        <div key={field} className="space-y-2">
                                            <Label htmlFor={field}>
                                                {field
                                                    .charAt(0)
                                                    .toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
                                            </Label>
                                            <Input
                                                id={field}
                                                type={
                                                    field === "email"
                                                        ? "email"
                                                        : field === "phone"
                                                            ? "tel"
                                                            : "text"
                                                }
                                                placeholder={field
                                                    .replace(/([A-Z])/g, " $1")
                                                    .replace(/^./, (str) => str.toUpperCase())}
                                                value={formData[field as keyof typeof formData]}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button type="submit" size="lg" className="w-full text-lg py-6">
                                Place Order – Secure Checkout
                            </Button>
                        </form>
                        <br/>
                        <p className="text-justify text-red-500">**The fees listed are based on online search availability. If any files require ground abstractor support, an additional abstractor fee will apply for conducting the search or retrieving documents. Any fee changes will be communicated, and your approval will be obtained before we proceed with the search.</p> <br/>
                        <p className="text-justify text-red-500">**For judgments and liens, we provide online copies or docket sheets. If any judgment or lien copies are not available online and you require those copies, an additional abstractor fee will apply to obtain them. All such fees will be communicated in advance, and your approval will be obtained before we proceed with the search.</p>
                    </Card>

                </div>
            </div>

        </section>
    );
};
