import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        width: "100%",
        height: "70px",
        borderBottom: "1px solid #eee",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="" />

        <nav
          style={{
            display: "flex",
            gap: "25px",
            fontSize: "16px",
            color: "#333",
          }}
        >
          <NavLink>All Products</NavLink>
          <NavLink>About Seedra</NavLink>
          <NavLink>Our Blog</NavLink>
          <NavLink>Contacts</NavLink>
        </nav>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: "8px 12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />

          <span style={{ fontSize: "20px", cursor: "pointer" }}>🛒</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
