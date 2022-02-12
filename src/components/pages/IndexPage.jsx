import "../../assets/styles/style.css";
import { Header } from '../common/Header';
import { IndexGridContainer } from "./IndexGridContainer";

export function IndexPage() {
    return (
        <>
            <Header titulo = "REFORMAS Y REPARACIONES"
                    opcion1 = "Que ofrecemos?"
                    opcion2 = "Contacto"
                    opcion3 = "Ingrese aqui" />
            <IndexGridContainer />
        </>
);
}
