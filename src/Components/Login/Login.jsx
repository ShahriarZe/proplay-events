import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import loginBg from '../../assets/login-reg-bg.png'
import toast from "react-hot-toast";

const Login = () => {
    const bgStyle = {
        backgroundImage: `url(${loginBg})`,
    }
    const { googleSignIn, signInUser } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                toast.success('Successfully Logged In!')
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleGoogleButton = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <div className="items-center justify-center bg-cover bg-center min-h-screen text-white" style={bgStyle}>
                <form onSubmit={handleLogin} className=" card-body md:3/4 lg:w-1/2 mx-auto">
                    <h2 className="text-3xl mt-24 text-center font-bold">Please Login</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered border-white bg-transparent" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered border-white bg-transparent" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline text-white">Login</button>
                    </div>
                    <label className="label">
                        New here? <Link to="/register" className="label-text-alt link link-hover text-white">Create an account</Link>
                    </label>
                    <div className="divider">continue with</div>
                    <hr />

                </form>
                <div className="flex justify-center">
                    <div>
                        <button onClick={handleGoogleButton} className="text-white btn btn-outline ">
                            <FaGoogle></FaGoogle>
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;