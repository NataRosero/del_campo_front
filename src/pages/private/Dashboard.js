import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { ProductProvider } from "../../context/ProductContext";
import logo from "../../logo.svg";
import Banner from '../../components/Banner'
import Barra from '../../components/Barra'
import Categoria from '../../components/Categoria'
import Footer from '../../components/Footer'

const Dashboard = () => {

  const { handleLogout } = useContext(AuthContext);

  return (
    <>
      <Banner />
      <br />
      <Barra />
      <br />
      <Categoria />
      <br />
      <Footer />

      {/**Aquí se mostrarán los componentes al navegar por el navbar */}
      <ProductProvider>
        <Outlet />
      </ProductProvider>
    </>
  );
};

export default Dashboard;
