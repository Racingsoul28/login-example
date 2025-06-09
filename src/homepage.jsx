function HomePage(props) {
    return(
        <>
            <div className="homePage">
                <h1>Bienvenido a la Página Principal</h1>
                <p>Esta es la página de inicio de tu aplicación.</p>
                <button onClick={props.onLogout}>Cerrar sesión</button>
            </div>
        </>
    );
}

export default HomePage;