import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { ProductProvider } from "../../context/ProductContext";
import logo from "../../logo.svg";
import { Button, NavDropdown, Form, FormControl } from 'react-bootstrap';


const DashboardLogin = () => {

  const { handleLogout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleCatalogo = () => {
    navigate("/catalogue");
  };

  return (
    <>
      <Navbar className="barra" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home">

          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" href="#home" >
              Home
            </Nav.Link>
            <span />
            <Nav.Link as={Link} to="/catalogo" href="#catalogo">
              Catalogo
            </Nav.Link>
            <hr />

            <Nav.Link href="" onClick={handleLogout}>
              Log out
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/**Aquí se mostrarán los componentes al navegar por el navbar */}
      <ProductProvider>
        <Outlet />
      </ProductProvider>
    </>
  );
};

export default DashboardLogin;
