/* eslint-disable react/prop-types */

const ShopCard = ({ card }) => {
    
    const { name, image,price,description,recommendation } = card
    return (
        <div>
            <div className="mb-5 card bg-transparent text-white shadow-xl  border">
                <figure><img className="h-72 w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p>{description}</p>
                    <p>Price : {price} $</p>
                    <p className="font-extrabold"> {recommendation} </p>
                    <div className="card-actions">
                        <button className="w-full text-white btn btn-outline">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;