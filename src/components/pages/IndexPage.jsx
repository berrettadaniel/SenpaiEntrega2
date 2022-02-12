import "../../assets/styles/style.css";
import { Header } from '../common/Header';
import { IndexGridContainer } from "./IndexGridContainer";

export function IndexPage() {
    return (
        <body>
            <Header titulo = "REFORMAS Y REPARACIONES" />
            <IndexGridContainer />
        </body>
);
}
