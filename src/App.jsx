// App.jsx
import React, { Suspense, lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Fallback from './tools/Fallback';
import {
  AlertTriangle,
  Home,
  Building2,
  Flame,
  Wrench,
  ThermometerSun,
  ShowerHead,
  Construction
} from 'lucide-react';
import placeholderImg from './assets/images/placeholder.png'
import ServicePage from './pages/ServicePage';

// images 
import hero from './assets/images/hero.png'

// lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WhyChooseUsPage = lazy(() => import('./pages/WhyChooseUsPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const services = [
  {
    serviceImg: AlertTriangle,
    serviceImgAlt: 'Emergency plumbing icon',
    serviceName: 'Emergency Repairs',
    serviceDesc: 'Available 24/7, our team provides rapid repairs to prevent further damage.',
    extendedDescription: `Our emergency response specialists arrive promptly to diagnose and resolve leaks, burst pipes, or clogs before they escalate into major complications. We utilize advanced diagnostic tools to quickly assess the situation and protect your home or business from costly water damage. Beyond immediate fixes, we also provide thorough inspections to identify any underlying issues. This proactive approach helps prevent repeated breakdowns, giving you the peace of mind that your plumbing system remains secure, day or night.`,
    howWeOffer: `We prioritize swift communication from the moment you place a distress call. Our team will walk you through immediate measures to minimize damage while one of our certified plumbers is dispatched. Once on-site, our technicians conduct a quick yet thorough evaluation, ensuring that every step of the repair process is transparent. Our goal is to restore normalcy to your home or business as efficiently as possible, with long-term preventative solutions in place.`
  },
  {
    serviceImg: Home,
    serviceImgAlt: 'Residential plumbing icon',
    serviceName: 'Residential Plumbing',
    serviceDesc: 'We deliver precise plumbing setups for homes with efficient, reliable workmanship.',
    extendedDescription: `From new pipe installations in recently built properties to modernizing fixtures in older homes, our residential plumbing services ensure a tailored solution for your specific needs. We use top-grade materials so you enjoy minimal leaks and maximum longevity.

In addition, our experts can advise on water-saving technologies, filtration systems, and preventative maintenance strategies. By prioritizing durability and eco-conscious solutions, we keep your home’s plumbing running optimally while helping you conserve water.`,
    howWeOffer: `Our residential services begin with a thorough assessment of your home’s plumbing needs, followed by a detailed quote and timeline. We believe in transparent communication, so you’re never left guessing about costs or progress.
    
Depending on your preferences and requirements, our team can recommend top-quality fixtures or specialized upgrades. We also coordinate with electricians or other contractors if the project calls for a multi-skilled approach, ensuring a seamless experience.`
  },
  {
    serviceImg: Building2,
    serviceImgAlt: 'Commercial plumbing icon',
    serviceName: 'Commercial Plumbing',
    serviceDesc: 'Tailored for businesses, our services resolve complex plumbing challenges with dependable results.',
    extendedDescription: `Whether you manage a single retail store or a sprawling corporate complex, our commercial plumbing solutions address high-usage demands while conforming to local and state regulations. We strive for minimal downtime so you can keep your focus on day-to-day operations.

We’re also available for scheduled upgrades and retrofitting projects that enhance efficiency. From fixture replacements to backflow prevention devices, we ensure your commercial plumbing meets safety standards and lowers operational costs.`,
    howWeOffer: `We start by collaborating with your facility manager or relevant contact to determine the scale and scope of each project. From there, we develop a strategic plan that includes clear milestones, safety checks, and compliance with regulations.
    
During the process, our team works around your operational hours to minimize disruption. With periodic check-ins and site visits, we stay responsive to any emerging needs, ensuring a successful outcome for your business.`
  },
  {
    serviceImg: Flame,
    serviceImgAlt: 'Gas fitting icon',
    serviceName: 'Gas Fitting',
    serviceDesc: 'Certified for gas fitting, we install and maintain gas appliances safely and efficiently.',
    extendedDescription: `Our licensed technicians specialize in installing and inspecting gas lines for appliances such as stoves, fireplaces, and water heaters. We adhere strictly to safety codes, ensuring that every connection is sealed and tested thoroughly.

Beyond installation, we also provide maintenance and emergency services to detect and address leaks. By using modern diagnostic methods, we help safeguard your property from potential hazards, allowing you to enjoy reliable gas-fueled appliances for years to come.`,
    howWeOffer: `Once you request gas-fitting services, we schedule an on-site evaluation to assess your existing infrastructure or future installation requirements. Safety is paramount, so every line is pressure-tested and thoroughly examined.
    
Throughout the entire process, we keep you informed of any required permits or local regulations. Our streamlined approach ensures your gas appliances and piping systems meet industry standards without compromising efficiency or comfort.`
  },
  {
    serviceImg: Wrench,
    serviceImgAlt: 'Preventative maintenance icon',
    serviceName: 'System Maintenance',
    serviceDesc: 'Regular checks and upkeep keep your plumbing system in top condition, helping avoid costly repairs.',
    extendedDescription: `Our comprehensive maintenance plans spot potential trouble before it becomes a crisis. We inspect everything from pipe integrity to water heater efficiency, making minor fixes that prevent major breakdowns later on.

Clients often see reduced utility bills and fewer emergency calls due to our proactive approach. Investing in routine maintenance not only saves you money but also extends the lifespan of your fixtures and piping.`,
    howWeOffer: `We begin with a detailed inspection to create a baseline of your system’s current health. This allows us to customize a maintenance schedule that suits your property’s unique usage patterns.
    
After each visit, you receive a summary report noting any issues found and preventative steps taken. By staying on top of smaller repairs, you’ll avoid expensive overhauls and ensure the longevity of your plumbing infrastructure.`
  },
  {
    serviceImg: ThermometerSun,
    serviceImgAlt: 'Hot water system icon',
    serviceName: 'Hot Water',
    className: 'w-10 h-14',
    serviceDesc: 'Specializing in hot water systems, we ensure consistent performance through expert installs and fixes.',
    extendedDescription: `From modern tankless heaters to traditional storage units, our team can recommend and install the best hot water solution for your household or business. We carefully size units to match usage demands, maximizing both efficiency and comfort.

We also offer routine flushes, part replacements, and thermostat calibrations to keep your water heater running at peak performance. With our expertise, you’ll enjoy steady hot water and reduced energy consumption.`,
    howWeOffer: `We begin by evaluating your usage patterns, property layout, and budget to suggest a water heating solution best suited for you. Our recommendations aim to balance performance, energy efficiency, and long-term maintenance.
    
Installation is carried out by certified professionals who follow strict safety protocols. We’ll also walk you through maintenance tips to keep the system in optimal shape—ensuring you have reliable hot water year-round.`
  },
  {
    serviceImg: ShowerHead,
    serviceImgAlt: 'Drain cleaning icon',
    serviceName: 'Drain Cleaning',
    className: 'w-11 h-13',
    serviceDesc: 'Using advanced tools, we clear clogs and clean drains to restore smooth flow.',
    extendedDescription: `Our team uses hydro-jetting and specialized cable equipment to remove debris without harming your pipes. By eliminating stubborn grease, hair, and mineral buildup, we help reduce the risk of recurring blockages.

Additionally, we inspect drains for potential structural issues or root intrusion, offering targeted repairs when needed. This proactive approach extends the life of your plumbing and gives you peace of mind about your drainage system.`,
    howWeOffer: `Once you schedule a drain cleaning, we perform a quick camera inspection to locate blockages. Depending on the severity and type of clog, we then deploy the right method—ranging from enzyme treatments to high-pressure jetting.
    
After clearing the drain, we run another check to confirm full flow restoration. If we detect any persistent issues like tree root invasion, we’ll recommend a tailored repair plan to resolve them at the source.`
  },
  {
    serviceImg: Construction,
    serviceImgAlt: 'Renovation plumbing icon',
    serviceName: 'Plumbing Upgrades',
    serviceDesc: 'We integrate modern plumbing solutions in renovations and new constructions for flawless results.',
    extendedDescription: `Whether you’re expanding a kitchen, adding a bathroom, or building from scratch, our experts meticulously plan water lines, drains, and fixtures for optimal performance. We focus on smooth integration with existing systems where needed.

Coupled with high-efficiency fixtures and modern materials, our upgrades not only enhance functionality but can also improve your property’s resale value. Our approach ensures minimal disruptions and a seamless finish that complements your design vision.`,
    howWeOffer: `Our process starts with a thorough blueprint review or walk-through of your existing layout. We’ll discuss your goals, be it modernizing outdated fixtures or integrating completely new plumbing installations.
    
From there, we create a phased plan to align with your renovation timeline. Our plumbers collaborate closely with architects, electricians, and general contractors to ensure each step is completed safely, on schedule, and to your exact specifications.`
  }
];


