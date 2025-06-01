// App.jsx
import React, { Suspense, lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Fallback from "./tools/Fallback";
import {
  AlertTriangle,
  Home,
  Building2,
  Flame,
  Wrench,
  ThermometerSun,
  ShowerHead,
  Construction,
} from "lucide-react";
import ServicePage from "./pages/ServicePage";
import placeholderImg from "./assets/images/placeholder.png";

// images
import heroImg from "./assets/images/hero.webp";
import servicesImg from "./assets/images/bathroom.webp";
import whychooseusImg from "./assets/images/shower.webp";
import contactImg from "./assets/images/ute.webp";
import project1 from "./assets/images/aboutUs1.webp";
import project2 from "./assets/images/project2.webp";
import project3 from "./assets/images/project3.webp";
import project4 from "./assets/images/project4.webp";
import project5 from "./assets/images/project5.webp";
import project6 from "./assets/images/project6.webp";
import project7 from "./assets/images/project7.webp";
import project8 from "./assets/images/project8.webp";

// lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const WhyChooseUsPage = lazy(() => import("./pages/WhyChooseUsPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export const services = [
  {
    serviceImg: AlertTriangle,
    serviceImgAlt: "Emergency plumbing icon",
    serviceName: "Emergency Repairs",
    serviceDesc:
      "Available 24/7, our team provides rapid repairs to prevent further damage.",
    extendedDescription: `Our emergency response specialists arrive promptly to diagnose and resolve leaks, burst pipes, or clogs before they escalate into major complications. We utilize advanced diagnostic tools to quickly assess the situation and protect your home or business from costly water damage. Beyond immediate fixes, we also provide thorough inspections to identify any underlying issues. This proactive approach helps prevent repeated breakdowns, giving you the peace of mind that your plumbing system remains secure, day or night.`,
    howWeOffer: `We prioritize swift communication from the moment you place a distress call. Our team will walk you through immediate measures to minimize damage while one of our certified plumbers is dispatched. Once on-site, our technicians conduct a quick yet thorough evaluation, ensuring that every step of the repair process is transparent. Our goal is to restore normalcy to your home or business as efficiently as possible, with long-term preventative solutions in place.`,
  },
  {
    serviceImg: Home,
    serviceImgAlt: "Residential plumbing icon",
    serviceName: "Residential Plumbing",
    serviceDesc:
      "We deliver precise plumbing setups for homes with efficient, reliable workmanship.",
    extendedDescription: `From new pipe installations in recently built properties to modernizing fixtures in older homes, our residential plumbing services ensure a tailored solution for your specific needs. We use top-grade materials so you enjoy minimal leaks and maximum longevity.

In addition, our experts can advise on water-saving technologies, filtration systems, and preventative maintenance strategies. By prioritizing durability and eco-conscious solutions, we keep your home’s plumbing running optimally while helping you conserve water.`,
    howWeOffer: `Our residential services begin with a thorough assessment of your home’s plumbing needs, followed by a detailed quote and timeline. We believe in transparent communication, so you’re never left guessing about costs or progress.
    
Depending on your preferences and requirements, our team can recommend top-quality fixtures or specialized upgrades. We also coordinate with electricians or other contractors if the project calls for a multi-skilled approach, ensuring a seamless experience.`,
  },
  {
    serviceImg: Building2,
    serviceImgAlt: "Commercial plumbing icon",
    serviceName: "Commercial Plumbing",
    serviceDesc:
      "Tailored for businesses, our services resolve complex plumbing challenges with dependable results.",
    extendedDescription: `Whether you manage a single retail store or a sprawling corporate complex, our commercial plumbing solutions address high-usage demands while conforming to local and state regulations. We strive for minimal downtime so you can keep your focus on day-to-day operations.

We’re also available for scheduled upgrades and retrofitting projects that enhance efficiency. From fixture replacements to backflow prevention devices, we ensure your commercial plumbing meets safety standards and lowers operational costs.`,
    howWeOffer: `We start by collaborating with your facility manager or relevant contact to determine the scale and scope of each project. From there, we develop a strategic plan that includes clear milestones, safety checks, and compliance with regulations.
    
During the process, our team works around your operational hours to minimize disruption. With periodic check-ins and site visits, we stay responsive to any emerging needs, ensuring a successful outcome for your business.`,
  },
  {
    serviceImg: Flame,
    serviceImgAlt: "Gas fitting icon",
    serviceName: "Gas Fitting",
    serviceDesc:
      "Certified for gas fitting, we install and maintain gas appliances safely and efficiently.",
    extendedDescription: `Our licensed technicians specialize in installing and inspecting gas lines for appliances such as stoves, fireplaces, and water heaters. We adhere strictly to safety codes, ensuring that every connection is sealed and tested thoroughly.

Beyond installation, we also provide maintenance and emergency services to detect and address leaks. By using modern diagnostic methods, we help safeguard your property from potential hazards, allowing you to enjoy reliable gas-fueled appliances for years to come.`,
    howWeOffer: `Once you request gas-fitting services, we schedule an on-site evaluation to assess your existing infrastructure or future installation requirements. Safety is paramount, so every line is pressure-tested and thoroughly examined.
    
Throughout the entire process, we keep you informed of any required permits or local regulations. Our streamlined approach ensures your gas appliances and piping systems meet industry standards without compromising efficiency or comfort.`,
  },
  {
    serviceImg: Wrench,
    serviceImgAlt: "Preventative maintenance icon",
    serviceName: "System Maintenance",
    serviceDesc:
      "Regular checks and upkeep keep your plumbing system in top condition, helping avoid costly repairs.",
    extendedDescription: `Our comprehensive maintenance plans spot potential trouble before it becomes a crisis. We inspect everything from pipe integrity to water heater efficiency, making minor fixes that prevent major breakdowns later on.

Clients often see reduced utility bills and fewer emergency calls due to our proactive approach. Investing in routine maintenance not only saves you money but also extends the lifespan of your fixtures and piping.`,
    howWeOffer: `We begin with a detailed inspection to create a baseline of your system’s current health. This allows us to customize a maintenance schedule that suits your property’s unique usage patterns.
    
After each visit, you receive a summary report noting any issues found and preventative steps taken. By staying on top of smaller repairs, you’ll avoid expensive overhauls and ensure the longevity of your plumbing infrastructure.`,
  },
  {
    serviceImg: ThermometerSun,
    serviceImgAlt: "Hot water system icon",
    serviceName: "Hot Water",
    className: "w-10 h-14",
    serviceDesc:
      "Specializing in hot water systems, we ensure consistent performance through expert installs and fixes.",
    extendedDescription: `From modern tankless heaters to traditional storage units, our team can recommend and install the best hot water solution for your household or business. We carefully size units to match usage demands, maximizing both efficiency and comfort.

We also offer routine flushes, part replacements, and thermostat calibrations to keep your water heater running at peak performance. With our expertise, you’ll enjoy steady hot water and reduced energy consumption.`,
    howWeOffer: `We begin by evaluating your usage patterns, property layout, and budget to suggest a water heating solution best suited for you. Our recommendations aim to balance performance, energy efficiency, and long-term maintenance.
    
Installation is carried out by certified professionals who follow strict safety protocols. We’ll also walk you through maintenance tips to keep the system in optimal shape—ensuring you have reliable hot water year-round.`,
  },
  {
    serviceImg: ShowerHead,
    serviceImgAlt: "Drain cleaning icon",
    serviceName: "Drain Cleaning",
    className: "w-11 h-13",
    serviceDesc:
      "Using advanced tools, we clear clogs and clean drains to restore smooth flow.",
    extendedDescription: `Our team uses hydro-jetting and specialized cable equipment to remove debris without harming your pipes. By eliminating stubborn grease, hair, and mineral buildup, we help reduce the risk of recurring blockages.

Additionally, we inspect drains for potential structural issues or root intrusion, offering targeted repairs when needed. This proactive approach extends the life of your plumbing and gives you peace of mind about your drainage system.`,
    howWeOffer: `Once you schedule a drain cleaning, we perform a quick camera inspection to locate blockages. Depending on the severity and type of clog, we then deploy the right method—ranging from enzyme treatments to high-pressure jetting.
    
After clearing the drain, we run another check to confirm full flow restoration. If we detect any persistent issues like tree root invasion, we’ll recommend a tailored repair plan to resolve them at the source.`,
  },
  {
    serviceImg: Construction,
    serviceImgAlt: "Renovation plumbing icon",
    serviceName: "Plumbing Upgrades",
    serviceDesc:
      "We integrate modern plumbing solutions in renovations and new constructions for flawless results.",
    extendedDescription: `Whether you’re expanding a kitchen, adding a bathroom, or building from scratch, our experts meticulously plan water lines, drains, and fixtures for optimal performance. We focus on smooth integration with existing systems where needed.

Coupled with high-efficiency fixtures and modern materials, our upgrades not only enhance functionality but can also improve your property’s resale value. Our approach ensures minimal disruptions and a seamless finish that complements your design vision.`,
    howWeOffer: `Our process starts with a thorough blueprint review or walk-through of your existing layout. We’ll discuss your goals, be it modernizing outdated fixtures or integrating completely new plumbing installations.
    
From there, we create a phased plan to align with your renovation timeline. Our plumbers collaborate closely with architects, electricians, and general contractors to ensure each step is completed safely, on schedule, and to your exact specifications.`,
  },
];

