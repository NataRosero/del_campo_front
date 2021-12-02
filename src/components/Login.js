import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import Logo from "../assets/logo_Delcampo_C.png";

const objForm = {
  email: "",
  password: ""
}

const Login = () => {
  //Contexto
  const { handleLogin } = useContext(AuthContext);
  //Estados
  const [form, setForm] = useState(objForm);
  //Navegador
  const navigate = useNavigate();


  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(form).then(async (resp) => {
      if (resp.status === 200) {
        let json = await resp.json();
        let token = json.token;
        localStorage.setItem('token', token);
        navigate('/login');
      } else {
        alert('Invalid credentials');
      }
    }).catch(error => {
      console.log(error);
    });
  }

  return (

    <div className="login">
      <br />
      <img className="logo" src={Logo} />
      <br />
      <br />
      <br />
      <h3>Iniciar Sesión</h3>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Control required value={form.email} onChange={handleForm} name="email" type="email" placeholder="Correo electrónico" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Control required value={form.password} onChange={handleForm} name="password" type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button variant="light" type="submit" className="BotonS">
          Registrarme
        </Button>
        <Button variant="primary" type="submit" className="Boton">
          Iniciar Sesión
        </Button>
      </Form>

    </div>
  );
};

export default Login;
