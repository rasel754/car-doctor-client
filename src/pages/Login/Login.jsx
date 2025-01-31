import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
const Login = () => {

  const {signIn}=useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)

     .then((result) => {
      const loginUser = result.user;
        console.log(loginUser);
        const user ={email};

        // get access token
        axios.post('http://localhost:5000/jwt' , user ,{withCredentials:true})
        .then(res => {
          console.log(res.data);
          if(res.data.success){
        navigate(location?.state ? location?.state : '/')

          }
        })

      })
    .catch((err) => {
      console.error(err);
    });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={loginImg} alt="" />
        </div>

        <div className="card shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2">
          <h1 className="text-3xl text-center font-bold mt-7">Login!</h1>

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="px-6 pb-3 text-center">
            New to Car Doctors{" "}
            <Link className="text-orange-500 font-bold" to="/signUp">
              Sign Up{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
