import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import loginBg from '../../assets/login-reg-bg.png'

const Shop = () => {
    const bgStyle = {
        backgroundImage: `url(${loginBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    return (
        <div style={bgStyle}>
                <div className="p-20">
                    <h2 className="text-white text-center text-3xl lg:text-7xl font-extrabold mb-5">
                        Welcome To Our Merchandise Shop
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
                    {
                        products.map(card => <ShopCard key={card.id} card={card}></ShopCard>)
                    }
                </div>
            
        </div>
    );
};

export default Shop;