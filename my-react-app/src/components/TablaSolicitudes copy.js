function tablaSolicitudes(){
    return(
        <div className="container-fluid">

                    <h1 className="h3 mb-2 text-gray-800">Permisos</h1>
                    
                    
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Autorizaciones pendientes</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Identificación</th>
                                            <th>Tipo de solicitud</th>
                                            <th>Fecha de propuesta</th>
                                            <th>Remunerado</th>
                                            <th>Detalles</th>
                                            <th>Aceptar/Rechazar</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Identificación</th>
                                            <th>Tipo de solicitud</th>
                                            <th>Fecha de propuesta</th>
                                            <th>Remunerado</th>
                                            <th>Detalles</th>
                                            <th>Aceptar/Rechazar</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <td>xd</td>
                                            <td>123456789</td>
                                            <td>Vacaciones</td>
                                            <td>11/11/2021</td>
                                            <td>Si</td>
                                            <td>...</td>
                                            <td>
                                                <a href="none" className="btn btn-success btn-circle btn-sm"><i className="fas fa-check"></i></a>
                                                <a href="none" className="btn btn-danger btn-circle btn-sm"><i className="fas fa-trash"></i></a>    

                                        </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            
    );

}

export default tablaSolicitudes;