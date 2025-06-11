import "./homepage.css";
import {useEffect, useState} from 'react';
function HomePage(props) {
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
        setFadeIn(true);
    }, []);

    return(
        <>
            <div className={`homePage${fadeIn ? " fade-in" : ""}`}>
                <button onClick={props.onlogout}>Cerrar sesión</button>
                <h1>Bienvenido a la Página Principal</h1>
                <p>Esta es la página de inicio de tu aplicación.</p>
            </div>
        </>
    );
}

export default HomePage;