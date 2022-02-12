import '../../assets/styles/style.css';

// Las props esperadas son:
// titulo, es el titulo que aparece arriba
// opcion1, es el texto del link que aparece a la izquierda debajo del titulo
// opcion2, es el texto del link que aparece al medio debajo del titulo
// opcion3, es el texto del link que aparece a la dercha debajo del titulo

export function Header(props) {
    return (
        <div className="header">

            <h1 className="titulo">{ props.titulo }</h1>
            
            <nav>
                <div>
                    {/*<a href="./ofrecemos.html">*/}
                        <h2>{ props.opcion1 }</h2>
                    {/*</a>*/}
                </div>

                <div>
                    {/*<a href="./contacto.html">*/}
                        <h2>{ props.opcion2 }</h2>
                    {/*</a>*/}
                </div>

                <div>
                    {/*<a href="./login.html">*/}
                        <h2>{ props.opcion3 }</h2>
                    {/*</a>*/}
                </div>
            </nav>

        </div>
    );
}
