import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { FC } from "react";
import { Link } from "react-router";
import { useLocation } from "react-router";

const AppHeader: FC = () => {
  const location = useLocation();

  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img
          src="https://flowbite-react.com/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Speedrun Hackathon Template
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active={"/" === location.pathname}>
          Home
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default AppHeader;
