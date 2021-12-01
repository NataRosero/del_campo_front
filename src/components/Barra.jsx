
import React from 'react'
import { Navbar, Container, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

export default function barra() {

    return (
        <>
            <Navbar variant="light" bg="success" expand="md">
                <Container fluid>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Productos</Nav.Link>
                            <Nav.Link href="#action2">🛒</Nav.Link>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Buscar"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="success"> 🔎 </Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </>
    )
}

