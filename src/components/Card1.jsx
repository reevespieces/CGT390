import steven from "../assets/stevenimg.jpg"

const Card1 = () => {
    return (
        <div className="card">
            <img src={steven} alt="headshot of cool guy Steven" />
            <h2>Steven Bridge</h2>
            <p>Web Developer</p>
        </div>

    );
};

export default Card1;