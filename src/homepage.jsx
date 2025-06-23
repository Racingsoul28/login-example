import "./homepage.css";
import { useEffect, useState } from "react";
import Card from "./card";
import AsideMenu from "./asideMenu";

function HomePage(props) {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);

  const [mostrarMenu, setMostrarMenu] = useState(false);

  //Función para mostrar menú en pantalla completa
  function displayMenu() {
    setMostrarMenu(!mostrarMenu);
  }
  //CIERRE: Función para mostrar menú en pantalla completa

  return (
    <>
      <div className={`homePage${fadeIn ? " fade-in" : ""}`}>
        <div className="homePageGridContainer">
          <header className="homePageHeader">
            <div className="homePageHeaderBar">
              <div>
                <button
                  className="btnMenuAside"
                  onClick={()=> displayMenu()}
                >
                  ☰
                </button>
              </div>
              <div>
                <h1>Bienvenido a la Página Principal</h1>
              </div>
              <div>
                <button onClick={props.onlogout} className="btnLogOut">
                  <img src="/homePageImg/ico_LogOutV02.png" alt="imgLogOut" />
                </button>
              </div>
            </div>
          </header>

          <aside className={mostrarMenu ? "fullHomePageAside" : "homePageAside"}>
            <AsideMenu full={mostrarMenu} />
          </aside>

          <main className="homePageMain">
            <div className="homePageMainContent">
              <Card
                title="Administración"
                content="Aplicativo para llevar el control de la administración del negocio"
                imgCard="/homePageImg/ico_AdminV02.png"
              />
              <Card
                title="Inventario"
                content="Aplicativo para llevar el control del inventario de los insumos"
                imgCard="/homePageImg/ico_Modulev03.png"
              />
              <Card
                title="Configuración"
                content="Configuraciones generales del sistema"
                imgCard="/homePageImg/ico_ConfigV02.png"
              />

              <Card
                title="Administración"
                content="Aplicativo para llevar el control de la administración del negocio"
                imgCard="/homePageImg/ico_AdminV02.png"
              />
              <Card
                title="Inventario"
                content="Aplicativo para llevar el control del inventario de los insumos"
                imgCard="/homePageImg/ico_Modulev03.png"
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
