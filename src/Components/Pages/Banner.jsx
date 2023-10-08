import 'aos/dist/aos.css';
import bannerBg from '../../assets/Banner.png'
const Banner = () => {
    const bgStyle = {
        backgroundImage: `url(${bannerBg})`
    }
    return (
        <div className="hero min-h-screen" style={bgStyle}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-white" data-aos="fade-up"
                data-aos-duration="1000">
                <div className=" text-left">

                    <h1 className='text-2xl lg:text-4xl font-semibold mb-5'>ESPORTS EVENT MANAGEMENT PLATFORM</h1>

                    <h1 className="mb-5 text-3xl lg:text-7xl font-bold">TAKE YOUR GAME TO THE NEXT LEVEL</h1>

                    <p className="mb-5 lg:text-2xl">Get Your Game Analyzed Asynchronously by Top Quality Coaches and Start Winning</p>


                    <button className="btn btn-outline text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;