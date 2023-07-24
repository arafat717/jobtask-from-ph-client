import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
    const Navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { loggedUser } = useContext(AuthContex)
    const handlelogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loggedUser(email, password)
            .then(res => {
                const newuser = res.user;
                console.log(newuser)
                // console.log(loggedemail)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'login successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset();
                Navigate(from, { replace: true })


            })
            .catch(error => {
                console.log(error)
               
            })

    }
    return (
        <div className="hero gradient-background min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <div className="text-center lg:text-left">
                <img className="" src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=740&t=st=1689491218~exp=1689491818~hmac=9f875c95c8278d822fb330c52dc1679c3679d85840bbc22bf4e1cc073e055b6e" alt="" />
            </div> */}
                <div className="card flex-shrink-0 w-screen max-w-sm shadow-lg bg-slate-900">

                    <form onSubmit={handlelogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New here ? <span className="text-red-900"><Link to='/registration'>Register</Link></span></p>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;