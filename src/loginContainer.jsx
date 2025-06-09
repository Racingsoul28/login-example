import "./loginContainer.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginContainer(props) {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        // Validación simple: ambos campos deben tener valor
        if (user.trim() === "" || password.trim() === "") {
            setError("Por favor, ingresa usuario y contraseña.");
            return;
        }
        // Aquí podrías agregar validación real
        setError("");
        navigate("/home");
    };

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
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                </div>
                <div className="loginInput">
                    <p>Contraseña:</p>
                    <input
                        type="password"
                        name="inpPwd"
                        id="inpPwd"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="button" onClick={handleLogin}>
                    Iniciar sesión
                </button>
            </div>
        </>
    );
}

export default LoginContainer;