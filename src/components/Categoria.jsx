import React from 'react'
import frutas from '../assets/Imagenes/Categorias/cat_1_frutas.jpg';
import verduras from '../assets/Imagenes/Categorias/cat_2_Verduras.jpg';
import legumbres from '../assets/Imagenes/Categorias/cat_3_Legumbres.jpg';
import tuberculos from '../assets/Imagenes/Categorias/cat_4_Tuberculos.jpg';
import lacteos from '../assets/Imagenes/Categorias/cat_5_Lacteos.jpg';
import huevos from '../assets/Imagenes/Categorias/cat_6_Huevos.jpg';
import carnes from '../assets/Imagenes/Categorias/cat_7_Carne_pollo_pescado.jpg';
import otros from '../assets/Imagenes/Categorias/cat_8_Otros.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function Categoria() {

    return (
        <>
            <div align="center">
                <tr>
                    <td>
                        <Card className="mb-lg-1" border="success" style={{ width: '18vw' }}>
                            <Button variant="outline-success">
                                <Card.Img bg='Success' variant="top" src={frutas} />
                                <Card.Body>
                                    <Card.Title>Frutas</Card.Title>
                                </Card.Body>
                            </Button>
                        </Card>
                    </td>
                    <br />
                    <td>
                        <Card className="mb-lg-1" border="success" style={{ width: '18vw' }}>
                            <Button variant="outline-success">
                                <Card.Img bg='Success' variant="top" src={verduras} />
                                <Card.Body>
                                    <Card.Title>Verduras</Card.Title>
                                </Card.Body>
                            </Button>
                        </Card>
                    </td>
                    <br />
                    <td>
                        <Card className="mb-lg-1" border="success" style={{ width: '18vw' }}>
                            <Button variant="outline-success">
                                <Card.Img bg='Success' variant="top" src={legumbres} />
                                <Card.Body>
                                    <Card.Title>Legumbres</Card.Title>
                                </Card.Body>
                            </Button>
                        </Card>
                    </td>
                    <br />
                    <td>
                        <Card className="mb-lg-1" border="success" style={{ width: '18vw' }}>
                            <Button variant="outline-success">
                                <Card.Img bg='Success' variant="top" src={tuberculos} />
                                <Card.Body>
                                    <Card.Title>Tuberculos</Card.Title>
                                </Card.Body>
                            </Button>
                        </Card>
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        <Card className="mb-lg-1" border="success" style={{ width: '18vw' }}>
                            <Button variant="outline-success">
                                <Card.Img bg='Success' variant="top" src={lacteos} />
                                <Card.Body>
                                    <Card.Title>Lacteos</Card.Title>
                                </Card.Body>
                            </Button>
                        </Card>
                    </td>
                    <br />
                    <td>
                        <Card className="mb-lg-1" border="success" style={{ width: '18vw' }}>
                            <Button variant="outline-success">
                                <Card.Img bg='Success' variant="top" src={huevos} />
                                <Card.Body>
                                    <Card.Title>Huevos</Card.Title>
                                </Card.Body>
                            </Button>
                        </Card>
                    </td>
                    <br />
                    <td>
                        <Card className="mb-lg-1" border="success" style={{ width: '18vw' }}>
                            <Button variant="outline-success">
                                <Card.Img bg='Success' variant="top" src={carnes} />
                                <Card.Body>
                                    <Card.Title>Carne/Pollo</Card.Title>
                                </Card.Body>
                            </Button>
                        </Card>
                    </td>
                    <br />
                    <td>
                        <Card className="mb-lg-1" border="success" style={{ width: '18vw' }}>
                            <Button variant="outline-success">
                                <Card.Img bg='Success' variant="top" src={otros} />
                                <Card.Body>
                                    <Card.Title>Otros</Card.Title>
                                </Card.Body>
                            </Button>
                        </Card>
                    </td>
                </tr>
            </div>
        </>
    )
}

