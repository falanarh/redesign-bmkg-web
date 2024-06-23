import React from "react";
import BMKGLogo from "../../../assets/images/bmkg_logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link as NextUILink,
} from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation(); // Get current location

  const menuItems = [
    { label: "Beranda", href: "/" },
    { label: "Profil", href: "/profil" },
    { label: "Cuaca", href: "/cuaca" },
    { label: "Iklim", href: "/iklim" },
    { label: "Kualitas Udara", href: "/kualitas-udara" },
    { label: "Gempa Bumi & Tsunami", href: "/gempa-bumi-tsunami" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className=""
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-active",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
          icon={
            isMenuOpen ? (
              <>
                <IoMdClose className="text-xl" />
              </>
            ) : (
              <>
                <IoIosMenu className="text-xl" />
              </>
            )
          }
        />
        <NavbarBrand>
          <img
            className="h-8 mr-3 w-7 xs:w-12 xs:h-14"
            src={BMKGLogo}
            alt="BMKG Logo"
          />
          <div className="flex flex-col">
            <p className="text-[10px] xs:text-sm lg:text-[14px] font-bold leading-normal">
              Badan Meteorologi, Klimatologi, dan Geofisika
            </p>
            <p className="text-[10px] xs:text-[11px] lg:text-[12px] font-pt-sans text-inherit leading-snug">
              Cepat, Tepat, Akurat, Luas, dan Mudah Dipahami
            </p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-8 lg:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={index}
            isActive={isActive(item.href)} // Use isActive function to get the current path
          >
            <Link
              to={item.href} // Use Link from react-router-dom
              className={
                isActive(item.href)
                  ? "text-active font-pt-sans-caption text-[14px] font-semibold"
                  : "text-nonActive font-pt-sans-caption text-[14px] font-semibold"
              }
            >
              {item.label.toUpperCase()}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="z-[100]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`} className="my-3">
            <Link
              className={`w-full ${
                isActive(item.href)
                  ? "text-active font-pt-sans-caption"
                  : "text-nonActive font-pt-sans-caption"
              }`}
              to={item.href}
              size="lg"
            >
              {item.label.toUpperCase()}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarSection;
