import React from "react";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/HeroSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import Pricing from "@/components/Home/Pricing";
import Testimonials from "@/components/Home/Testimonials";
import ContactUs from "@/components/Home/ContactUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <Pricing />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
