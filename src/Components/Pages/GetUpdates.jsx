import Marquee from "react-fast-marquee";
import left from '../../assets/contact-banner-bg.png'
import toast from "react-hot-toast";
const GetUpdates = () => {
    const handleSub = () => {
        toast('Subscribed successfully!', {
            icon: '👏',
          });
    }
    const handleReward = () => {
        toast.success('Please Wait For Reward')
    }
    const leftBg = {
        backgroundImage: `url(${left})`,
    }
    return (
        <div className='mt-20'>
            <div className="hero bg-[#3f14d3] p-10" style={leftBg}>

                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold">HELLO THERE !!</h1>
                        <h1 className="mb-5 text-[#05ffe5] text-3xl lg:text-5xl font-bold">GET READY FOR THE NEXT EVENT</h1>
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold">SUBSCRIBE FOR UPDATES</h1>
                        <div className="mb-2">
                            <button onClick={handleSub} className="text-white btn btn-outline mr-4">SUBSCRIBE</button>
                            <button onClick={handleReward} className="text-white btn btn-outline">Get Reward</button>
                        </div>
                        <Marquee className='font-extrabold' speed={100}>
                            Subscribe & Win exciting prizes.. First 10 Lucky subscribers will get free event tickets and gaming themed t-shirts !!
                        </Marquee>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GetUpdates;