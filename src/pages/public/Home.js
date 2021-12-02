import React from "react";
// import Catalogue from "../../components/Catalogue";
// import { ProductProvider } from "../../context/ProductContext";
// import { Carousel, Button } from "react-bootstrap";
// import slider_1 from "../../assets/slider_1.jpeg";
// import slider_2 from "../../assets/slider_2.jpg";
import { Outlet, useNavigate } from "react-router";
//import { ShopProvider } from "../../context/ShopContext";
import Banner from '../../components/Banner'
import Barra from '../../components/Barra'
import Categoria from '../../components/Categoria'
import Footer from '../../components/Footer'
import Catalogue from '../../components/Catalogue'
import Dashboard from "../private/Dashboard";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth");
  };
  const handleRegister = () => {
    navigate("/Register");
  };

  return (
    <div>
      <Banner />
      <Dashboard />
      <br />
      <Categoria />
      <br />
      {/* <Catalogue /> */}
      <br />
      <Footer />

      <Outlet />
    </div>
  );
};

export default Home;
