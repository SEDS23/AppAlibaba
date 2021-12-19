import React from 'react';
import * as ReactBootStrap from "react-bootstrap";


const tablaSolicitudes = () =>{
    const empleado = [
        {ID: 0, nombre: "Ramón", apellido: "Pérez", fecha: "23/12/2022", tipo: "Vacaciones", status: "Deseased"},
        {ID: 1, nombre: "Jorge", apellido: "JAJAJA", fecha: "11/10/1913", tipo: "Permiso", status: "Alive"},
        {ID: 2, nombre: "Juan", apellido: "Asasa", fecha: "13/11/2002", tipo: "Permiso", status: "Alive"}
        ]
    function process(ID,name){
        
        empleado[ID].status=name
    }
    function show(ID){
        window.alert(empleado[ID].status)
    }
      const render_empleado = (empleado, index) => {
        return(
          <tr key={index}>
            <td>{empleado.nombre}</td>
            <td>{empleado.apellido}</td>
            <td>{empleado.fecha}</td>
            <td>{empleado.tipo}</td>
            <td>{empleado.status}</td>
            <td>
                <button className="btn btn-success btn-circle btn-sm" onClick={process(empleado.ID, "Aprobado")}><i className="fas fa-check"></i></button>
                <button className="btn btn-danger btn-circle btn-sm" onClick={process(empleado.ID, "Denegado")}><i className="fas fa-trash"></i></button> 
            </td>
          </tr>
        )
      }
    return(
        <div className="container-fluid">

                    <h1 className="h3 mb-2 text-gray-800">Permisos</h1>
                    
                    
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Autorizaciones pendientes</h6>
                        </div>
                        <div className="card-body">
                            <div className="App">
                                <ReactBootStrap.Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <td>Nombre</td>
                                            <td>Apellido</td>
                                            <td>Fecha</td>
                                            <td>Tipo</td>
                                            <td>Status</td>
                                            <td>Aceptar</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {empleado.map(render_empleado)}
                                    </tbody>
                                </ReactBootStrap.Table>
                            </div>
                        </div>
                    </div>

                </div>

            
    );

}



export default tablaSolicitudes;