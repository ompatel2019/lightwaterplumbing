// pages/HomePage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';

// ─── Sections ───────────────────────────────────────────────────────────
import Hero from '../components/Hero';
import CTAMini from '../components/CTAMini';
import Stats from '../components/Stats';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Faqs from '../components/Faqs';
import { BlurFade } from "@/components/magicui/blur-fade";

const HomePage = ({ hero, services, projectsData }) => {
  const jsonLdHomePage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Lightwater Plumbing | Penrith Plumbing & Services",
    "description": "Welcome to Lightwater Plumbing, your trusted provider of plumbing services in Penrith.",
    "url": "https://example.com/"
  };

  const stats = [ 
    { stat: "15", statType: "+", statDesc: "Years Experience" },
    { stat: "800", statType: "+", statDesc: "Clients Served" },
    { stat: "2500", statType: "+", statDesc: "Projects Completed" }
  ];

return (
    <>
      <SeoHelmet
        title="Lightwater Plumbing | Penrith Plumbing & Services"
        description="Welcome to Lightwater Plumbing, your local Penrith experts for reliable plumbing and maintenance solutions."
        canonicalUrl="https://example.com/"
        jsonSchema={jsonLdHomePage}
      />

      <BlurFade delay={0.15} inView>
        <Hero hero={hero}/>
      </BlurFade>

      <Services bg="bg-secondary" text="text-textBlack" services={services} isHome={true}/>
      <CTAMini text="Schedule Your Free Consultation Today"/>
      <WhyChooseUs bg="bg-white" text="text-textBlack" hero={hero}/>
      <Stats stats={stats} bg="bg-primary" text="text-textWhite" isHome={true}/>
      <Projects bg="bg-white" text="text-textBlack" isHome={true} hero={hero} projectsData={projectsData}/>
      <CTAMini text="Schedule Your Free Consultation Today!"/>
      <Testimonials bg="bg-white" text="text-textBlack"/>
      <Faqs bg="bg-white" text="text-textBlack"/>
    </>
  );
};

export default HomePage;
