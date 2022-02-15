import '../../assets/styles/styleService.css';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';

// "serviceName" sera un parametro para los distintos servicios - opcion2
// "UserName" sera un parametro para opcion3
export function ServicioPage () {
    return (
        <>
            <Header titulo = "SEGUIMIENTO DE SERVICIOS"
                    opcion1 = "Volver"
                    opcion2 = "Albañilería"
                    opcion3 = "Hola Daniel" />
             
            <div className="gridContainerService">

                <div className="menuServicios">
                    <p>Nuevo</p>
                    <p>En curso</p>
                    <p>Finalizadas</p>
                </div>

                <div>
                    <p>Empresa</p>
                    <p>telefono</p>
                    <p>e-mail</p>
                </div>

                {/* En el mismo cuadro del grid,
                        "1 formulario" para ingresar uno nuevo
                        "1 formulario" para ver un trabajo en curso (lista de fechas y descripciones)
                        "1 formulario" para ver las tareas finalizadas */}

                <div className="formulario">
                    <div className="nuevoForm"> {/* debe arrancar como display: none */}
                        <p>Nuevo trabajo</p>
                    </div>
                    
                    <div className="enCursoForm"> {/*} debe arrancar como display: none */}
                        <p>Trabajo en curso</p>
                    </div>

                    <div className="finForm"> {/* debe arrancar como display: none */}
                        <p>Finalizadas</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
