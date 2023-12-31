import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import loginBg from '../../assets/login-reg-bg.png'
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const location = useLocation()
    const navigate = useNavigate()
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
        if (password.length < 6) {
            e.target.reset()
            return toast.error('Password Must be 6 Character long')
        }
        else if (!/[A-Z]/.test(password)) {
            e.target.reset()
            return toast.error('Must contain 1 Uppercase letter')
        }
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            e.target.reset()
            return toast.error('Must contain 1 special Character')
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: image
                })
                navigate(location?.state ? location.state : '/')
                e.target.reset()
                toast.success('Successfully Signed In!')
            })
            .catch(err => {
                console.log(err);
                e.target.reset()
                toast.error('User Already Exist')
            })
    }

    const handleGoogleButton = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
                toast.success('Successfully Logged In!')
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="bg-cover bg-center min-h-screen text-white" style={bgStyle}>
            <form onSubmit={handleRegister} className="card-body md:3/4 lg:w-1/2 mx-auto">
                <h2 className="text-3xl mt-20 text-center font-bold">Please Register</h2>
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