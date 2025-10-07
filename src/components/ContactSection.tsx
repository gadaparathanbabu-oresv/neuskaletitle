import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useState } from "react";

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        reason: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/send-contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.message) alert(data.message);
            setFormData({ name: "", email: "", phone: "", reason: "", message: "" });
        } catch (err) {
            console.error(err);
            alert("Failed to send contact form");
        }
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                        Get Started Today
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Ready to begin your title search? Contact our expert team for fast,
                        reliable service on all your real estate transactions.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                    {/* Existing Contact Cards */}
                    <Card className="shadow-card border-border text-center">
                        <CardHeader>
                            <CardTitle className="text-foreground">Call Us</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-2xl font-bold text-primary">+1 860-962-8444</div>
                            <p className="text-muted-foreground">
                                Speak directly with a title search specialist
                            </p>
                            <Button variant="professional" className="w-full">
                                Call Now
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="shadow-card border-border text-center">
                        <CardHeader>
                            <CardTitle className="text-foreground">Email Us</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-lg font-semibold text-primary">info@neuskale.com</div>
                            <p className="text-muted-foreground">
                                Send your title search requirements
                            </p><br/>
                            <Button variant="professional" className="w-full">
                                Send Email
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="shadow-card border-border text-center">
                        <CardHeader>
                            <CardTitle className="text-foreground">Location</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-lg font-semibold text-primary">360 Bloomfield Ave Suite 301,
                                Windsor, CT 06095</div>
                            <p className="text-muted-foreground">
                                Send your title search requirements
                            </p>
                            <Button variant="professional" className="w-full">
                                Send Email
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Contact Form */}
                <div className="max-w-3xl mx-auto">
                    <Card className="shadow-card border-border">
                        <CardHeader>
                            <CardTitle className="text-foreground text-center">Contact Form</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <select
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        className="w-full border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="">Reason for Contact</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="quote">Request a Quote</option>
                                        <option value="support">Support</option>
                                    </select>
                                </div>

                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border border-border rounded-md px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                />

                                <Button type="submit" variant="hero" className="w-full">
                                    Submit
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Professional Title Search Services</h3>
                        <p className="text-lg mb-6 opacity-90">
                            Experience the difference of working with certified title professionals.
                            Fast turnaround, competitive rates, and unmatched accuracy.
                        </p>
                        <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground">
                            Start Your Title Search
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
