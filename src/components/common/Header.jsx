import '../../assets/styles/style.css';

export function Header(props) {
    return (
        <div className="header">

            <h1 className="titulo">{ props.titulo }</h1>

            <nav>
                <div>
                    <a href="./ofrecemos.html">
                        <h2>Que ofrecemos?</h2>
                    </a>
                </div>

                <div>
                    <a href="./contacto.html">
                        <h2>Contacto</h2>
                    </a>
                </div>

                <div>
                    <a href="./login.html">
                        <h2>Ingrese aqui</h2>
                    </a>
                </div>
            </nav>

        </div>
    );
}
