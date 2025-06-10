function HomePage(props) {
    return(
        <>
            <div className="homePage">
                <button onClick={props.onlogout}>Cerrar sesión</button>
                <h1>Bienvenido a la Página Principal</h1>
                <p>Esta es la página de inicio de tu aplicación.</p>
            </div>
        </>
    );
}

export default HomePage;