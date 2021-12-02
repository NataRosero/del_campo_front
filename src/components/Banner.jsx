import React from 'react';
import { useNavigate } from "react-router";
import BannerHome from '../assets/banners/banner-1-home.jpg';
import LogoCampo from '../assets/logo_Delcampo_C.png';
import { Container, ButtonGroup, Button, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import "./Components.css"

const Ban = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/home");
    };

    const handleRegister = () => {
        navigate("/");
    };

    return (
        <>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Link to="/">
                        <img src={LogoCampo} align="left" width="40%" height="20%" />
                    </Link>
                    {/* <ProgressBar variant="success" now={40} /> */}
                    <Nav.Item>
                        <ButtonGroup aria-label="Basic example">
                            <Link to="/auth">
                                <Button variant="outline-success" onClick={handleLogin} className="btn1">Inicio de Sesion</Button>
                            </Link>
                            <Link to="./Register">
                                <Button variant="outline-success" onClick={handleRegister} className="btn1">Registro</Button>
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