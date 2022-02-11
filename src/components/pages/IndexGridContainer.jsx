import { BannerSitio } from "../common/BannerSitio.jsx";
import { Footer } from "../common/Footer.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

export function IndexGridContainer() {
    //Para el manejo de estados
    const [servicios, setServicios] = useState([]);

    //Efecto secundario
    useEffect(() =>{
        axios.get('http://localhost:4000/servicios').then((response) => {
            setServicios(response.data);
        });
    }, []);

    return (
        <div class="gridContainer">
        
            {/* PRIMERA FILA DE GRILLA
                Sponsors y slogan del sitio */}
            <div class="advertisement1"></div>
            <BannerSitio />
            <div class="advertisement2"></div>

            {/* SEGUNDA FILA DE GRILLA
                Lista de servicios que se ofrecen */}
            <div class="servicesFlex">

                {servicios.map(function(servicio) {
                    return (
                        <div class="service">
                            <a href="#" target="_blank">
                                <img
                                    src={servicio.archivo}
                                    alt={servicio.nombre} />
                                <h2>{servicio.nombre}</h2>
                            </a>
                        </div>
                    )})}


            </div>

            {/* TERCERA FILA DE GRILLA
                Pie de la pagina */}
            <Footer />
        </div>
    );
}