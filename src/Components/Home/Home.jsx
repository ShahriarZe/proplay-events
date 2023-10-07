import Banner from "../Pages/Banner";
import GetUpdates from "../Pages/GetUpdates";
import Reward from "../Pages/Reward";
import ServiceCards from "../Pages/ServiceCards";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceCards></ServiceCards>
            <Reward></Reward>
            <GetUpdates></GetUpdates>
        </div>
    );
};

export default Home;