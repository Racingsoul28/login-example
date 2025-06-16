import "./card.css";

function Card(props) {
  let { title, content, imgCard } = props;
  if (!title) title = "Título por defecto";
  if (!content) content = "Contenido por defecto";
  if (!imgCard) imgCard = "/homePageImg/ico_Modulev02.png";

  return (
    <>
      {/* <div className="card">
        <div className="imgContainer">
          <img src={imgCard} alt="moduleImg" className="cardImg" />
        </div>
        <h2 className="cardTittle">{title}</h2>
        <div className="cardDescription">
          <p>{content}</p>
        </div>
      </div> */}

      <div className="card">
        <img
          src={imgCard}
          alt="moduleImg"
          className="cardIco"
        />
        <h2>{title}</h2>
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">
            {content}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
