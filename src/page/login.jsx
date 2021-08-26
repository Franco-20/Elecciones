import React, { Component } from "react";
import voto from "../image/voto.png";
import { Card } from "react-bootstrap";

class login extends Component {
  render() {
    return (
      <div className="container">
          <div className="col-sm-6 col-md-12 col-lg-12 d-flex justify-content-center ">
              <Card style={{ width: "18rem" }} className="card2">
          <Card.Body>
            <h3 className="text-center title">Iniciar Sesion</h3>
            <div className="col-sm-6 col-md-12 col-lg-12 d-flex justify-content-center">
              <img
              src={voto}
              alt="imagenes de un voto en urna"
              className="icon-votos"
            />
            </div>        
            <div className="form">
              <input type="text" placeholder="Usuario" className="form1"/>
              <input type="password" placeholder="Contraseña"  className="form2"/>
            </div>
            <button className="container boton">Enviar</button>
          </Card.Body>
        </Card>
          </div>        
      </div>
    );
  }
}

export default login;
