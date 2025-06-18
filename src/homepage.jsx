import "./homepage.css";
import { useEffect, useState } from "react";
import Card from "./card";
import AsideMenu from "./asideMenu";

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
            <div className="homePageHeaderBar">
              <div>
                <h1>Bienvenido a la Página Principal</h1>
              </div>
              <div>
                <button  onClick={props.onlogout} className="btnLogOut">
                  Cerrar Sesión
                </button>
              </div>
            </div>  
          </header>

          <aside className="homePageAside">
            <AsideMenu />
          </aside>

          <main className="homePageMain">
            <div className="homePageMainContent">
              <Card
                title="Administración"
                content="Aplicativo para llevar el control de la administración del negocio"
                imgCard="/homePageImg/ico_AdminV01.png"
              />
              <Card
                title="Inventario"
                content="Aplicativo para llevar el control del inventario de los insumos"
                imgCard="/homePageImg/ico_Modulev02.png"
              />
              <Card
                title="Configuración"
                content="Configuraciones generales del sistema"
                imgCard="/homePageImg/ico_ConfigV01.png"
              />

              <Card
                title="Administración"
                content="Aplicativo para llevar el control de la administración del negocio"
                imgCard="/homePageImg/ico_AdminV01.png"
              />
              <Card
                title="Inventario"
                content="Aplicativo para llevar el control del inventario de los insumos"
                imgCard="/homePageImg/ico_Modulev02.png"
              />
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
