import "./card.css";

function Card(props) {
    let { title, content } = props;
    if (!title) title = "Título por defecto";
    if (!content) content = "Contenido por defecto";

    return(
        <>
            <div className="card">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </>
    );
}

export default Card;