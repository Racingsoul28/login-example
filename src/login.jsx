import "./loginContainer.css"

function Login(props) {
    return (
        <>
            <div className="loginContainer">
                <h1>Bienvenido</h1>
                <div className="loginInput">
                    <p>Usuario:</p>
                    <input
                        type="text"
                        name="impUser"
                        id="impUser"
                    />
                </div>
                <div className="loginInput">
                    <p>Contraseña:</p>
                    <input
                        type="password"
                        name="inpPwd"
                        id="inpPwd"
                    />
                </div>
                <button type="button">
                    Iniciar sesión
                </button>
            </div>
        </>
    );
}

export default Login;