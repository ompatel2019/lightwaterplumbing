import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg"
import ImageComponent from "./ImageComponent";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { linkName: "Home", linkTo: "/" },
    { linkName: "Services", linkTo: "/services" },
    { linkName: "Why Choose Us", linkTo: "/why-choose-us" },
    { linkName: "Projects", linkTo: "/projects" },
    { linkName: "About Us", linkTo: "/about-us" },
    { linkName: "Get a Quote", linkTo: "/contact-us" },
  ];

  const linkClass = ({isActive}) => isActive ? 'text-primary-400 rounded-sm p' : 'p text-textDark hover:text-primary-400 transition'

  // For fully controlled, pass BOTH isMenuOpen and onMenuOpenChange
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="bg-white text-textDark font-supreme-medium xl:py-3 py-2 2xl:px-[64px] xl:px-[48px] lg:px-[40px] md:px-[16px] sm:px-[8px]"
    >
      {/* Left side: brand + menu toggle (mobile) */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link to='/'>
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

      {/* Desktop nav */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {menuItems.map((item) => (
            item.linkName != 'Get a Quote' ? 
          <NavbarItem key={item.linkName}>
            <NavLink
              to={item.linkTo}
              className={linkClass}
            >
              {item.linkName}
            </NavLink>
          </NavbarItem>
            :
          <Button
            as={Link}
            to="/contact-us"
            className="bg-primary text-textWhite px-6 rounded-sm p"
            >
            {item.linkName}
          </Button>
        ))}
        </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white text-textDark mt-12 md:px-10 sm:px-8 px-6 font-supreme-medium">
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
    </Navbar>
  );
}
