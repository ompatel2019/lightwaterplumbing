import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
// Make sure you've installed "bootstrap-icons" and imported the CSS in your app
// import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from "../assets/images/logo.svg"
import ImageComponent from "./ImageComponent";

const Footer = ({ bg, text }) => {
  const py = '2xl:pt-32 xl:pt-24 md:pt-16 sm:pt-12 pt-8';

  // Feel free to move this data outside the component or make it dynamic
  const data = {
    address: {
      label: 'Address:',
      value: 'Orchard Hills, New South Wales',
    },
    contact: {
      label: 'Contact:',
      phone: '0432 147 251',
      email: 'plumbing@lightwatergroup.com.au',
    },
    columnLinks: [
      {
        links: [
          { title: 'Home', url: '/home' },
          { title: 'Services', url: '/services' },
          { title: 'Why Choose Us', url: '/why-choose-us' },
          { title: 'Projects', url: '/projects' },
        ],
      },
      {
        links: [
          { title: 'About Us', url: '/about-us' },
          { title: 'Contact Us', url: '/contact-us' },
          { title: 'Leave Us A Review', url: 'https://g.page/r/CZQxhjmvUeTaEAI/review' },
        ],
      },
    ],
    // Replace react-icons with Bootstrap Icons
    // Each icon is an <i> tag with the appropriate .bi-<icon-name> class
    socialMediaLinks: [
      { url: 'https://www.facebook.com/p/LightWater-Plumbing-Electrical-100021968155494/', icon: <i className="bi bi-facebook size-6" /> },
      { url: '#', icon: <i className="bi bi-instagram size-6" /> },
      { url: '#', icon: <i className="bi bi-linkedin size-6" /> },
    ],
    footerText: `${new Date().getFullYear()} Lightwater Plumbing. All rights reserved.`,
    credit: [
      { title: 'Privacy Policy', url: '#' },
      { title: 'Terms of Service', url: '#' },
      { title: 'Cookies Settings', url: '#' },
    ],
  };

  const { address, contact, columnLinks, socialMediaLinks, footerText, footerLinks } = data;

  return (
    <Section bg={bg} text={text} py={py}>
      <footer id="relume" className="py-12">
        <div className="container">
          {/* Top section: Logo + Address/Contact + Social */}
          <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
            {/* Left column: Logo, Address, Contact, Social */}
            <div>
              {/* Logo */}
              <div className="rb-6 mb-6 md:mb-8">
              <ImageComponent 
                src={logo} 
                alt="Lightwater Plumbing logo" 
                width={48} 
                height={48} 
                loading="lazy" 
                />
              </div>

              {/* Address & Contact */}
              <div className="rb-6 mb-6 md:mb-8">
                <div>
                  <p className="mb-1 p font-semibold">{address.label}</p>
                  <p className="mb-5 text-sm md:mb-6">{address.value}</p>
                </div>
                <div>
                  <p className="mb-1 p font-semibold">{contact.label}</p>
                  <p className="flex flex-col text-sm underline decoration-black underline-offset-1 md:mb-6">
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
                {socialMediaLinks.map((item, idx) => (
                  <a key={idx} href={item.url}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right column: Link Lists */}
            <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
              {columnLinks.map((col, i) => (
                <ul key={i}>
                  {col.links.map((link, j) => (
                    <li key={j} className="py-2 text-sm font-semibold">
                      <a target='_blank' href={link.url}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Horizontal divider */}
          <div className="h-px w-full bg-black" />

          {/* Bottom row: Footer text + Footer links */}
          <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8 border-t-2">
            <p className="mt-8 md:mt-0">{footerText}</p>
            <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
              <Link target='_blank' to='https://bytesitedigital.com.au/'>Powered by bytesitedigital.</Link>
            </ul>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
