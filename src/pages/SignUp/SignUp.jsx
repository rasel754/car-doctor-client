import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const SignUp = () => {

        const {createUser}=useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name =form.name.value;
        const email =form.email.value;
        const password =form.password.value;
        console.log(name, email, password);

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        }
        )
        .catch(error => {
            console.error(error);
        })
      };
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={loginImg} alt="" />
        </div>

        <div className="card shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2">
          <h1 className="text-3xl text-center font-bold mt-7">SignUp!</h1>

          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Confirm Password</span>
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
              <input className="btn btn-primary" type="submit" value="Sign UP " />
            </div>
          </form>
          <p className="px-6 pb-3 text-center">
           Already Have an Account?{" "}
            <Link className="text-orange-500 font-bold" to="/login">
              Login{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;