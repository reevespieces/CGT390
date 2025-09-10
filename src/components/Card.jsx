import steven from "../assets/stevenimg.jpg"
import david from "../assets/David.jpg"

const Card = ({name, title, img}) => {
    return (
        <div className="card">
            <div className="card_img">
                <img src={img} alt={name} />
            </div>
            <div className="card_content">
                <h2>{name}</h2>
                <p>{title}</p>
            </div>
        </div>

    );
};

export default Card;