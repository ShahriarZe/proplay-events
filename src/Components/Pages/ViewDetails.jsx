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
        <div>
            {
                details?.name
            }
            <img src={details?.image_url} alt="" />
        </div>
    );
};

export default ViewDetails;