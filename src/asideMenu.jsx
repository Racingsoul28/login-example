import "./asideMenu.css"; // Assuming you have a CSS file for styles

function AsideMenu(props) {
  return (
    <>
      <div className="asideCard">
        <div className="asideTittle">
          <p>Menu</p>
        </div>
        <div className="asideMenuContainer">
          <div className="asideMenuItem">
            <div className="menuImgContainer">
              <img
                src="/homePageImg/ico_ConfigV01.png"
                alt="Profile Image"
              />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </div>
        <div className="more">
          <p>Application v0.1</p>
        </div>
      </div>
    </>
  );
}

export default AsideMenu;