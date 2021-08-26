import React, { Component } from "react";
import { Card } from "react-bootstrap";

class registro extends Component {
  render() {
    return (
      <div className="container">
          <div className="col-sm-6 col-md-12 col-lg-12 d-flex justify-content-center mt-5">
             <Card style={{ width: "18rem" }} className="card">
          <Card.Body>
            <Card.Title className="text-center title">Registrarme</Card.Title>
            <div className="from">
                <input type="text" placeholder="Nombre" className="formulario"/>
                <input type="number" placeholder="DNI"  className="formulario"/>
                <input type="password" placeholder="Contraseña" className="formulario"/>
                <input type="text" placeholder="Seleccione Seccion/Departamento" className="formulario"/>
                <input type="text" placeholder="Seleccione cuidad o comuna" className="formulario"/>
                <input type="text" placeholder="Escuela" className="formulario"/>
                <input type="number" placeholder="Num. de mesa" className="formulario"/>
                <button className="boton">Enviar</button>
            </div>
          </Card.Body>
        </Card> 
          </div>    
      </div>
    );
  }
}

export default registro;
