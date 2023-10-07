import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import loginBg from '../../assets/login-reg-bg.png'
import toast from "react-hot-toast";

const Register = () => {
    const bgStyle = {
        backgroundImage: `url(${loginBg})`,
    }
    const { googleSignIn, createUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const image = form.get('image')
        console.log(email, password, name, image);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                toast.success('Successfully Signed In!')
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
        <div className="bg-cover bg-center min-h-screen text-white" style={bgStyle}>
            <h2 className="text-3xl text-center font-bold">Please Register</h2>
            <form onSubmit={handleRegister} className="card-body md:3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered border-white bg-transparent" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Image URL</span>
                    </label>
                    <input type="text" name="image" placeholder="Your Image" className="input input-bordered border-white bg-transparent" required />
                </div>
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
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-outline text-white">Register</button>
                </div>
                <label className="label">
                    Have an account? <Link to="/login" className="label-text-alt link link-hover text-white">Please Login</Link>
                </label>
                <div className="divider">Continue with</div>
                <hr />
            </form>
            <div className="flex justify-center">
                <div>
                    <button onClick={handleGoogleButton} className="btn btn-outline  text-white">
                        <FaGoogle></FaGoogle>
                        Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;