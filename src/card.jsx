import "./card.css";

function Card(props) {
  let { title, content, imgCard } = props;
  if (!title) title = "Título por defecto";
  if (!content) content = "Contenido por defecto";
  if (!imgCard) imgCard = "https://th.bing.com/th/id/OIP.pwMO2wypxophplLz-UqqrgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&cb=idpwebpc1";

  return (
    <>
      <div className="card">
        <div className="imgContainer">
          <img src={imgCard} alt="moduleImg" className="cardImg" />
        </div>
        <h2 className="cardTittle">{title}</h2>
        <p className="cardDescription">{content}</p>
      </div>
    </>
  );
}

export default Card;
