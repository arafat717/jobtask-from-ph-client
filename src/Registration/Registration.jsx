/* eslint-disable no-undef */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Registration.css'
import { useContext, useState } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';


const Registration = () => {

    const [email, setEmail] = useState('');
    const [resetSuccess, setResetSuccess] = useState(false);
    const [resetError, setResetError] = useState(null);

    const handleResetPassword = () => {
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                setResetSuccess(true);
            })
            .catch((error) => {
                setResetError(error.message);
            });
    };

    const { createuser } = useContext(AuthContex)
    const [errors, setErrors] = useState()
    const [success, setSuccess] = useState()
    const Navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handlesignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)
        createuser(email, password)
            .then(res => {
                const newuser = res.user;
                console.log(newuser)

                setSuccess('Created user Succesfully')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'sign up succesful',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset();
                Navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setErrors('Password should be at least 6 characters')
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })

    }

    return (
        <div className="hero gradient-background min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <div className="text-center lg:text-left">
                    <img className="" src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=740&t=st=1689491218~exp=1689491818~hmac=9f875c95c8278d822fb330c52dc1679c3679d85840bbc22bf4e1cc073e055b6e" alt="" />
                </div> */}
                <div className="card flex-shrink-0 w-screen max-w-sm shadow-lg bg-slate-900">

                    <form onSubmit={handlesignup} className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            {resetSuccess ? (
                                <p>Password reset email sent successfully.</p>
                            ) : (
                                <>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="input input-bordered" />
                                    <button onClick={handleResetPassword}>Reset Password</button>
                                    {resetError && <p>{resetError}</p>}
                                </>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p className='text-red-950'><small>{errors}</small></p>
                            <p className='text-success-500'><small>{success}</small></p>
                        </div>
                        <p>Already have an account ? <span className='text-red-900'><Link to='/login'>Login</Link></span></p>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;