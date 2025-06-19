import "./asideMenu.css"; // Assuming you have a CSS file for styles
import AsideMenuItem from "./menuItem";

function AsideMenu(props) {
  return (
    <>
      <div className="asideCard">
        <div className="asideTittle">
          <p>Menu</p>
        </div>
        <div className="asideMenuContainer">
        <AsideMenuItem />
        <AsideMenuItem Tittle="Configuración" showCloseBtn={true} Img="/homePageImg/ico_ConfigV02.png" />  
        </div>
        <div className="more">
          <p>Application v0.1</p>
        </div>
      </div>
    </>
  );
}

export default AsideMenu;
