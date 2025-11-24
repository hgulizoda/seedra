import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import instaLogo from "../assets/instalogo.svg";
import { TextInput } from "@mantine/core";
const Header = () => {
  return (
    <header>
      <Link>
        <img src={logo} />
      </Link>
      <nav>
        <NavLink>ALL PRODUCTS</NavLink>
        <NavLink>ABOUT SEEDRA</NavLink>
        <NavLink>OUR BLOG</NavLink>
        <NavLink>CONTACTS</NavLink>
      </nav>
      <div>
        <Link>
          <img src={instaLogo} alt="" />
          <img src={instaLogo} alt="" />
        </Link>
        <TextInput size="md" radius="lg" placeholder="Input placeholder" />{" "}
      </div>
    </header>
  );
};

export default Header;