const projectsData = [
  {
    id: 1,
    title: "Mechanical Plumbing",
    category: "Commercial",
    description:
      "Installation of mechanical plumbing systems to regulate commercial HVAC through hot and cold fluid distribution.",
    image: project1,
    client: "Scenic World Katoomba",
    completionDate: "2020",
    extendedDescription:
      "This commercial mechanical plumbing project involved the complete installation of HVAC-related piping systems to support both heating and cooling operations. The objective was to enable the efficient transfer of heated and chilled fluids across various building zones to maintain optimal internal climate control. Extensive planning was required to route pipework through mechanical risers and plant rooms without interfering with structural or operational elements. The team ensured that all piping conformed to commercial code requirements and pressure standards, incorporating insulation for temperature retention and condensation prevention. The result is a seamless system that plays a critical role in regulating ambient conditions across the facility while improving long-term energy efficiency and serviceability.",
    projectHighlights:
      "Integrated pipework for HVAC control, ensuring optimal indoor temperature regulation.",
  },
  {
    id: 2,
    title: "Modern Bathroom Renovation",
    category: "Residential",
    description:
      "Contemporary bathroom upgrade focused on precision plumbing integrated with modern fixtures and finishes.",
    image: project2,
    client: "Private",
    completionDate: "2022",
    extendedDescription:
      "This residential renovation focused on transforming a dated bathroom into a sleek, modern retreat through a blend of advanced plumbing techniques and aesthetic upgrades. The team replaced existing pipework to meet modern flow and pressure standards and installed new concealed in-wall fixtures, including a dual-function shower system and wall-hung vanity with integrated drainage. Special attention was paid to space-saving solutions, with underfloor heating and a minimalist freestanding tub included. The project also involved collaboration with interior designers to ensure the plumbing layout aligned with tiling patterns and lighting schemes. Ultimately, the bathroom delivered both functional comfort and visual elegance, exceeding the homeowner’s expectations.",
    projectHighlights:
      "Included high-efficiency fixtures, sleek tapware, and custom shower systems.",
  },
  {
    id: 3,
    title: "Stormwater Drainage",
    category: "Commercial",
    description:
      "Installation of stormwater drainage system to prevent field flooding at an educational facility.",
    image: project3,
    client: "Private",
    completionDate: "2023",
    extendedDescription:
      "This commercial-grade drainage project addressed a recurring problem at a local school, where heavy rain events frequently caused waterlogging on the sports field. The solution involved trenching and laying an extensive network of subsurface stormwater pipes that connected to new collection pits and detention basins. Hydraulic flow calculations were used to model rainfall impact and guide pipe sizing, ensuring the system could manage both peak discharge and overflow conditions. All work was conducted during school holiday periods to avoid disruption. The installed system now redirects stormwater effectively away from high-use areas, preserving field quality and minimizing maintenance costs for the school.",
    projectHighlights:
      "Designed to handle high surface water load and protect outdoor facilities.",
  },
  {
    id: 4,
    title: "Water Treatment Plant",
    category: "Industrial",
    description:
      "Plumbing and air services installation for large-scale stormwater treatment infrastructure.",
    image: project4,
    client: "Private",
    completionDate: "2025",
    extendedDescription:
      "As part of a large-scale infrastructure development, this industrial project required the full installation of process plumbing and compressed air systems within a stormwater treatment plant. The scope included routing high-diameter pipework for intake and discharge, installing backflow prevention devices, and integrating with filtration and chemical dosing equipment. Safety and accessibility were top priorities, with all installations designed for maintenance convenience and emergency access. Compliance with industrial water treatment standards was rigorously maintained. The resulting setup ensures that captured stormwater is treated efficiently before being discharged or reused, contributing to environmental sustainability and regulatory compliance.",
    projectHighlights:
      "Built for high-volume water processing and operational resilience.",
  },
  {
    id: 5,
    title: "Fire Hydrant System",
    category: "Industrial",
    description:
      "Implementation of a fire hydrant system to support emergency response infrastructure.",
    image: project5,
    client: "Private",
    completionDate: "2024",
    extendedDescription:
      "This project involved the design and installation of a fully certified fire hydrant system to protect an industrial facility. Work began with site surveying and hydraulic calculations to determine optimal hydrant placement for coverage and pressure compliance. Crews installed main water supply lines, isolation valves, booster connection points, and wall-mounted hydrant reels. The system was connected to the building's main fire pump system and tested in coordination with fire safety consultants. All components were selected to meet AS 2419 requirements and allow future expandability. Final commissioning included pressure testing and sign-off from relevant authorities, ensuring full operational readiness.",
    projectHighlights:
      "Compliant with fire safety standards for industrial settings.",
  },
  {
    id: 6,
    title: "School Facility",
    category: "Commercial",
    description:
      "Full toilet block plumbing installation for a school, from groundwork to final testing.",
    image: project6,
    client: "School",
    completionDate: "2024",
    extendedDescription:
      "This project involved delivering an entirely new toilet block for a school, requiring careful planning and execution across several construction phases. The plumbing team began with underground drainage and water rough-ins, followed by internal wall set-outs for sinks, toilets, and urinals. Plumbing fixtures were selected to be both vandal-resistant and water-efficient to suit the school environment. Care was also taken to ensure accessibility, with DDA-compliant bathrooms included. The final stage involved thorough commissioning and testing for leaks, pressure, and flow. The finished facility provides durable, hygienic amenities that meet both educational infrastructure standards and student needs.",
    projectHighlights:
      "Included water-efficient systems and student-safe fixtures.",
  },
  {
    id: 7,
    title: "Hot Water Heating System",
    category: "Residential",
    description:
      "Conversion from gas storage to instantaneous gas hot water system for residential use.",
    image: project7,
    client: "Private",
    completionDate: "2025",
    extendedDescription:
      "This energy-efficiency upgrade was centered around replacing an aging gas storage hot water system with a modern instantaneous gas heater. The client requested a solution that offered consistent hot water without the wait time or energy waste of a storage tank. The team removed the existing system, rerouted pipework to match the new compact unit’s footprint, and installed temperature control valves for safety. The system was tested under varying demand loads to ensure stable performance. Post-installation, the household now benefits from endless hot water, lower gas bills, and a significantly smaller carbon footprint—while gaining additional storage space where the old system stood.",
    projectHighlights:
      "Energy-efficient solution offering space-saving and low running costs.",
  },
  {
    id: 8,
    title: "Architectural Work",
    category: "Residential",
    description:
      "Renewal of all plumbing services in a high-end, architecturally designed full-home renovation.",
    image: project8,
    client: "Private",
    completionDate: "2021",
    extendedDescription:
      "In this bespoke residential project, the team was tasked with completely renewing the plumbing infrastructure as part of a full architectural home renovation. This involved navigating challenging layouts, concealed plumbing runs, and integrating premium fittings and finishes across bathrooms, kitchens, and outdoor wet areas. Custom drainage and venting solutions were designed to fit within strict architectural constraints without compromising flow performance or compliance. Close coordination with the builder and architect ensured that all visible plumbing elements enhanced the home’s design vision. The end result is a sophisticated, high-performance plumbing system that blends seamlessly into the luxurious surroundings.",
    projectHighlights:
      "Premium plumbing integrated with custom architectural features.",
  },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<Fallback />}>
            <HomePage
              heroImg={heroImg}
              projectsData={projectsData}
              services={services.slice(0, 6)}
            />
          </Suspense>
        }
      />

      <Route
        path="services"
        element={
          <Suspense fallback={<Fallback />}>
            <ServicesPage services={services} servicesImg={servicesImg} />
          </Suspense>
        }
      />

      <Route
        path="why-choose-us"
        element={
          <Suspense fallback={<Fallback />}>
            <WhyChooseUsPage whychooseusImg={whychooseusImg} />
          </Suspense>
        }
      />

      <Route
        path="projects"
        element={
          <Suspense fallback={<Fallback />}>
            <ProjectsPage
              placeholderImg={placeholderImg}
              projectsData={projectsData}
            />
          </Suspense>
        }
      />

      <Route
        path="about-us"
        element={
          <Suspense fallback={<Fallback />}>
            <AboutUsPage placeholderImg={placeholderImg} />
          </Suspense>
        }
      />

      <Route
        path="contact-us"
        element={
          <Suspense fallback={<Fallback />}>
            <ContactPage contactImg={contactImg} />
          </Suspense>
        }
      />

      <Route
        path="projects/:slug"
        element={
          <Suspense fallback={<Fallback />}>
            <ProjectPage projectsData={projectsData} />
          </Suspense>
        }
      />

      <Route
        path="services/:slug"
        element={
          <Suspense fallback={<Fallback />}>
            <ServicePage services={services} />
          </Suspense>
        }
      />

      <Route
        path="*"
        element={
          <Suspense fallback={<Fallback />}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
