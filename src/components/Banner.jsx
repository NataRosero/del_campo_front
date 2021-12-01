import React from 'react';
import { useNavigate } from "react-router";
import BannerHome from '../assets/banners/banner-1-home.jpg';
import LogoCampo from '../assets/logo_Delcampo_C.png';
import { Container, ButtonGroup, Button, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const Ban = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/auth");
    };

    const handleRegister = () => {
        navigate("/reg");
    };

    return (
        <>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <img src={LogoCampo} align="left" width="25%" height="20%" />
                    {/* <ProgressBar variant="success" now={40} /> */}
                    <Nav.Item>
                        <ButtonGroup aria-label="Basic example">
                            <Link to="./Login.js">
                                <Button variant="outline-success" onClick={handleLogin}>Inicio de Sesion</Button>
                            </Link>
                            <Link to="/Register.js">
                                <Button variant="outline-success" onClick={handleRegister}>Registro</Button>
                            </Link>
                        </ButtonGroup>
                    </Nav.Item>
                </Container>
            </Navbar>
            <br />
            <img src={BannerHome} align="center" width="100%" height="75%" />
        </>
    )
}

export default Ban;