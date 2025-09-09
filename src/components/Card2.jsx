import david from "../assets/David.jpg"

const Card2 = () => {
    return (
        <div className="card">
            <img src={david} alt="another man, he also chill" />
            <h2>David Moore</h2>
            <p>UX Design</p>
        </div>

    );
};

export default Card2;