import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const CTASection = () => {
    return (
        <>
            {/* === HERO SECTION === */}
            <section className="py-20 bg-gradient-hero relative overflow-hidden text-white">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-block bg-blue-600/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            Experience • Try • Order Model
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            Ready to Experience the <span className="text-yellow-500">Neuskale Difference?</span>
                        </h2>

                        <p className="text-lg text-white mb-8">
                            Start with a FREE sample title report. No commitment, no credit card required.
                            See our quality and accuracy firsthand before you order.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all"
                                onClick={() => {
                                    const section = document.getElementById("Order");
                                    if (section) {
                                        section.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                            >
                                Get Complimentary Search Report <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        {/* STATS */}
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-700">
                            <div>
                                <div className="text-3xl font-bold mb-2 text-white">24–72 Hours</div>
                                <div className="text-sm text-white">Fast Standard Turnaround</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2 text-white">$1M E&O</div>
                                <div className="text-sm text-white">Insurance Coverage</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2 text-white">24/7 Support</div>
                                <div className="text-sm text-white">Dedicated Account Managers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* === OUR ASSOCIATIONS SECTION === */}
            <section className="py-20 bg-white relative overflow-hidden text-gray-900">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-8">
                        Our Associations
                    </h3>

                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                        We’re proud to be associated with trusted industry leaders and partners
                        who share our vision for quality and innovation.
                    </p>

                    {/* LOGOS GRID */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8 max-w-4xl">
                            {/* Logo 1 */}
                            <motion.div
                                className="flex justify-center items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <img
                                    src="/Qualia-light.png"
                                    alt="Partner 1"
                                    className="max-w-[250px] h-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                                />
                            </motion.div>

                            {/* Logo 2 */}
                            <motion.div
                                className="flex justify-center items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <img
                                    src="/ALTA_Logo.jpg"
                                    alt="Partner 2"
                                    className="max-w-[250px] h-auto object-contain opacity-90 hover:opacity-100 transition-all rounded duration-300"
                                />
                            </motion.div>

                            {/* Add more logos similarly */}
                        </div>
                    </div>



                </div>
            </section>
        </>
    );
};
