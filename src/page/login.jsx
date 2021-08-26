import React, { Component } from "react";
import voto from "../image/voto.png";
import { Form, Card } from "react-bootstrap";

class login extends Component {
  render() {
    return (
      <div className="container">
          <div className="sm-6 md-8 lg-12 d-flex justify-content-center mt-5">
              <Card style={{ width: "18rem" }} className="card">
          <Card.Body>
            <h3 className="text-center title">Iniciar Sesion</h3>
            <img
              src={voto}
              alt="imagenes de un voto en urna"
              className="icon-votos"
            />
            <div className="container">
              <Form id="formulario">
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  className="form mb-3"
                  id="usuario"
                >
                  <Form.Control type="email" placeholder="Usuario" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicPassword"
                  className="form"
                  id="clave"
                >
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
              </Form>
            </div>
            <button className="boton" type="submit">Enviar</button>
          </Card.Body>
        </Card>
          </div>        
      </div>
    );
  }
}

export default login;
