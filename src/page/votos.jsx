import React, { Component } from "react";
import { Card } from "react-bootstrap";
class votos extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-6 col-md-12 col-lg-12 d-flex justify-content-center ">
          <Card style={{ width: "18rem" }} className="card3">
            <Card.Body>
              <Card.Title className="title text-center">Detalle de Votos</Card.Title>
              <div className="from">
                <p>Confirme Partido</p>
                <input type="text" placeholder="Fuerza Republicana" className="form3"/>
                <p>Diputados</p>
                <input type="text" placeholder="Ingrese cantidad de votos DIPUTADOS" className="form3"/>
                <p>Senadores</p>
                <input type="text" placeholder="Ingrese cantidad de votos SENADORES" className="form3"/>
                <button className="boton5">Enviar</button>
                <button className="boton4">Salir</button>
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default votos;
