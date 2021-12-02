import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { ProductProvider } from "../../context/ProductContext";
import logo from "../../logo.svg";
import { Button, NavDropdown, Form, FormControl } from 'react-bootstrap';


const Dashboard = () => {

  const { handleLogout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleCarrito = () => {
    navigate("/carrito");
  };

  const handleMicuenta = () => {
    navigate("/micuenta");
  };

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

            <Nav.Link as={Link} to="/micuenta" href="#micuenta">
              Mi cuenta
            </Nav.Link>
            <Nav.Link as={Link} to="/carrito" href="#carrito">
              🛒
            </Nav.Link>

            <Nav.Link href="" onClick={handleLogout}>
              Log out
            </Nav.Link>
            {/*
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-1"
                aria-label="Search"
              />
              <Button variant="success"> 🔎 </Button>
            </Form> */}

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

export default Dashboard;
