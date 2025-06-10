import "./loginContainer.css";
import "./pressIntro";
import PressIntro from "./pressIntro";

function Login(props) {
  const lcUser = "admin";
  const lcPwd = "S3cureP@ssw0rd";

  const handleLogin = () => {
    var user = document.getElementById("impUser").value;
    var pwd = document.getElementById("inpPwd").value;
    if (user === lcUser && pwd === lcPwd) {
      props.onLogin();
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      <div className="loginContainer">
        <h1>Bienvenido</h1>
        <div className="loginInput">
          <p>Usuario:</p>
          <input type="text" name="impUser" id="impUser" />
        </div>
        <div className="loginInput">
          <p>Contraseña:</p>
          <input
            type="password"
            name="inpPwd"
            id="inpPwd"
            onKeyDown={PressIntro(handleLogin)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </div>
    </>
  );
}

export default Login;