const projectsData = [
  {
    id: 1,
    title: "Modern Bathroom Renovation",
    category: "Residential",
    description: "Complete bathroom overhaul including installation of high-efficiency fixtures, custom shower system, and heated flooring.",
    image: "/api/placeholder/600/400",
    client: "Thompson Residence",
    completionDate: "January 2025",
    extendedDescription: "This renovation encompassed a luxurious walk-in shower featuring multiple spray settings, intricate custom tiling with mosaic accents, and contemporary fixtures that seamlessly merge style with efficiency. The heated flooring system ensures year-round comfort, while a built-in sound system creates a spa-like ambiance—transforming the bathroom into a personal retreat.",
    projectHighlights: "Highlights include a freestanding soaking tub, rainfall shower, ambient LED lighting, and bespoke cabinetry.",
    designExecution: "Our design team collaborated closely with the client to create a modern yet timeless aesthetic. Every detail was meticulously planned and executed to maximize space and incorporate functional luxury.",
    clientFeedback: "The client was thrilled with the transformation, praising the innovative design and exceptional quality of craftsmanship."
  },
  {
    id: 2,
    title: "Commercial Kitchen Plumbing",
    category: "Commercial",
    description: "Installation of industrial-grade plumbing systems for a restaurant kitchen, including grease traps and specialized drainage.",
    image: "/api/placeholder/600/400",
    client: "Seaside Bistro",
    completionDate: "December 2024",
    extendedDescription: "This project featured a comprehensive buildout of an industrial-grade kitchen plumbing system. High-capacity grease interceptors, hygienic stainless steel piping, and state-of-the-art automated dishwashing systems were integrated seamlessly. Tankless water heaters were added to meet peak-hour demands, ensuring energy efficiency and continuous performance.",
    projectHighlights: "Key highlights include robust grease management, hygienic stainless piping, and energy-efficient water heating solutions.",
    designExecution: "Coordinating between multiple trades, our team ensured the plumbing system met rigorous health standards while optimizing workflow in a busy commercial kitchen.",
    clientFeedback: "Restaurant management expressed high satisfaction with the system's reliability and efficiency, noting improved workflow and reduced downtime."
  },
  {
    id: 3,
    title: "Whole-House Repiping",
    category: "Residential",
    description: "Complete replacement of outdated galvanized pipes with modern PEX plumbing throughout a three-story Victorian home.",
    image: "/api/placeholder/600/400",
    client: "Historic Hill Home",
    completionDate: "November 2024",
    extendedDescription: "In this extensive repiping project, outdated galvanized pipes were replaced with modern PEX systems while preserving the home's Victorian charm. PEX piping was discreetly routed behind original moldings, and advanced pressure-regulating valves along with high-performance filtration systems were installed to improve water quality.",
    projectHighlights: "Highlights include discreet pipe routing, advanced pressure regulation, and enhanced water filtration.",
    designExecution: "Working alongside heritage experts, our design seamlessly integrated modern plumbing upgrades without compromising the historical aesthetic.",
    clientFeedback: "Homeowners were delighted with the blend of modern efficiency and vintage charm, noting a remarkable improvement in water quality and overall performance."
  },
  {
    id: 4,
    title: "Hotel Water Heating System",
    category: "Commercial",
    description: "Installation of energy-efficient tankless water heating system for a 40-room boutique hotel.",
    image: "/api/placeholder/600/400",
    client: "Harbor View Inn",
    completionDate: "October 2024",
    extendedDescription: "This project involved installing an energy-efficient tankless water heating system for a boutique hotel. Multiple interconnected units ensured a continuous hot water supply, even during peak times. Integrated monitoring technology allowed real-time energy tracking, resulting in significant cost savings and reduced environmental impact.",
    projectHighlights: "Key highlights include an interconnected tankless system, advanced energy monitoring, and a reduced carbon footprint.",
    designExecution: "The installation was executed with precision to ensure scalability and efficiency, all while causing minimal disruption to hotel operations.",
    clientFeedback: "Hotel management reported a significant boost in hot water reliability and energy efficiency, contributing to increased guest satisfaction."
  },
  {
    id: 5,
    title: "Outdoor Irrigation System",
    category: "Residential",
    description: "Custom designed and installed water-saving irrigation system with smart controls for a large residential property.",
    image: "/api/placeholder/600/400",
    client: "Meadowlark Estate",
    completionDate: "September 2024",
    extendedDescription: "A state-of-the-art irrigation system was designed for a large residential property. Custom drip irrigation lines were installed to cater to diverse plant varieties, while smart sensors automatically adjusted watering schedules based on real-time weather and soil conditions, reducing water waste.",
    projectHighlights: "Highlights include automated smart sensors, tailored drip irrigation, and eco-friendly water management.",
    designExecution: "Designed with both functionality and aesthetics in mind, the system blends seamlessly with the landscape and maximizes water efficiency.",
    clientFeedback: "The client praised the innovative system for its efficiency and noted a substantial reduction in water usage and utility costs."
  },
  {
    id: 6,
    title: "Medical Facility Plumbing",
    category: "Commercial",
    description: "Specialized medical-grade plumbing installation with strict sanitation requirements for a new dental clinic.",
    image: "/api/placeholder/600/400",
    client: "Bright Smile Dentistry",
    completionDate: "August 2024",
    extendedDescription: "A specialized plumbing system was installed for a new dental clinic, adhering to the highest sanitation standards. The project featured advanced backflow prevention, sanitized supply lines, and dedicated plumbing circuits for autoclave machines and water filtration systems, ensuring a sterile environment.",
    projectHighlights: "Key highlights include stringent sanitation protocols, dedicated autoclave circuits, and advanced filtration.",
    designExecution: "The system was engineered with precision to meet rigorous health regulations while ensuring seamless integration with clinical operations.",
    clientFeedback: "Clinic management was highly satisfied with the project's meticulous execution and the system's reliability in maintaining a sterile environment."
  },
  {
    id: 7,
    title: "Eco-Friendly Rainwater Harvesting",
    category: "Residential",
    description: "Installation of a comprehensive rainwater collection and filtration system for household use.",
    image: "/api/placeholder/600/400",
    client: "Green Living Residence",
    completionDate: "July 2024",
    extendedDescription: "An innovative rainwater harvesting system was installed, capturing roof runoff in high-capacity barrels and filtering it through a multi-stage process for reuse in laundry and landscaping. Smart overflow systems direct excess water to permeable ground areas, optimizing resource use.",
    projectHighlights: "Highlights include multi-stage filtration, high-capacity collection, and intelligent overflow management.",
    designExecution: "Sustainability and modern technology converge in this design, which maximizes water reuse while maintaining aesthetic appeal.",
    clientFeedback: "The client appreciated the eco-friendly approach, reporting significant reductions in water bills and an enhanced sustainable profile."
  },
  {
    id: 8,
    title: "Office Building Retrofit",
    category: "Commercial",
    description: "Complete plumbing retrofit for a 5-story office building, including water-saving fixtures and ADA compliance upgrades.",
    image: "/api/placeholder/600/400",
    client: "Downtown Business Center",
    completionDate: "June 2024",
    extendedDescription: "A comprehensive retrofit transformed the plumbing infrastructure of a 5-story office building. Modern touchless fixtures, low-flow toilets, and new ADA-compliant supply lines were installed. Energy-efficient hot water systems and state-of-the-art leak detection sensors further modernized the facility.",
    projectHighlights: "Highlights include ADA-compliant upgrades, touchless fixtures, and advanced leak detection technology.",
    designExecution: "Executed in phases to minimize disruption, the retrofit combined modern technology with regulatory compliance to deliver a highly efficient system.",
    clientFeedback: "Building management praised the retrofit for improved efficiency, lower utility costs, and enhanced comfort for occupants."
  }
];


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<Fallback />}>
            <HomePage hero={hero} projectsData={projectsData} services={services.slice(0,6)}/>
          </Suspense>
        }
      />

      <Route
        path="services"
        element={
          <Suspense fallback={<Fallback />}>
            <ServicesPage services={services} placeholderImg={placeholderImg}/>
          </Suspense>
        }
      />

      <Route
        path="why-choose-us"
        element={
          <Suspense fallback={<Fallback />}>
            <WhyChooseUsPage placeholderImg={placeholderImg}/>
          </Suspense>
        }
      />

      <Route
        path="projects"
        element={
          <Suspense fallback={<Fallback />}>
            <ProjectsPage placeholderImg={placeholderImg} projectsData={projectsData}/>
          </Suspense>
        }
      />

      <Route
        path="about-us"
        element={
          <Suspense fallback={<Fallback />}>
            <AboutUsPage placeholderImg={placeholderImg}/>
          </Suspense>
        }
      />

      <Route
        path="contact-us"
        element={
          <Suspense fallback={<Fallback />}>
            <ContactPage placeholderImg={placeholderImg}/>
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
