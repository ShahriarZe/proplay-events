import { Link } from "react-router-dom";
import 'aos/dist/aos.css';

/* eslint-disable react/prop-types */
const Card = ({ card }) => {
    const { name, image_url, short_description, background_color, price, id } = card
    const cardStyle = {
        background: background_color
    }
    return (
        <div data-aos="flip-right"
        data-aos-duration="1000">
            <div className="card  bg-transparent border shadow-xl text-white" style={cardStyle} >
                <figure><img className="h-64 w-full" src={image_url} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title mb-2 font-bold text-2xl">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="lg:text-xl">{short_description}</p>
                    <button className="flex justify-start btn btn-ghost text-xl w-2/4 mt-2 text-white">Price: {price} $</button>
                    <div className="card-actions justify-center mt-5">
                        <Link to={`/card/${id}`}>
                            <button className="btn w-full btn-outline text-white">Show Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;