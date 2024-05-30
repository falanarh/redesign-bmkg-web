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
  Link,
} from "@nextui-org/react";

const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Beranda", href: "/" },
    { label: "Profil", href: "/profil" },
    { label: "Cuaca", href: "/cuaca" },
    { label: "Iklim", href: "/iklim" },
    { label: "Kualitas Udara", href: "/kualitas-udara" },
    { label: "Gempa Bumi & Tsunami", href: "/gempa-bumi-tsunami" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="py-4"
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
        />
        <NavbarBrand>
        <img
            className="m-4 w-8 h-10 xs:w-12 xs:h-14"
            src={BMKGLogo}
            alt="BMKG Logo"
          />
          <div className="flex flex-col">
            <p className="text-[10px]/[8px] xs:text-sm/[16px] lg:text-base/[24px] font-bold">
              Badan Meteorologi, Klimatologi, dan Geofisika
            </p>
            <p className="text-[10px] xs:text-[11px] lg:text-sm font-pt-sans text-inherit">
              Cepat, Tepat, Akurat, Luas, dan Mudah Dipahami
            </p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={index}
            isActive={window.location.pathname === item.href}
          >
            <Link
              href={item.href}
              className={
                window.location.pathname === item.href
                  ? "text-active font-pt-sans-caption"
                  : "text-nonActive font-pt-sans-caption"
              }
            >
              {item.label.toUpperCase()}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="mt-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`} className="my-3">
            <Link
              className={`w-full ${
                window.location.pathname === item.href
                  ? "text-active font-pt-sans-caption"
                  : "text-nonActive font-pt-sans-caption"
              }`}
              href={item.href}
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
