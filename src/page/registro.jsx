import React, { Component } from "react";
import { Card} from "react-bootstrap";

class registro extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-6 col-md-12 col-lg-12 d-flex justify-content-center mt-5">
          <Card style={{ width: "18rem" }} className="card1">
            <Card.Body>
              <Card.Title className="text-center title">Registrarme</Card.Title>
              <div className="from">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="formulario"
                  required
                />
                <input type="number" placeholder="DNI" className="formulario" required />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="formulario"
                  required
                 
                />
                <input
                  type="text"
                  placeholder="Seleccione Departamento"
                  className="formulario"
                  required
                />
                <input
                  type="text"
                  placeholder="Seleccione cuidad o comuna"
                  className="formulario"
                  aria-label="Floating label select example"
                  required
                />
                <input
                  type="text"
                  placeholder="Escuela"
                  className="formulario"
                  required
                />
                <input
                  type="number"
                  placeholder="Num. de mesa"
                  className="formulario"
                  required
                />
                <button className="boton" type="submit">Enviar</button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default registro;
