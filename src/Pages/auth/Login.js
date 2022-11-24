import React,{useState} from 'react'
import { Link } from "react-router-dom";
import './style.css'
import vektor from '../../assets/image/Vector.png'
import blanja from '../../assets/image/Blanja.png'
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../configs/redux/actions/userAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const { isLoading } = useSelector((state) => state.auth);
     const [formLogin, setFormLogin] = useState({
       email: "",
       password: "",
     });

     const handleChange = (e) => {
       setFormLogin({
         ...formLogin,
         [e.target.name]: e.target.value,
       });
  };
  console.log(formLogin.email)
     const handleLogin = (e) => {
       e.preventDefault();
       dispatch(loginUser(formLogin, navigate));
     };
  return (
    <div>
      <div className="form-signin">
        <div className="header-login">
          <img className="mb-4 text-center" src={vektor} alt="" />
          <img className="mb-4 mt-4 ms-2" src={blanja} alt="" />
          <h1 className="mb-3 title-login">Please login with your account</h1>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="email"
              value={formLogin.email}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email Address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control mt-3"
              placeholder="Password"
              value={formLogin.password}
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="mb-4 mt-4 float-end">
            <label>Forgot password?</label>
            {/* <Link className='text-danger'>Forgot Password?</Link> */}
          </div>
          {/* <button>{isLoading ? "loading.." : "Login"}</button> */}
          <button className="w-100 btn btn-sign">
            {isLoading ? "loading.." : "Login"}
          </button>
          <label className="register mb-3 mt-4 text-danger" htmlFor="register">
            Don't have a Blanja account?
            <Link className="page-register" to="/register">
              Register
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Login