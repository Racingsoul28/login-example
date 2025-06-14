import "./homepage.css";
import { useEffect, useState } from "react";
import Card from "./card";

function HomePage(props) {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <div className={`homePage${fadeIn ? " fade-in" : ""}`}>
        <div className="homePageGridContainer">
          <header className="homePageHeader">
            <div>
              <h1>Bienvenido a la Página Principal</h1>
            </div>
            <div>
              <button onClick={props.onlogout} className="btnLogOut">
                Cerrar Sesión
              </button>
            </div>
          </header>

          <aside className="homePageAside">
            <h2>Aside</h2>
            <p>Contenido lateral.</p>
            <p>Más contenido lateral para probar scroll.</p>
            <p>Lorem ipsum dolor sit amet...</p>
          </aside>

          <main className="homePageMain">
            <div className="homePageMainContent">
              <Card title="Tarjeta 1" content="Contenido de la tarjeta 1" />
              <Card title="Tarjeta 2" content="Contenido de la tarjeta 2" />
              <Card title="Tarjeta 3" content="Contenido de la tarjeta 3" />
            </div>
          </main>

          <footer className="homePageFooter">
            <p>Pie de página fijo</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default HomePage;
