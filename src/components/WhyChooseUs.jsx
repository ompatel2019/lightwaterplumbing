import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, Clock, Award, Shield } from "lucide-react";
import aboutUs1 from "../assets/images/aboutUs1.webp";

const WhyChooseUs = ({ bg, text, placeholderImg }) => {
  const benefits = [
    {
      title: "24/7 Emergency Service",
      description: "Round-the-clock support for your urgent plumbing needs",
      icon: <Clock className="text-blue-500 flex-shrink-0" size={20} />,
    },
    {
      title: "Licensed Professionals",
      description: "Fully certified experts with years of field experience",
      icon: <Award className="text-blue-500 flex-shrink-0" size={20} />,
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees, detailed quotes before we start work",
      icon: <Shield className="text-blue-500 flex-shrink-0" size={20} />,
    },
    {
      title: "Satisfaction Guaranteed",
      description: "We're not happy until you're completely satisfied",
      icon: <CheckCircle className="text-blue-500 flex-shrink-0" size={20} />,
    },
  ];

  return (
    <Section bg={bg} text={text}>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column with image - simplified to take half the space on larger screens */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            {/* Enhanced decorative elements */}
            <div className="absolute -z-10 w-full h-full max-w-xl bg-blue-100 rounded-lg transform rotate-3 -translate-x-2 translate-y-2 opacity-20"></div>
            <div className="absolute -z-10 w-3/4 h-3/4 right-0 bottom-0 bg-primary rounded-lg transform -rotate-2 translate-x-4 translate-y-4 opacity-10"></div>

            {/* Image container with improved dimensions and responsive sizing */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl w-full max-w-lg">
              {/* Improved aspect ratio wrapper */}
              <div className="aspect-w-4 aspect-h-3 w-full">
                <ImageComponent
                  src={aboutUs1}
                  alt="Professional plumber at work"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Floating badge for extra visual interest */}
              <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <span className="text-sm font-bold text-gray-800">
                  24/7 Service
                </span>
              </div>
            </div>
          </div>

          {/* Right column with content */}
          <div className="space-y-6 order-1 lg:order-2">
            <SectionHeader
              sectionName="Why Choose Us"
              sectionHeader="Your Premier Plumbing Partner For Every Home Challenge"
              sectionDesc="We combine cutting-edge technology with decades of hands-on expertise to deliver plumbing solutions that stand the test of time."
            />

            {/* Benefits grid with improved spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 p-2 bg-white bg-opacity-10 rounded-full">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{benefit.title}</h3>
                      <p className="text-sm opacity-75 mt-1">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced customer testimonial */}
            {/* <div className="bg-white bg-opacity-5 p-6 rounded-lg italic text-sm border-l-4 border-blue-500 mt-8 relative">
              <div className="absolute -top-3 -left-3 bg-blue-500 rounded-full p-2 shadow-md">
                <ThumbsUp size={16} className="text-white" />
              </div>
              <p className="text-base">"The team was professional, efficient, and solved our plumbing emergency in no time. Highly recommended!"</p>
              <div className="mt-3 font-semibold text-blue-400">— Sarah Johnson, Homeowner</div>
            </div> */}

            {/* CTA button with improved spacing */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact-us" className="flex-1">
                <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 group">
                  Schedule Your Call
                  <i className="bi bi-arrow-right ml-2 inline-block transform group-hover:translate-x-1 transition-transform"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
