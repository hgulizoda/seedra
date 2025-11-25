import { Outlet } from "react-router-dom";
import SiteHeader from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
