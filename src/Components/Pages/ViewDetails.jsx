import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
    const params = useParams();
    const intParams = parseInt(params.id)
    const [clickedData, setClickedData] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setClickedData(data.services))
    }, [])
    const details = clickedData.find(item => item.id === intParams)

    return (

        <div className="">

            <img className="" src={details?.image_url} alt="" />

            <h2 className="text-center text-3xl font-bold mt-2">
                {details?.name}
            </h2>
            <div className="text-center p-4 text-2xl">
                <p>
                    <button className="btn btn-outline m-4 text-xl">
                        Price : {
                            details?.price
                        } $
                    </button>
                </p>
                <p className="mb-4">
                    {
                        details?.short_description
                    }
                </p>
                <p>
                    {
                        details?.long_description
                    }
                </p>
            </div>

        </div>

    );
};

export default ViewDetails;