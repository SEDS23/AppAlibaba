import TopBar from "./components/TopBar";
import TablaSolicitudes from "./components/TablaSolicitudes";
import SideBarNomina from "./components/SideBar(nomina)";
import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const App8 = () => {
    const empleado = [
        {nombre: "Ramón", apellido: "Pérez", fecha: "23/12/2022", tipo: "Vacaciones", status: "Deseased"},
        {nombre: "Jorge", apellido: "JAJAJA", fecha: "11/10/1913", tipo: "Permiso", status: "Alive"},
        {nombre: "Juan", apellido: "Asasa", fecha: "13/11/2002", tipo: "Permiso", status: "Idk"}
        ]
      const render_empleado = (empleado, index) => {
        return(
          <tr key={index}>
            <td>empleado.nombre</td>
            <td>empleado.apellido</td>
            <td>empleado.fecha</td>
            <td>empleado.tipo</td>
            <td>empleado.status</td>
          </tr>
        )
      }

    return(
        <body id="page-top">
            <div id="wrapper" >
                <SideBarNomina/>
            <div id="content-wrapper" className="d-flex flex-column" > <div id="content" ><TopBar/><TablaSolicitudes/></div></div>
                

            </div>
        </body>
    );

}

export default App8;