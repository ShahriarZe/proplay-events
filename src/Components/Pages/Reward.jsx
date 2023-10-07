import IconA from '../../assets/icon-1.png'
import IconB from '../../assets/icon-2.png'
import IconC from '../../assets/icon-3.png'
import IconD from '../../assets/icon-4.png'

import CardBg from '../../assets/index-3.png'

const Reward = () => {

    const bgCard = {
        backgroundImage: `url(${CardBg})`,
    }
    return (
        <div className='mt-20 text-white' style={bgCard}>
            <div>
                <h2 className="text-center text-7xl font-extrabold">
                    Reward For Our Client
                </h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-10 mt-5'>
                <div className="card  glass">
                    <figure><img className='rounded-xl' src={IconA} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Silver Tier :</h2>
                        <p><span className='font-extrabold'>How to Achieve</span>: Clients enter the Silver Tier upon their first purchase of your esports event management service.</p>
                        <p><span className='font-extrabold'>Beefits</span>: Exclusive access to event previews, early registration, and priority customer support.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline text-white">Get Reward!</button>
                        </div>
                    </div>
                </div>
                <div className="card  glass">
                    <figure><img className='rounded-xl' src={IconB} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Gold Tier :</h2>
                        <p><span className='font-extrabold'>How to Achieve</span> : Clients move to the Gold Tier after a certain total amount spent on your services (cumulative spending of $500).</p>
                        <p><span className='font-extrabold'>Beefits</span>: All Gold Tier benefits plus special discounts on event tickets, merchandise, or additional services.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline text-white">Get Reward!</button>
                        </div>
                    </div>
                </div>
                <div className="card  glass">
                    <figure><img className='rounded-xl' src={IconC} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Diamond Tier :</h2>
                        <p><span className='font-extrabold'>How to Achieve</span>: Clients reach the Diamond Tier after a higher total spending threshold (e.g., cumulative spending of $1500).</p>
                        <p><span className='font-extrabold'>Beefits</span>: All Gold Tier benefits plus VIP seating at events, backstage access, and personalized event planning consultations.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline text-white">Get Reward!</button>
                        </div>
                    </div>
                </div>
                <div className="card  glass">
                    <figure><img className='rounded-xl' src={IconD} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Platinum Tier :</h2>
                        <p><span className='font-extrabold'>How to Achieve</span>: Clients attain the Platinum Tier after a significant total spending amount (e.g., cumulative spending of $5000).</p>
                        <p><span className='font-extrabold'>Beefits</span>: All Diamond Tier benefits plus complimentary event tickets, exclusive meet-and-greet opportunities with esports stars, and a dedicated account manager for personalized service.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline text-white">Get Reward!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reward;