import React, { useEffect, useState } from "react";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import ImageComponent from "./ImageComponent";
import { TbHours24 } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { linkName: "Home", linkTo: "/" },
    { linkName: "Services", linkTo: "/services" },
    { linkName: "Why Choose Us", linkTo: "/why-choose-us" },
    { linkName: "Projects", linkTo: "/projects" },
    { linkName: "About Us", linkTo: "/about-us" },
    { linkName: "Get a Quote", linkTo: "/contact-us" },
  ];

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-primary-400 rounded-sm p"
      : "p text-[#000] hover:text-primary-400 transition";

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Topbar: only when not scrolled or menu opened */}
      {!scrolled && !isMenuOpen && (
        <header className="responsivePad bg-primary font-supreme-medium flex justify-between 2xl:py-6 lg:py-4 py-2 text-textWhite">
          <div className="flex items-center gap-2">
            <TbHours24 className="h7" />
            <p className="text-center p">Open 24-Hours</p>
          </div>
          <div className="flex items-center gap-2 md:rounded-lg rounded-md hover:underline transition-all">
            <FiPhoneCall className="text-textWhite w-5 h-5" />
            <a href="tel:0432 147 251" className="text-textWhite p">
              Call Now 0432 147 251
            </a>
          </div>
        </header>
      )}

      {/* Navbar: Transparent over Hero unless scrolled or menu open */}
      <HeroNavbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        className={`transition-all duration-300 ${
          scrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
        } text-textDark font-supreme-medium xl:py-3 py-2 2xl:px-[64px] xl:px-[48px] lg:px-[40px] md:px-[16px] sm:px-[8px]`}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
          <NavbarBrand>
            <Link to="/">
              <ImageComponent
                src={logo}
                alt="Lightwater Plumbing logo"
                width={48}
                height={48}
                loading="eager"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4" justify="center">
          {menuItems.map((item) =>
            item.linkName !== "Get a Quote" ? (
              <NavbarItem key={item.linkName}>
                <NavLink to={item.linkTo} className={linkClass}>
                  {item.linkName}
                </NavLink>
              </NavbarItem>
            ) : (
              <Button
                as={Link}
                to="/contact-us"
                className="bg-primary text-textWhite px-6 rounded-sm p"
                key={item.linkName}
              >
                {item.linkName}
              </Button>
            )
          )}
        </NavbarContent>

        <NavbarMenu className="bg-white text-textDark mt-4 md:px-10 sm:px-8 px-6 font-supreme-medium">
          {menuItems.map((item) => (
            <NavbarMenuItem
              key={item.linkName}
              onClick={() => setIsMenuOpen(false)}
            >
              <NavLink
                to={item.linkTo}
                onClick={() => setIsMenuOpen(false)}
                className="hover:underline transition p"
              >
                {item.linkName}
              </NavLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </HeroNavbar>
    </div>
  );
}
