import '../../assets/styles/style.css';

function navOp1(props) {
    const op1 = props.opcion1;
    const op2 = props.opcion2;
    const op3 = props.opcion3;

    if (op1 !== "" || op2 !== "" || op3 !== "" ) {
        return (
            <nav>
                <div>
                    <a><h2>{op1}</h2></a>
                {/*    <a href="./ofrecemos.html">
                        <h2>Que ofrecemos?</h2>
                    </a> */}
                </div>

                <div>
                    <a><h2>{op1}</h2></a>
                {/*    <a href="./contacto.html">
                        <h2>Contacto</h2>
                    </a> */}
                </div>

                <div>
                    <a><h2>{op3}</h2></a>
                {/*    <a href="./login.html">
                        <h2>Ingrese aqui</h2>
                    </a> */}
                </div>
            </nav>
        )
    } else {
        return (
            <nav>
                <div>
                    <a>"Volver"</a>
                {/*    <a href="./ofrecemos.html">
                        <h2>Que ofrecemos?</h2>
                    </a> */}
                </div>
            </nav>
        )
    }
}

export function Header(props) {
    return (
        <div className="header">

            <h1 className="titulo">{ props.titulo }</h1>

            <navOp1 />
{/*
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
*/}
        </div>
    );
}
