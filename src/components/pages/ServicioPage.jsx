//servicios.html

import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { useEffect, useState } from "react";
import { API_URL } from "../../api/api.js";

// "serviceName" sera un parametro para los distintos servicios - opcion2
// "UserName" sera un parametro para opcion3
export function ServicioPage () {
    //Para el manejo de estados
    const [servicios, setServicios] = useState([]);

    //Efecto secundario - fetch con AXIOS
    useEffect(() =>{
        API_URL.get("/servicios").then((response) => {
            setServicios(response.data);  //se cambia el estado para re-dibujar la pagina
        });
    }, []);

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
