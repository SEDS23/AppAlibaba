import TopBar from "./components/TopBar";
import TablaSolicitudes from "./components/TablaSolicitudes";
import SideBarNomina from "./components/SideBar(nomina)";

function App8(){
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