function AsideMenuItem(props) {
    var lcTittle = props.Tittle || "Tittle";
    var lcImg = props.Img || "./homePageImg/ico_HomeV02.png";
  return (
    <>
      <div className="asideMenuItem">
        <div className="menuImgContainer">
          <img src={lcImg} alt="Profile Image" />
        </div>
        <div className="menuTittleContainer">
          <p>{lcTittle}</p>
        </div>
        {props.showCloseBtn && <button className="closeBtn">x</button>}
      </div>
    </>
  );
}
export default AsideMenuItem;
