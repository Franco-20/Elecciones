import React, { Component } from "react";
import { Card } from "react-bootstrap";
class usuario extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-6 col-md-12 col-lg-12 d-flex justify-content-center mt-5">
          <Card style={{ width: "18rem" }} classNameç="card">
            <Card.Body>
              <Card.Title className="text-center title">Bienvenido</Card.Title>
              <Card.Subtitle className="mb-2 mt-3 text-center">
                Usuario de prueba
              </Card.Subtitle>
              <div className="botones">
                <button className="boton1">Estoy en la mesa</button>
                <button className="boton2">Cierre de votacion</button>
                <input type="text" placeholder="Ingrese cantidad de votantes" className="input"/>
                <button className="boton3">Siguiente</button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default usuario;
