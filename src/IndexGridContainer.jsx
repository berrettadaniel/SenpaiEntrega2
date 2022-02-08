import { Footer } from './Footer.jsx';

export function IndexGridContainer() {
    return (
        <div class="gridContainer">
        
        <div class="advertisement1"></div>

        <div class="BannerSitio">
            <div class="slogan">
            <main>
                <h1>Todos los servicios que necesite</h1>
                <h1>para mantener su casa como siempre quiso</h1>
            </main>
            </div>
        </div>

        <div class="advertisement2"></div>


        <div class="servicesFlex">

            <div class="service">
                <a href="#" target="_blank">
                    <img
                        src="images/Oficio_albanil.jpg"
                        alt="Albañilería" />
                    <h2>Albañilería</h2>
                </a>
            </div>

            <div class="service">
                <a href="#" target="_blank">
                    <img
                        src="images/Oficio_carpintero.jpg"
                        alt="Carpintería" />
                    <h2>Carpintería</h2>
                </a>
            </div>

            <div class="service serviceMuestro">
                <a href="#" target="_blank">
                    <img
                        src="images/Oficio_electricista.jpg"
                        alt="Electricidad" />
                    <h2>Electricidad</h2>
                </a>
            </div>

            <div class="service serviceMuestro">
                <a href="#" target="_blank">
                    <img
                        src="images/Oficio_fumigador.jpg"
                        alt="Fumigación" />
                    <h2>Fumigación</h2>
                </a>
            </div>

            <div class="service serviceMuestro">
                <a href="#" target="_blank">
                    <img
                        src="images/Oficio_jardinero.jpg"
                        alt="Jardinería" />
                    <h2>Jardinería</h2>
                </a>
            </div>

            <div class="service serviceMuestro">
                <a href="#" target="_blank">
                    <img
                        src="images/Oficio_limpieza.jpg"
                        alt="Limpieza" />
                    <h2>Limpieza</h2>
                </a>
            </div>

            <div class="service serviceMuestro">
                <a href="#" target="_blank">
                    <img
                        src="images/Oficio_sanitario.jpg"
                        alt="Sanitaria" />
                    <h2>Sanitaria</h2>
                </a>
            </div>

        </div>

        <Footer />
    </div>
    );
}