export function Header(props) {
    return (
        <div className="header">

            <div className="navIcon">
                <a href="./ofrecemos.html">
                </a>
            </div>

            <h1 className="titulo">{ props.titulo }</h1>

            <nav>
                <div>
                    <a href="./ofrecemos.html">
                        <h1>Que ofrecemos?</h1>
                    </a>
                </div>

                <div>
                    <a href="./contacto.html">
                        <h1>Contacto</h1>
                    </a>
                </div>

                <div>
                    <a href="./login.html">
                        <h1>Ingrese aqui</h1>
                    </a>
                </div>
            </nav>

        </div>
    );
}