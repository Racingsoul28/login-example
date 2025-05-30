function LoginContainer(props) {
  return (
    <>
      <form action="Submit">
        <div className="loginCont">
          <h1>Bienvenido</h1>
          <div className="loginInput">
            <p>Usuario: </p>
            <input type="text" name="impUser" id="impUser" />
          </div>
          <div className="loginInput">
            <p>Contraseña: </p>
            <input type="password" name="impPssw" id="impPssw" />
          </div>
          <div className="loginInputV2">
            <p>Recordar usuario </p>
            <input type="checkbox" name="chkRmbUser" id="chkRmbUser" className="checkBox" />
          </div>
          <input className="loginButton" type="button" value="Iniciar sesión" />
        </div>
      </form>
    </>
  );
}

export default LoginContainer;
