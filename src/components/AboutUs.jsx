import React from "react";
import { HashLink } from "react-router-hash-link";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import aboutUs1 from "../assets/images/aboutUs1.webp";
import ImageComponent from "./ImageComponent";

const AboutUs = () => {
  // Bullet points to display under the main description
  const features = [
    { text: "Affordable Pricing" },
    { text: "Fast Service" },
    { text: "1,100+ Projects" },
    { text: "24/7 Service" },
    { text: "Plumbing Experts" },
    { text: "Modern Tools" },
  ];

  return (
    <Section bg="bg-white" text="text-textBlack">
      {/* Outer container for overall width control */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 md:gap-8 sm:gap-6 gap-4 items-center">
          {/* Right Column: Text & Features */}
          <div>
            <SectionHeader
              // Subheading
              sectionName="About Us"
              // Main heading
              sectionHeader="Best Plumbing Services Trusted By Hundreds Since 2000"
              // Paragraph/description
              sectionDesc="With decades of experience since 2000, we stand as your premier plumbing experts, committed to delivering dependable services that have earned the trust and loyalty of hundreds of customers through unwavering integrity and precise workmanship."
            />

            {/* Feature List (Check Icons) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <i className="bi bi-check-circle-fill text-orange-500 mr-2 text-xl"></i>
                  <span className="text-base sm:text-md">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Left Column: Image Placeholder */}
          <div className="flex justify-center">
            <ImageComponent
              src={aboutUs1}
              alt="Professional plumber at work"
              width={600}
              height={450}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
