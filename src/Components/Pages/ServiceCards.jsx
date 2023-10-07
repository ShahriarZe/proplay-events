import { useEffect, useState } from "react";
import Card from "./Card";

const ServiceCards = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
           .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])

    return (
        <div className="mt-10" >
            <div className="text-center text-7xl font-extrabold">
                <h2>Services You Will Get !!</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 container mx-auto gap-10 mt-10">
                {
                    services.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default ServiceCards;