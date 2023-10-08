import { Link } from 'react-router-dom';
import Error from '../../assets/error-image.png'
const ErrorPage = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-[#3f14d3] text-center text-3xl lg:text-5xl font-extrabold'>404</h2>
            <h2 className='text-[#3f14d3] text-center text-3xl lg:text-5xl font-extrabold'>PAGE NOT FOUND !!!</h2>
            <div className='flex justify-center mt-20'>
                <img src={Error} alt="" />
            </div>
            <div className='flex justify-center mt-5'>
                <Link to="/">
                    <button className="text-xl btn btn-outline btn-primary">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;