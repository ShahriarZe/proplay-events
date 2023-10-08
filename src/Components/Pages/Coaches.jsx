import C1 from '../../assets/c1.png'
import C2 from '../../assets/c2.png'
import C3 from '../../assets/c3.png'
import C4 from '../../assets/c4.png'
import loginBg from '../../assets/login-reg-bg.png'




const Coaches = () => {
    const bgStyle = {
        backgroundImage: `url(${loginBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div style={bgStyle}>
            <div className="hero text-white ">
                <div className="">
                    <div className="">
                        <h1 className="text-3xl lg:text-7xl font-bold text-center">Need A Coach For Your Team? </h1>
                        <p className="py-6 text-2xl text-center">Coaches play a vital role in esports event management by providing expert guidance, strategic insights, and mental support to competitive teams. Their experience and knowledge help teams refine their gameplay, develop effective strategies, and make critical in-game decisions, ultimately enhancing the overall performance of the players. </p>
                    </div>

                </div>
            </div>
            <h2 className=" text-center text-white text-3xl lg:text-7xl font-extrabold mb-5 mt-10">
                Meet Our Coaches
            </h2>
            <div className="overflow-x-auto container mx-auto"  data-aos="fade-up"
                data-aos-duration="1000">
                <table className="table text-xl text-white mb-10">
                    {/* head */}
                    <thead className='text-white'>
                        <tr>
                            <th>Name</th>
                            <th>Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={C1} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                3+ Years in Managing LAN Event
                            </td>

                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={C2} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Brice Swyre</div>
                                        <div className="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                2+ Years in Sponsor Management

                            </td>

                        </tr>
                        {/* row 3 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={C3} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Marjy Ferencz</div>
                                        <div className="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                2+ Years in Talent Management

                            </td>

                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={C4} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Yancy Tear</div>
                                        <div className="text-sm opacity-50">Brazil</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                3+ Years in Organizing Team
                            </td>
                        </tr>
                    </tbody>

                </table>
                <div className='flex justify-center'>
                    <button className=" text-white btn btn-outline text-xl mb-10">Hire Now</button>
                </div>
            </div>
        </div>
    );
};

export default Coaches;